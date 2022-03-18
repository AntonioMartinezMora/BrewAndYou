import React from 'react'
import { Link } from "react-router-dom";
import data from '../Data.json'
import '../Style/App.css'

const Trends = ( ) => {
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }

    return (
    <div className="list__page">
        {data.map((item) =>{
            if(item.type === 'trends'){
                console.log(data)
                const {
                    id,
                    index,
                    image,
                    title,
                } = item
                return<Link
                    key={index}
                    className='trend__link'
                    to={`/trends/${id}`}
                    onClick={handleClick}
                >
                    <img src={image}/>
                    <div className="trend__card--title">
                        <h3 className='title__trend-card'>
                            {title}
                        </h3>
                    </div>
                </Link>
            }
        })}
    </div>
    )
}

export default Trends;