import React from "react"
import { Link } from "react-router-dom"
import '../Style/App.css'
import { BiWorld } from "react-icons/bi";
import { useGlobalContext } from '../context'

const HomeDiscover= () =>{
    const {discoverArr} = useGlobalContext()

    //scroll page after click link
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }

    // sfuffle array
    const shuffleArr = discoverArr.sort(()=> 0.5 - Math.random())
    // pick 3 items from shuffle array
    const discoverElements = shuffleArr.slice(0, 6)

    return (
        <div className="home__discovery">
            <h1
            className="home__headline"
            >Discover coffees from around the world</h1>
            <p className="discover__text">Travel the globe without leaving your home and learn new ways how coffee is enjoyed.</p>
            { <div className="home__page">
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
                        className='world__link'
                        to={`/coffee/${id}`}
                        onClick={handleClick}
                    >
                        <img src={image}/>
                        <h6 className="world__list--link">
                            <BiWorld className="world__icon"/> {country}
                        </h6>
                        <div className="world__link--info">
                            <h3>
                                {title}
                            </h3>
                            <p>
                                {short}
                            </p>
                        </div>
                    </Link>
                }
            )}
            </div> }
            <Link
                to={"/discover"}
                className="link__btn"
            >
                Discover More
            </Link>
        </div>

    )
}

export default HomeDiscover;