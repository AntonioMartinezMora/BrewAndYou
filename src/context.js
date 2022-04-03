import React, {useEffect, useState, useContext} from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    return <AppContext.Provider value={{
        openMenu,
        setOpenMenu,
        openSearch,
        setOpenSearch 
      }}>
          {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}