import React, { useState } from 'react'
const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext(false)

const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] =  useState(() => {
        const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
        return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
    })

    const  toggleTheme = () => {
        setIsDark((prevState) => {
            localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
            return !prevState
        })
        console.log(isDark)
    }

    return <ThemeContext.Provider value={{isDark, toggleTheme}}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
