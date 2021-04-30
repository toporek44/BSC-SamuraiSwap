import React, {useContext, useState} from 'react';
import styled, {css} from "styled-components"
import CardWrapper from "../components/CardWrapper";
import FarmCard from "../components/FarmCard/FarmCard";
import {farmsCardsData} from "../utils/FarmCardsData"
import {colors, TOKEN_SHORT} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";
import bg from "../assets/secondbg.png";
import samurais from  "../assets/samurais.png";

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 9rem 0;
background: url(${({isDark}) => isDark ? "#212121" :bg}) ;
background-size: cover;
background-position: top;
`

export const TitleWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column-reverse;
align-items: center;
width: 100%;
padding:4rem 1rem;




 @media (min-width: 1600px ){
    padding:0 30rem;
     } 

`

export const TitleImg = styled.img`
margin: 3rem 0 ;
width: 150px;
text-align: center;

  @media (min-width: 1000px ){
        width:  ${({width}) => width ? width : "200"}px;
     } 
`

export const Title = styled.p`
font-size: 2.6rem;
color:${colors.secondary};
text-align: center;
font-weight: 900;
border-radius: 5px;
padding:0 2rem;



  @media (min-width: 1000px ){
         font-size: 4rem;
     }  

span {
  color:${colors.white};
 
}
`

export const SubTitle = styled.p`
margin-top: 2rem;
font-size: 1.7rem;
color:${({isDark}) => isDark ? colors.white : colors.white};
text-align: center;
max-width: 1100px;
padding:0 2rem;

  @media (min-width: 1000px ){
        font-size: 2.5rem;
     }
`


export const ActiveContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 3rem;
background: ${colors.light};
border-radius: 50px;
padding:2px;
z-index: 1;
position:relative;
overflow: hidden;

.active {
background: ${colors.light} ;
color:${colors.white};
}
`

export const ActiveButton = styled.button`
background:  ${({isFarmActive, isDark}) =>isDark? isFarmActive? colors.darkTheme : colors.light : isFarmActive? colors.light : colors.secondary};
color: ${({isFarmActive, isDark}) =>isDark? isFarmActive? colors.light : colors.darkTheme : !isFarmActive? colors.light : "#fff"};
font-size: 1.8rem;
text-align: center;
padding:.7rem 2rem;
border-radius: 50px;
border: 1px solid ${colors.secondary};
transition: .3s all ease-in-out;
position:relative;
font-weight: 600;
text-decoration: none;
    span {
    content: "";
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 90%;
    background: ${({isDark}) => isDark ? colors.darkTheme : colors.light};
    z-index: -1;
    border-radius: 50px;
    transform: ${({isFarmActive}) => !isFarmActive? "translateX(115%)": "translateX(0)"};
    transition: .2s all ease-in-out;

    }

a {
text-decoration: none;
color:  ${({isFarmActive}) => !isFarmActive? colors.light : "#fff"};

}

    ${({secondary}) => (
    secondary && css`
    background:  ${({isFarmActive, isDark}) =>isDark? !isFarmActive? colors.darkTheme : colors.light : !isFarmActive? colors.light : "#fff"};
    color:   ${({isFarmActive, isDark}) =>isDark? isFarmActive? colors.darkTheme : colors.light : isFarmActive? colors.light : "#fff"};
    transition: .3s all ease-in-out;
`
)}
    
    

&:focus {
outline: none;
}

&:hover {
cursor: pointer;
border: 1px solid ${colors.light};
transition: .3s all ease-in-out;

}
`

const Farms = () => {

    const [isFarmActive, setFarmAcive] = useState(false)
    const {isDark} = useContext(ThemeContext)

    return (
            <Wrapper isDark={isDark}>
                <TitleWrapper>
                <div>
                <Title>Stake LP tokens to earn <span>{TOKEN_SHORT}</span></Title>
                <SubTitle isDark={isDark} >
                    Every time you stake and unstake LP tokens, the contract will automatically give {TOKEN_SHORT} rewards for you
                    Reward are calculated per Block
                </SubTitle>
                </div>

                    <TitleImg  src={samurais} alt=""/>

                </TitleWrapper>
                <ActiveContainer>
                    <ActiveButton isDark={isDark} isFarmActive={isFarmActive} onClick={() => setFarmAcive(!isFarmActive)}>Active <span isFarmActive={isFarmActive}></span></ActiveButton>
                    <ActiveButton isDark={isDark} secondary isFarmActive={isFarmActive} onClick={() => setFarmAcive(!isFarmActive)} >Inactive</ActiveButton>
                </ActiveContainer>

                <CardWrapper>
                    {
                        farmsCardsData.map(({farmPair, multiplier, aprValue, bscLink, active,pairImage,otherPair,depositFee},id) => (
                            <FarmCard
                                farmPair={farmPair}
                                multiplier={multiplier}
                                aprValue={aprValue}
                                bscLink={bscLink}
                                pairImage={pairImage}
                                depositFee={depositFee}
                                otherPair={otherPair}
                                active={active}
                                isFarmActive={isFarmActive}
                                key={farmPair+id}
                            />
                        ))
                    }
                </CardWrapper>
            </Wrapper>
        )
};

export default Farms;