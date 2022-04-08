import React from "react"
import { Link } from "react-router-dom"
import '../Style/App.css'
import data from '../Data.json'
import { BiWorld } from "react-icons/bi";

const HomeDiscover= () =>{
    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }

    // array for discover coffees
    const discoverArr = [...new Set(data.map((item=>{
        if(item.type === 'discover'){
            return item
        }
    })))]

    // pick 3 items from shuffle array
    const discoverElements = discoverArr.slice(0, 6)

    return (
        <>
        <h1>Discover coffees from around the world</h1>
        <div className="list__page">
            {discoverElements.map((item)=>{

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
                        <h6 className="country__list--link">
                            <BiWorld className="world__icon"/> {country}
                        </h6>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {short}
                        </p>
                    </Link>
                }
            )}
        </div>
        </>

    )
}

export default HomeDiscover;