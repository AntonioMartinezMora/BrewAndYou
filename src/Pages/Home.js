import React from "react";
// Components
import Hero from "../Components/Hero";
import HomeDiscover from "../Components/HomeDiscover";
// Style
import '../Style/App.css'

function Home(){
    return <main>
        <Hero />
        <HomeDiscover />
    </main>
}

export default Home;