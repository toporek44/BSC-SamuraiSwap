import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import MenuItem from "./MenuItem";
import telegram from "../assets/telegram.png"
import twitter from "../assets/twitter.png"
import logo from "../assets/logo.png"

import {menuPages} from '../utils/menuPages'
import {MenuContext} from "../contexts/MenuContext";
import {ThemeContext} from "../contexts/ThemeContext";
import {colors} from "../utils/colors";

import {ReactComponent as Moon} from "../assets/moon.svg";
import {ReactComponent as Sun} from "../assets/sun.svg";
import {ReactComponent as LanguageIcon} from "../assets/language.svg";
import {ReactComponent as SettingsIcon} from "../assets/settings.svg";

const MenuWrapper = styled.div`
  position:fixed;
  left:0;
  top:0;
  height: 100%;
  width: 250px;
  min-width: 250px;
  margin:0;
  overflow: initial;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 30000;
  overflow: hidden;
  border-right: 2px solid ${({isDark}) => isDark ? "#000" : colors.dark};
  background:  ${({isDark}) => isDark ? colors.darkTheme : colors.dark};
  transform: translateX(${({isMenuActive}) => isMenuActive ? "0" : "-103%"});
  
   @media (min-width: 800px ){
       transform: none;
       width: ${({isMenuActive}) => !isMenuActive ? "250px" : "55px"};
       min-width: ${({isMenuActive}) => !isMenuActive ? "250px" : "55px"};
     }
  
  transition: .4s all ease-in-out;
  
  .active {
  & div {
    background: ${colors.light};
  }
  
  svg {
fill: ${colors.secondary};
}
}

`



const ControlPanel = styled.div`
border-top: 1px solid ${colors.ultraLight};
background: ${({isDark}) => isDark ? colors.darkTheme :colors.light};
width: 100%;
margin-top: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem ;
`
const ControlContainer = styled.div`
display: flex;
justify-content: ${({secondary}) => secondary ? "center" : "space-between"};
align-items: center;
width: 100%;
padding:1rem 2rem ;
`


const MediaContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
color:#fff;

 
     

`

const MediaLink = styled.a`
margin:0 .5rem;

  img {
  width: 20px;
  }
`



const MenuItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden auto;
    height: 100%;
    width: 100%;
`

const Balance = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5rem;
color:#fff;
margin-right: 1.3rem;
`

const BalanceLogo = styled.img`
width: 35px;
margin-right: 1.2rem;
background: ${colors.dark};
border-radius: 100%;
`

const Button = styled.div`
margin:0 .5rem;

svg {
width: 25px;
height: 25px;
path {
fill: ${({isDark}) => isDark ? colors.white : colors.secondary};
}
}



`

const ThemeChanger = styled.button`
background: transparent;
border:none;
display: flex;
justify-content: center;
align-items: flex-start;
height: 40px;
padding: .6rem .6rem .3rem;
border-radius: 20px;
margin-right: 2rem;
     .slash {
      font-size: 1.2rem;
      color:#fff;
      margin:0 .6rem;
      position:relative;
      top:3px;
}

&:hover {
cursor: pointer;
background:  ${({isDark}) => isDark ? "rgba(65,65,65,0.6)" :"rgba(120,1,7,0.7)"};
}

&:focus {
outline: none;
}
`

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  margin-right: 2rem;
  svg {
    width: 25px;
    height: 25px;
    margin-right: 1rem;
  }
`

const StyledSettingIcon = styled(SettingsIcon)`
width: 30px;
height: 30px;
fill: ${({isDark}) => isDark ? colors.white : colors.white};
&:hover {
cursor: pointer;
}
`

const Menu = () => {
    const {isMenuActive, setMenuActive} = useContext(MenuContext)
    const {isDark, toggleTheme} = useContext(ThemeContext)
    const [innerWidth, setInnerWidth] = useState(0)

    useEffect(()=> {
        setInnerWidth(window.innerWidth)
    },[])
    return (
        <MenuWrapper isMenuActive={isMenuActive} isDark={isDark} >


            <MenuItemsContainer>
                {
                    menuPages.map(({Icon, pageTitle, items},id) => (

                        <MenuItem Icon={Icon} pageTitle={pageTitle} key={pageTitle+id}  setMenuActive={setMenuActive} >
                            {
                                items?
                                items.map( ({pageTitle, link}, id) =>(
                                <MenuItem secondary="true" secondaryAcc="true" pageTitle={pageTitle} link={link} key={pageTitle+id}  setMenuActive={setMenuActive} />
                                ) )  : null}
                        </MenuItem>
                    ))
                }
            </MenuItemsContainer>

            <ControlPanel isDark={isDark}>
                {innerWidth > 800?
                    !isMenuActive?
                <div>
                <ControlContainer>
                    <Balance><BalanceLogo src={logo} alt="pasta"/> $213.34</Balance>
                    <MediaContainer >
                        <MediaLink href="#" target="_blank" rel="noreferrer noopener"><img src={telegram} alt="telegram"/></MediaLink>
                        <MediaLink href="#" target="_blank" rel="noreferrer noopener"><img src={twitter} alt="twitter"/></MediaLink>
                    </MediaContainer>
                </ControlContainer>

                    <ControlContainer >
                        <ThemeChanger isDark={isDark}  onClick={toggleTheme}>
                            <Button isDark={isDark}><Sun/></Button>
                            <span className="slash">/</span>
                            <Button isDark={!isDark}><Moon /></Button>
                        </ThemeChanger>
                        <LanguageContainer>
                            <LanguageIcon />
                            ENG
                        </LanguageContainer>

                </ControlContainer>
                </div>
                    :
                 <StyledSettingIcon isDark={isDark} onClick={() => setMenuActive(!isMenuActive)}/> :

                    <>
                        <ControlContainer>
                            <Balance><BalanceLogo src={logo} alt="pasta"/> $1234.4324</Balance>
                            <MediaContainer >
                                <MediaLink href="#" target="_blank" rel="noreferrer noopener"><img src={telegram} alt="telegram"/></MediaLink>
                                <MediaLink href="#" target="_blank" rel="noreferrer noopener"><img src={twitter} alt="twitter"/></MediaLink>
                            </MediaContainer>
                        </ControlContainer>

                        <ControlContainer >
                            <ThemeChanger isDark={isDark}  onClick={toggleTheme}>
                                <Button isDark={isDark}><Sun/></Button>
                                <span className="slash">/</span>
                                <Button isDark={!isDark}><Moon /></Button>
                            </ThemeChanger>
                            <LanguageContainer secondary>
                                <LanguageIcon />
                                ENG
                            </LanguageContainer>
                        </ControlContainer>
                    </>
                }
            </ControlPanel>

        </MenuWrapper>
    );
};

export default Menu;