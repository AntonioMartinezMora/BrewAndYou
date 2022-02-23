import React from "react";
import { TwitterShareButton }from "react-share";
import {TwitterIcon} from "react-share";
import '../Style/App.css'; 
import '../Style/ShareSocial.css'; 

const  ShareSocial = props =>{
    return <div className="share__container">
        <TwitterShareButton
            url={window.location.href}
            title={`I've just discovered${props.name}`}
            hashtag="#coffee"
        >
            <TwitterIcon 
                className="twitter__icon"
            ></TwitterIcon>
        </TwitterShareButton>
    </div>
}

export default ShareSocial;