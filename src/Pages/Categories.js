import React from "react";
import { Link, useParams } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'; 

function Categories(){
    let { flavour } = useParams()
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }

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
                        onClick={handleClick}
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