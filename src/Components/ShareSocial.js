import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import '../Style/App.css'; 
import '../Style/ShareSocial.css'; 

const  ShareSocial = props =>{
    const pageUrl = window.location.href
    const message = 'Just discovered this coffee on BrewedAndYou!'

    const twitterApi = `https://twitter.com/intent/tweet?text=${message} ${pageUrl}. `

    return <div className="share__container">
        <button
            className="social__btn"
            onClick={() => {window.open(
                URL = twitterApi
            )}}
        >
            <AiOutlineTwitter />
        </button>
        <button className="social__btn">
            <a 
                href={twitterApi}
                target="_blank"
            >
                <AiOutlineTwitter />
            </a>
        </button>
    </div>
}

export default ShareSocial;