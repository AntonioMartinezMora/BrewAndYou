import React, {useEffect, useState, useContext} from 'react';
import data from './Data.json';

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [coffeeList, setCoffeeList] = useState(data)
    const [showResults, setShowResults] = useState(false)

    // Search Box
    useEffect(() => {
    const CoffeeResults = data.filter((value) =>{
        if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
        }
        })
        setCoffeeList(CoffeeResults)
    },[searchTerm])

    // array for discover coffees home page
    const discoverArr = [...new Set(data.map((item=>{
        if(item.type === 'discover'){
            return item
        }
    })))]

    return <AppContext.Provider value={{
        openMenu,
        setOpenMenu,
        openSearch,
        setOpenSearch,
        searchTerm,
        setSearchTerm,
        coffeeList,
        showResults,
        setShowResults,
        discoverArr,
        data
      }}>
          {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}