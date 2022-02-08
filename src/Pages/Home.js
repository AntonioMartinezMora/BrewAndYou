import React from "react";
// Components
import Discover from "../Components/Discover";
import Hero from "../Components/Hero";
// Style
import '../Style/Home.css'

function Home(){
    return <main>
        <Hero />
        <Discover />
    </main>
}

export default Home;