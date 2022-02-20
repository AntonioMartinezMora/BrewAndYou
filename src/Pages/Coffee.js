import React from "react";
import { Link, useParams } from "react-router-dom";
// import {FaChevronRight} from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
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
                        recipe,
                        needOne,
                        needTwo,
                        needThree,
                        btnOne,
                        btnTwo,
                        btnThree
                    } = item
                    const newCoffee = {
                        id, image, type, country, name, descript, recipe, index, needOne, needTwo, needThree, btnOne, btnTwo, btnThree
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
                            <div className="coffee__needs">
                                <h2>You will need to make this coffee:</h2>
                                <div className="need__info">
                                    <span>
                                    <AiFillCaretRight />   
                                    {needOne} 
                                    </span>
                                    <button className={btnOne ? "find__btn" : "find__btn hide"}>
                                        <a 
                                            href={btnOne}
                                            target="_blank"
                                        >
                                            Find it
                                        </a>
                                    </button>
                                </div>
                                <div className="need__info">
                                    <span>
                                    <AiFillCaretRight />   
                                    {needTwo} 
                                    </span>
                                    <button className={btnTwo ? "find__btn" : "find__btn hide"}>
                                        <a 
                                            href={btnTwo}
                                            target="_blank"
                                        >
                                            Find it
                                        </a>
                                    </button>
                                </div>
                                <div className="need__info">
                                    <span>
                                    <AiFillCaretRight />   
                                    {needThree} 
                                    </span>
                                    <button className={btnThree ? "find__btn" : "find__btn hide"}>
                                        <a 
                                            href={btnThree}
                                            target="_blank"
                                        >
                                            Find it
                                        </a>
                                    </button>
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