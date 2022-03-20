import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data.json'
import '../Style/App.css'

const News = () => {
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }

    return (
        <div className="list__page">
            {data.map((item) =>{
                if(item.type === 'news'){
                    // console.log(data)
                    const {
                        id,
                        index,
                        image,
                        title,
                        short,
                        date
                    } = item
                    return<Link
                        key={index}
                        className='list__link'
                        to={`/news/${id}`}
                        onClick={handleClick}
                    >
                        <img src={image}/>
                        <small>
                            {date}
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

export default News;