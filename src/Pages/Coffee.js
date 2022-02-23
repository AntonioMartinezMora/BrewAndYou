import React from "react";
import { Link, useParams } from "react-router-dom";
// import {FaChevronRight} from "react-icons/ai";
import NeedsList from '../Components/NeedsList';
import ShareSocial from '../Components/ShareSocial';
import { AiFillCaretRight, AiOutlineFileDone, AiOutlineDoubleRight } from "react-icons/ai";
import data from '../Data.json'
import '../Style/App.css'; 
import '../Style/Coffee.css'; 

function Coffee(){
    const {id} = useParams()
    // const shuffledData = data.sort((a, b) => 0.5 - Math.random())
    // const recommended = shuffledData.slice(0, 2)


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
                            <div className="bottom__page">
                            <NeedsList 
                                needOne={needOne}
                                needTwo={needTwo}
                                needThree={needThree}
                                btnOne={btnOne}
                                btnTwo={btnTwo}
                                btnThree={btnThree}
                            />
                            <ShareSocial name={name}/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Coffee;