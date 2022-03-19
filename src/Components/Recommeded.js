import React from 'react';
import { Link } from "react-router-dom";
import data from '../Data.json';
import '../Style/App.css'; 

function Recommended(){
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }
    // shuffle data
    const shuffleData = data.sort(() => 0.5 - Math.random());
    // pick 3 items from shuffle data
    const selectedItems = shuffleData.slice(0, 3)

    return (
        <div className="recommended__container">
            {selectedItems.map((item)=>{
                if(item.type === 'discover'){
                    const {
                        id,
                        index,
                        image,
                        title,
                        country,
                        short
                    } = item
                    return<Link
                            key={index}
                            className="list__link"
                            to={`/coffee/${id}`}
                            onClick={handleClick}
                        >   
                            <img src={image}/>
                            <small className="country__list--link">
                            {country}
                        </small>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {short}
                        </p>
                        </Link>
                }
                
            })}
        </div>
    )
}

export default Recommended;