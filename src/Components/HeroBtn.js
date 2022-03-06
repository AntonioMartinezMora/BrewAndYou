import React from "react";
import { Link } from "react-router-dom"
import data from '../Data.json';
import '../Style/App.css'

const HeroBtn = () => {
    let random = data[Math.floor(Math.random() * data.length -1)]

    return(
        <button 
            className="hero__btn"
        >
            <Link
                to={`/coffee/${random.id}`}
            >
                Discover now
            </Link>
        </button>
    )
}

export default HeroBtn;