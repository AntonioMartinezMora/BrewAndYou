import React from "react";
import { Link, useParams } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'; 
import '../Style/Flavours.css'

function Flavours(){
    let { flavour } = useParams()

    return (
        <div className="coffees__container">
            {data.map((item)=>{
                if(item.type === flavour){
                    const {
                        id,
                        index,
                        image,
                        type,
                        name,
                        short
                    } = item
                    return<div
                        key={index}
                        className="coffee__link"
                    >   
                        <Link
                            to={`/coffees/${id}`}
                            className="img__link"
                        >
                            <img src={image}/>
                        </Link>
                        <h3 className="coffee__name">
                            {name}
                        </h3>
                        <p>{short}</p>
                        <button className="learn__btn">
                            <Link
                            to={`/coffees/${id}`}
                            >
                                Learn more
                            </Link>
                        </button>
                    </div>
                }
            })}
        </div>
    )
}

export default Flavours;