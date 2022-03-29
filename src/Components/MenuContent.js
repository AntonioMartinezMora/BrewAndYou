import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const MenuContent = () =>{
    const {openMenu, setOpenMenu} = useGlobalContext()


    return (
        <div 
        className={openMenu ? "menu__content open" : "menu__content"}
        >
            sup appaao
        </div>
    )
}

export default MenuContent