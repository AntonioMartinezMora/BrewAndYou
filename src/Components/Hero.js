import React from "react";
import { Link } from 'react-router-dom'
import '../Style/App.css'
import HeroData from '../HeroData.json'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__main">
                {HeroData.map((item)=>{
                    if(item.hero === 'main'){
                        const {
                            id,
                            type,
                            index,
                            image,
                            title,
                            short
                        } = item
                        return(
                        <Link
                            to={`/${type}/${id}`}
                            key={index}
                            className="hero__main--link"
                        >
                            <img src={image} />
                            <h6
                               className="hero__tag" 
                            >{type}</h6>
                            <h3>{title}</h3>    
                            <p>{short}</p>    
                        </Link> 
                        )
                    }
                })}
            </div>
            <div className="hero__side">
                {HeroData.map((item)=>{
                    if(item.hero === 'side'){
                        const {
                            id,
                            type,
                            index,
                            image,
                            title,
                            short
                        } = item
                        return(
                        <Link
                            to={`/${type}/${id}`}
                            key={index}
                            className="hero__side--link"
                        >
                            <div 
                                className="img__cont"
                                style={{ backgroundImage:`url(${image})` }}
                            >   
                            </div>

                            <div className="hero__side--info">
                                <h6
                                className="hero__tag" 
                                >{type}</h6>
                                <h3>{title}</h3>    
                                <p>{short}</p>    
                            </div>
                        </Link> 
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Hero;