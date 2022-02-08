import React from "react";
import '../Style/App.css'
import '../Style/Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__info">
                <h2>Coffee is not just a drink; it;s a an experience, a culture and way to bring people together.</h2>
                <p>Learn about coffee drinks from all over the world and how they are made.</p>
            </div>
            <div className="hero__bg">
                {/* <img src="https://media.publit.io/file/MainImages/coffee_hero.png" /> */}
            </div>

        </div>
    )
}

export default Hero;