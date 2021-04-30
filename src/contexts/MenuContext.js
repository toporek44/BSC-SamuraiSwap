import React, { useState } from 'react'

const MenuContext = React.createContext(false)

const MenuContextProvider = ({ children }) => {
    const [isMenuActive, setMenuActive] = useState(false)


    return <MenuContext.Provider value={{isMenuActive, setMenuActive}}>{children}</MenuContext.Provider>
}

export { MenuContext, MenuContextProvider }
