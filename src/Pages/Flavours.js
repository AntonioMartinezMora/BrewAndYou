import React from "react";
import { Link, useParams } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'; 
import '../Style/Flavours.css'

function Flavours(){
    let { flavour } = useParams()

    return (
        <div className="list__coffees">
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
                    return<Link
                        key={index}
                        className="coffee__link"
                        to={`/coffees/${id}`}
                    >   
                        <img src={image}/>
                        <h3 className="title__text">
                            {name}
                        </h3>
                        <p>{short}</p>
                    </Link>
                }
            })}
        </div>
    )
}

export default Flavours;