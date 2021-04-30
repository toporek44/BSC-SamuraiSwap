import React from 'react';
import {MenuContextProvider} from "./contexts/MenuContext"
import {ThemeContextProvider} from "./contexts/ThemeContext";
const Providers = ({children}) => {
    return (

        <MenuContextProvider>
            <ThemeContextProvider>
            {children}
            </ThemeContextProvider>
        </MenuContextProvider>
    );
};

export default Providers;