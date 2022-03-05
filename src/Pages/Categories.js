import React from "react";
import { Link, useParams } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'; 

function Categories(){
    let { flavour } = useParams()

    return (
        <div className="list__coffees">
            {data.map((item)=>{
                if(item.category === flavour){
                    const {
                        id,
                        index,
                        image,
                        category,
                        name,
                        short
                    } = item
                    return<Link
                        key={index}
                        className="coffee__link"
                        to={`/coffee/${id}`}
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

export default Categories;