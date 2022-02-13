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
                        name
                    } = item
                    return<Link
                        to={`/coffees/${id}`}
                        key={index}
                        className="coffee__link"
                    >
                        <div className="coffee__link--info">
                            <img src={image}/>
                            <h4 className="coffee__name">
                                {name}
                            </h4>
                        </div>
                    </Link>
                }
            })}
        </div>
    )
}

export default Flavours;