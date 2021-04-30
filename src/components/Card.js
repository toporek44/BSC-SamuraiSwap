import React, {useContext} from 'react';
import styled, {css} from "styled-components";
import {colors} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";

const Wrapper = styled.div`
  width: 310px;
  margin:2rem 0;
  background: ${({isDark}) => isDark ? colors.darkTheme : colors.cardColor};
  color:${colors.light};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items:  ${({center}) => center ? "center" : "flex-start"};
  position:relative;
  padding: 1.7rem 2rem;
  pointer-events: ${({active}) => active ? "initial" : active === false ? "none" : "initial"};
  transition: .3s all ease-in-out;
  box-shadow:0 0 10px -1px #000;
  overflow: hidden;
  
   @media (min-width: 550px ){
           width: ${({width}) => width ? width : "350px"};
           margin:2rem ;
           padding: 2rem 3rem;
     }
  
    ${({secondary}) => (
    secondary && css`
       width: 310px;
       padding: 2rem 2rem;
       background: ${({isDark}) => isDark ? colors.darkTheme : colors.light};
       

        @media (min-width: 550px ){
           width: 310px;
           margin:2rem ;
           padding: 3rem 4rem;
     }
`
)}
    
        ${({tertiary}) => (
    tertiary && css`
        background:  ${({isDark}) => isDark ? colors.darkTheme : colors.light};
        color:#fff;
        box-shadow: inset 0 0 0 3px ${colors.light}, 2px 2px 10px -2px #000000;
        justify-content: center;
        text-align: center;

     @media (min-width: 550px ){
         padding: 3.3rem 3rem;
     }
`
)}
 
  
`

const CardTitle = styled.p`
font-size: 3.2rem;
font-weight: 600;
margin: 1.5rem 0;
color: ${colors.light};
position:relative;
z-index: 10;
`


const InActiveLayer = styled.div`
position:absolute;
left:0;
top:0;
width: 100%;
height: 100%;
background: rgba(19,18,20,0.75);
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5rem;
color:white;
pointer-events: none;
z-index: 999999999;
`

const Rainbow = styled.div`
    filter: blur(10px);
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    background: linear-gradient(45deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226,1) 50%, rgba(28, 127, 238,1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248,1) 80%, rgba(251, 7, 217,1) 90%, rgba(255, 0, 0,1) 100%) 0% 0% / 300% 300%;
    animation: 6s linear 0s infinite normal none running rainbow;
    border-radius: 30px;
    
    @keyframes rainbow {
      0% {
        background-position: 0% 50%;
      }
      
        50% {
      background-position: 100% 50%;
      }
      
      100% {
        background-position: 0% 50%;
      }
    }
`


const Card = ({title, children, secondary, tertiary, width, active, center}) => {
    const {isDark} = useContext(ThemeContext)

    return (
        <Wrapper
            secondary={secondary}
            tertiary={tertiary}
            width={width}
            active={active}
            center={center}
            isDark={isDark}>

            {active? null: active === false? <InActiveLayer>INACTIVE</InActiveLayer> : null}

            {title ?
                <CardTitle >{title}</CardTitle> : null}
            {children}
        </Wrapper>
    );
};

export default Card;