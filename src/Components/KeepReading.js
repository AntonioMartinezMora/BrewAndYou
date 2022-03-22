import React from 'react'
import { Link } from 'react-router-dom'
import data from '../Data.json'
import '../Style/App.css'; 
import {CgNotes} from "react-icons/cg";

const KeepReading = props =>{
    const handleClick = () =>{
        window.scrollTo(0, 0)
    }
    // get the type of blog(trend or news)
    const typeLink = props.type
    // new array with correct type
    const typeArr = [...new Set(data.map((item=>{
        if(item.type === typeLink){
            return item
        }
    })))]
    // sfuffle array
    const shuffleArr = typeArr.sort(()=> 0.5 - Math.random())
    // pick 3 items from shuffle array
    const selectedElements = shuffleArr.slice(0, 3)

    return (
        <div className="keep__reading">
            <h3><CgNotes className='kr__icon'/>Keep Reading</h3>
                {selectedElements.map((item)=>{
                    const {
                        index,
                        image,
                        title,
                        id
                    } = item
                    return<Link
                    className="kr__item"
                    to={`/${typeLink}/${id}`}
                    key={index}
                    onClick={handleClick}
                    >
                    <img src={image}/>
                    <div className="kr__info">
                        <small>
                            {typeLink}
                        </small>
                        <h4>{title}</h4>
                    </div>
                    </Link>
            })}
        </div>
        
    )
}

export default KeepReading;