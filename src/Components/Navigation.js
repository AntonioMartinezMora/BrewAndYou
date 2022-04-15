import React, { useState } from "react";
import {Link} from 'react-router-dom'
import '../Style/App.css'
import { useGlobalContext } from '../context'
import MenuContent from "../Components/MenuContent";
import Search from "../Components/Search"
// Import icons
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch} from "react-icons/ai";

const Navigation = () => {
    // Mobile Menu
    const {openMenu, setOpenMenu} = useGlobalContext()
    const {openSearch, setOpenSearch} = useGlobalContext()

    const closeBg = () => {
        setOpenMenu(false)
        setOpenSearch(false)
    }

    return (
        <div className="navigation">
            <nav className="nav__bar">
                <Search />
                <button 
                    className='search__icon'
                    onClick={() => {
                        setOpenSearch(!openSearch)
                        setOpenMenu(false)
                    }}
                >
                    <AiOutlineClose 
                        className={openSearch ? "menu__icon" : "menu__icon hide"}
                    />
                    <AiOutlineSearch 
                        className={openSearch ? "menu__icon hide" : "menu__icon"}
                    />
                </button>
                <Link
                    to="/"
                    className="logo"
                    onClick={()=> setOpenMenu(false)}
                >
                    <img src="https://media.publit.io/file/MainImages/BrewedAndYou_logo.png"  />
                </Link>
                <button 
                    className="menu__icon"
                    onClick={() => {
                        setOpenMenu(!openMenu)
                        setOpenSearch(false)
                    }}
                    >
                    <AiOutlineMenu 
                        className={openMenu ? "menu__icon hide" : "menu__icon"}
                    />
                    <AiOutlineClose 
                        className={openMenu ? "menu__icon" : "menu__icon hide"}
                    />
                </button>
                <MenuContent />

                
            </nav>
            {/* modal background */}
            <div 
                className={openMenu || openSearch ? "modal__bg" : "modal__bg hide"}
                onClick={closeBg}
            ></div>

        </div>
    )
}

export default Navigation;