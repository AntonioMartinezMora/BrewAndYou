import React, {useEffect, useState, useContext} from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [openMenu, setOpenMenu] = useState(false)

    return <AppContext.Provider value={{
        openMenu,
        setOpenMenu
      }}>
          {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}