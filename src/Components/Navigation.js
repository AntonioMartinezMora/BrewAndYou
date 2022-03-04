import React, { useState } from "react";
import data from '../Data.json';
import {Link, Location, useLocation} from 'react-router-dom'
import '../Style/App.css'
// Import icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
    // Mobile Menu
    const [openMenu, setOpenMenu] = useState(false)

    // Filter and display nav types of coffees
    const typesCoffees = [...new Set(data.map((item)=>{
        if(item.type !== null){
            return item.type 
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
                    {typesCoffees.map((type, index)=>{
                      if(type !== undefined){
                          return(
                            <Link
                                to={`type/${type}`}
                                key={index}
                                className={location.pathname === '/' ? "type__link--home" : "type__link"} 
                            >
                              {type}
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
                                    to={`type/${type}`}
                                    key={index}
                                    className="type__link"
                                    onClick={()=> setOpenMenu(false)}
                                >
                                {type}
                                </Link>
                            )
                        }  
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Navigation;