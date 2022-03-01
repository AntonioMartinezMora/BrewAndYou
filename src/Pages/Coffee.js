import React from "react";
import { Link, useParams } from "react-router-dom";
// import {FaChevronRight} from "react-icons/ai";
import CoffeeInfo from "../Components/CoffeeInfo";
import NeedsList from '../Components/NeedsList';
import ShareSocial from '../Components/ShareSocial';
import Recommended from "../Components/Recommeded";
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
                                <h1 className="coffee__name">{name}</h1>
                                <small className="country small__info">
                                    {country}
                                </small>
                                <small className="type small__info">
                                    {type} coffee
                                </small>
                            </div>
                            <div className="page__container">   
                                <div className="main__body">
                                <CoffeeInfo 
                                    descript={descript}
                                    recipe={recipe}
                                />
                                <ShareSocial 
                                    name={name}
                                />
                                </div>
                                
                                <div className="side__bar">
                                <NeedsList 
                                    needOne={needOne}
                                    needTwo={needTwo}
                                    needThree={needThree}
                                    btnOne={btnOne}
                                    btnTwo={btnTwo}
                                    btnThree={btnThree}
                                />
                                </div>
                            </div>
                            
                        </div>
                    )
                }
            })}
            <Recommended />
        </div>
        
    )
}

export default Coffee;