import React, { useState } from "react";
import data from '../Data.json';
import {Link, Location, useLocation} from 'react-router-dom'
import SocialLinks from "../Components/SocialLinks"
import '../Style/App.css'
// Import icons
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";

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
                <Link
                    to="/"
                    className="logo"
                    onClick={()=> setOpenMenu(false)}
                >
                    <img src={location.pathname === '/' ? "https://media.publit.io/file/MainImages/BrewedAndYou_logo-white.png" : "https://media.publit.io/file/MainImages/BrewedAndYou_logo.png"}  />
                </Link>
                <div className="nav__menu">
                    {typesCoffees.map((category, index)=>{
                      if(category !== undefined){
                          return(
                            <Link
                                to={`category/${category}`}
                                key={index}
                                className={location.pathname === '/' ? "type__link--home" : "type__link"} 
                            >
                              {category}
                            </Link>
                          )
                      }  
                    })}
                </div>
                <div 
                    className="burger__menu"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <AiOutlineMenu 
                        className={openMenu ? "menu__icon hide" : "menu__icon"}
                    />
                    <AiOutlineClose 
                        className={openMenu ? "menu__icon" : "menu__icon hide"}
                    />
                </div>

                <div className={openMenu ? "respon__menu open" : "respon__menu"}>
                    {typesCoffees.map((type, index)=>{
                        if(type !== undefined){
                            return(
                                <Link
                                    to={`category/${type}`}
                                    key={index}
                                    className="type__link"
                                    onClick={()=> setOpenMenu(false)}
                                >
                                {type}
                                </Link>
                            )
                        }  
                    })}
                    <SocialLinks/>
                    <Link
                        to={"/contact"}
                        className="type__link contact__link"
                    >
                        <AiOutlineMail 
                            className="contact__icon"
                        />
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;