import React from "react";
import data from '../Data.json';
import {Link} from 'react-router-dom'
import '../Style/Navigation.css'

const Navigation = () => {
    // Filter and display nav types of coffees
    const typesCoffees = [...new Set(data.map((item)=>{
        if(item.type !== null){
            return item.type 
        }
    }))]
    console.log(typesCoffees)

    return (
        <div className="navigation">
            <nav className="nav__bar">
                <Link
                    to="/"
                    className="logo"
                >
                    <img src="https://media.publit.io/file/MainImages/BrewedAndYou_logo.png" alt="brewedandyou" />
                </Link>
                <div className="nav__menu">
                    {typesCoffees.map((type, index)=>{
                      if(type !== undefined){
                          console.log(type, index)
                          return(
                            <Link
                                to={`type/${type}`}
                                key={index}
                                className="type_link"
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