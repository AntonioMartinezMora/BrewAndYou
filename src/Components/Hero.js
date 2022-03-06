import React from "react";
import HeroBtn from "./HeroBtn";
import '../Style/App.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__info">
                <h2>Coffee is not just a drink; it's a an experience, a culture and way to bring people together.</h2>
                <p>Learn about coffee drinks from all over the world and how they are made.</p>
                <HeroBtn />
            </div>

        </div>
    )
}

export default Hero;