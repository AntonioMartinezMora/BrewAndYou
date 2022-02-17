import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'; 
import '../Style/Coffee.css'; 

function Coffee(){
    const {id} = useParams()

    return (
        <div className="coffee__container">
            {data.map((item) =>{
                if(item.id === id){
                    const {
                        id,
                        index,
                        image,
                        type,
                        country,
                        name,
                        descript,
                        recipe
                    } = item
                    const newCoffee = {
                        id, image, type, country, name, descript, recipe, index
                    }
                    return(
                        <div 
                            className="coffee__page"
                            key={index}
                        >
                            <img src={image}/>
                            <div className="coffee__info">
                                <h1>{name}</h1>
                                <small className="country small__info">
                                    Country: {country}
                                </small>
                                <small className="type small__info">
                                    Type of coffee: {type}
                                </small>
                            </div>
                            <div className="coffee__instructions">
                                <div className="descript coffee__text">
                                    <h3 className="title__text">
                                        description
                                    </h3>
                                    <p>{descript}</p> 
                                </div>
                                <div className="recipe coffee__text">
                                    <h3 className="title__text">
                                        recipe
                                    </h3>
                                    <p>{recipe}</p> 
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Coffee;