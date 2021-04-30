import React, {useContext} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import GlobalStyle from "../GlobalStyle";
import ScrollToTop from "../components/ScrollToTop";
import Menu from "../components/Menu";

import styled from 'styled-components'
import Farms from "./Farms";
import Pools from "./Pools";
import Exchange from "./Exchange";
import Liquidity from "./Liquidity";
import Navbar from "../components/Navbar";
import Presale from "./Presale";
import {MenuContext} from "../contexts/MenuContext";
import {Connect} from "../components/Connect";
import {ThemeContext} from "../contexts/ThemeContext";
import Modal from "../components/Modal";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    position:relative;
    overflow-x: hidden;
    background: ${({isDark}) => isDark ? "#212121" : "initial"};
     @media (min-width: 800px ){
     padding-left: ${({isMenuActive}) => isMenuActive ? "50px;" : "250px"};
     }
     }

`

function Root() {
const {isMenuActive} = useContext(MenuContext)
const {isDark} = useContext(ThemeContext)

    return (
        <Wrapper isMenuActive={isMenuActive} isDark={isDark}>
            <BrowserRouter>
                <GlobalStyle/>
                <ScrollToTop/>
                {/*<Modal/>*/}
                <Navbar/>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Farms" component={Farms}/>
                    <Route exact path="/Pools" component={Pools}/>
                    <Route exact path="/Exchange" component={Exchange}/>
                    <Route exact path="/Liquidity" component={Liquidity}/>
                    <Route exact path="/PreSale" component={Presale}/>
                    <Route component={Home}/>
                </Switch>
            </BrowserRouter>
        </Wrapper>
    );
}

export default Root;
