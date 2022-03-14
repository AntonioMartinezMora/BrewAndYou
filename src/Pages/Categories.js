import React from "react";
import { Link, useParams } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'; 

function Categories(){
    let { category } = useParams()
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }

    return (
        <div className="list__page">
            {data.map((item)=>{
                if(item.category === category){
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
                        <div className="coffee__card--info">
                            <h3>
                                {name}
                            </h3>
                            <p>{short}</p>
                        </div>  
                    </Link>
                }
            })}
        </div>
    )
}

export default Categories;