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
                        title,
                        short,
                        country
                    } = item
                    return<Link
                        key={index}
                        className='list__link'
                        to={`/coffee/${id}`}
                        onClick={handleClick}
                    >
                        <img src={image}/>
                        <small className="country__list--link">
                            {country}
                        </small>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {short}
                        </p>
                    </Link>
                }
            })}
        </div>
    )
}

export default Categories;