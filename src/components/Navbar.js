import React, {useContext} from 'react';
import styled from "styled-components"
import logo from "../assets/logo.png";
import {ReactComponent as HamburgerClose} from "../assets/hamburgerClose.svg"
import {ReactComponent as HamburgerIcon} from "../assets/hamburger.svg"
import {MenuContext} from "../contexts/MenuContext";
import { Link} from "react-router-dom";
import {colors} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";
import {Connect} from "./Connect";

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: ${({isDark}) => isDark ? colors.darkTheme : colors.light};
box-shadow: inset 0 -2px 0px rgba(89,81,81,0.25);
min-height:45px;
max-height: 45px;
position: fixed;
top:0;
left:0;
width: 100%;
z-index: 30001;
padding:.7rem 1rem;
margin-bottom: 1rem;
overflow: hidden;
transition: .4s all ease-in-out;

`
const StyledLogo = styled.img`
margin-right: 1rem;
width: 35px;
height: 35px;
background: ${colors.dark};
border-radius: 100%;
`

const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;

p {
font-size: 1.8rem;
color:  ${colors.white};
-webkit-text-stroke: 1px #fff;
 @media (min-width: 370px ){
         font-size: 2.2rem;
     }

     span {
         color:  ${colors.secondary};
         -webkit-text-stroke: 1px  ${colors.secondary};

         font-weight: 500;

     }
}


a {
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;



}
`



const HideMenuBtn = styled.button`
  background: transparent;
  border:none;
  margin-right: 1rem;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s all ease-in-out;
  svg {
  width: 35px;
  padding: 0.2rem .5rem ;
  fill: ${colors.white};
    transition: .3s all ease-in-out;
  }
  
  &:focus {
    outline:none;
    border-radius: 10px ;
    border: 2px solid ${colors.white};
  }
  
  &:hover {
  cursor: pointer;
  transform: scale(1.04);
  transition: .3s all ease-in-out;
  }
`

const Navbar = () => {
    const {isDark} = useContext(ThemeContext)



    const {isMenuActive, setMenuActive} = useContext(MenuContext)
    const Hamburger = isMenuActive? HamburgerIcon : HamburgerClose
    return (
        <Wrapper isDark={isDark}>
        <Flex>
            <HideMenuBtn isMenuActive={isMenuActive} onClick={()=> setMenuActive(!isMenuActive)}><Hamburger /></HideMenuBtn>
           <Link to="/"><StyledLogo src={logo} alt="PacMan" /> <p><span>Samurai</span> Swap</p></Link>

        </Flex>
            <Connect secondary>Connect</Connect>
        </Wrapper>
    );
};

export default Navbar;