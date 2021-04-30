import React, {useContext, useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import arrow from "../assets/arrow.png"
import {MenuContext} from "../contexts/MenuContext";
import {colors} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";


const PageTitle = styled.a`
    font-size: 2rem;
    font-weight: 500;
    margin-left: 1rem;
    color:${colors.white};
`

const Wrapper = styled(NavLink)`
  width:100%;
  min-height: 45px;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  padding:0;
  margin:0;
  transition: .3s all ease-in-out;
  position:relative;
  overflow: hidden;
  background: ${({isDark}) => isDark ? colors.darkTheme : "transparent"};

  ${({secondary}) => (
    secondary && css`
      width: 100%;
      background:  ${({isDark}) => isDark ? "#8c8c8c" : "transparent"} ;
      position:relative;
      z-index: 99999;
      margin:0;

      ${PageTitle} {
        font-size: 1.8rem;
      }
      
     
      
`
)}


  &:hover {
  cursor: pointer;
  transition: .3s all ease-in-out;

  }
  
  
  span {
    font-size: 1.3rem;
    position:absolute;
    color:darkred;
    position:absolute;
    top:22px;
    margin-left: .7rem;
  }
  
`


const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
min-height: 45px;
position:relative;
overflow: hidden;
transition: .3s all ease-in-out;
padding: ${({secondaryAcc}) => secondaryAcc ? "0 3.5rem" : "0 2rem 0 0"};
background: ${({secondaryAcc, isDark}) => isDark?   secondaryAcc ? "#373a36" : colors.darkTheme : secondaryAcc ? colors.ultraLight : "transparent"};
  z-index: 3;

svg {
width: 25px;
min-width: 25px;
height: 25px;
margin:  0 1.5rem;
fill: ${colors.white};
transition: .3s all ease-in-out;
}



  &:hover {
  cursor: pointer;
  background: ${colors.light};
  color:${colors.secondary} ;
  transition: .3s all ease-in-out;

  svg {
  fill:${colors.secondary};

  }

${PageTitle}{
  color:${colors.secondary} ;
}
  }
`

const Arrow = styled.img`
  margin-left: auto;
  width: 10px;
`

const AccordionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-shrink: 0;
position:relative;
width: 100%;
z-index: 0;
opacity:  ${({isAccordionActive}) => isAccordionActive ? "1" : "0"};
min-height:  ${({isAccordionActive}) => isAccordionActive ? "auto" : "0"};
max-height:  ${({isAccordionActive}) => isAccordionActive ? "40rem" : "0"};
transition: .3s all ;

`

const MenuItem = ({Icon, pageTitle, children, secondary, secondaryAcc,link}) => {
    const location = useLocation();
    const pageChecker = pageTitle === "Trade" || pageTitle === "More";
    const isLink = pageTitle === "Medium" || pageTitle === "Whitepaper"
    const {isMenuActive, setMenuActive} = useContext(MenuContext)
    const [isAccordionActive, setAccordionActive] = useState(false)
    const [innerWidth, setInnerWidth] = useState(0)
    const {isDark} = useContext(ThemeContext)

    useEffect(()=> {
        setInnerWidth(window.innerWidth)

        if(isMenuActive) {
            setAccordionActive(!isMenuActive)
        }
    },[isMenuActive])

    return (

        <Wrapper
            exact
            to={pageChecker ? location.pathname : `/${pageTitle}`}
            onClick={isLink? () => (window.open(link, '_blank') ) : null}
            secondary={secondary}
            activeClassName={pageChecker ? "" : "active"}
            isDark={isDark}
        >


                <Container secondaryAcc={secondaryAcc}
                           isDark={isDark}
                           onClick={!pageChecker ?
                               isMenuActive ?
                                   () => setMenuActive(false)
                                   : null
                               :
                               !isMenuActive ? () => setAccordionActive(!isAccordionActive)
                                   :
                                   () => {
                                       setAccordionActive(!isAccordionActive)
                                       if (innerWidth > 800)
                                           setMenuActive(false)
                                       else setMenuActive(true)
                                   }}>
                {Icon ? <Icon/> : null}

                <PageTitle>{pageTitle}</PageTitle>

                {pageChecker ? <Arrow src={arrow} alt="arrow"/> : null}

            </Container>

            <AccordionWrapper isAccordionActive={isAccordionActive}>
                {children}
            </AccordionWrapper>
        </Wrapper>
    );
};

export default MenuItem;