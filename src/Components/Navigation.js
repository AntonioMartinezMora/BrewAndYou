import React, { useState } from "react";
import data from '../Data.json';
import {Link, Location, useLocation} from 'react-router-dom'
import SocialLinks from "../Components/SocialLinks"
import '../Style/App.css'
import { useGlobalContext } from '../context'
// Import icons
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail, AiOutlineSearch } from "react-icons/ai";

const Navigation = () => {
    // Mobile Menu
    const [openMenu, setOpenMenu] = useState(false)

    // Filter and display nav types of coffees
    const typesCoffees = [...new Set(data.map((item)=>{
        if(item.category !== null){
            return item.category
        }
    }))]

    const location = useLocation()

    return (
        <div className="navigation">
            <nav className="nav__bar">
                <button className="seach__icon">
                    <AiOutlineSearch />
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
                    onClick={() => setOpenMenu(!openMenu)}
                    >
                    <AiOutlineMenu 
                        className={openMenu ? "menu__icon hide" : "menu__icon"}
                    />
                    <AiOutlineClose 
                        className={openMenu ? "menu__icon" : "menu__icon hide"}
                    />
                </button>
                <div 
                className={openMenu ? "menu__content open" : "menu__content"}
                >
                </div>
                
            </nav>
            {/* modal background */}
            <div 
                className={openMenu ? "modal__bg" : "modal__bg hide"}
                onClick={() => setOpenMenu(!openMenu)}
            ></div>
            {/* menu container */}

        </div>
    )
}

export default Navigation;