import React from "react";
import Discodata from '../Discover.json';
import {Link} from "react-router-dom";
import '../Style/App.css'

const Discover = () => {
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }
    return (
        <div className="discover">
            <h1>Discover New Coffees</h1>
            <p className="discover__text">Travel the globe without leaving your home and learn new ways how coffee is enjoyed.</p>
            <div className="discover__container">
                {Discodata.map((discovery)=>{
                    const {
                        index,
                        headline,
                        quote,
                        img,
                        category
                    } = discovery
                    return <Link
                        to={`/discovery/${category}`}
                        key={index}
                        onClick={handleClick}
                    >
                        <div 
                            className="discovery__link"
                            style={{ backgroundImage:`url(${img})` }}
                        >
                            <h3>{headline}</h3>
                            <p>{quote}</p>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Discover;