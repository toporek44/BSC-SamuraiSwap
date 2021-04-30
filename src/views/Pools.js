import React, {useContext, useState} from 'react';
import styled, {css} from "styled-components"
import CardWrapper from "../components/CardWrapper";
import {poolsCardsData} from "../utils/PoolCardsData";
import PoolCard from "../components/PoolCard";
import {ActiveContainer, SubTitle, Title, TitleImg, TitleWrapper} from "./Farms";
import {colors, TOKEN_SHORT} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";
import bg from "../assets/secondbg.png";
import samurai from  "../assets/samurai.png";




const Wrapper = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position:relative;
padding: 12rem 0 ;
transition: .3s all ease-in-out;
background: url(${({isDark}) => isDark ? "#212121" :bg}) ;
background-size: cover;
background-position: top;
`



 const ActiveButton = styled.button`
background:  ${({isPoolActive, isDark}) =>isDark? isPoolActive? colors.darkTheme : colors.light : isPoolActive? colors.light : "#fff"};
color: ${({isPoolActive, isDark}) =>isDark? isPoolActive? colors.light : colors.darkTheme : !isPoolActive? colors.light : "#fff"};
font-size: 1.8rem;
text-align: center;
padding:.7rem 2rem;
border-radius: 50px;
border: 1px solid ${colors.white};
transition: .3s all ease-in-out;
position:relative;
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
    transform: ${({isPoolActive}) => !isPoolActive? "translateX(115%)": "translateX(0)"};
    transition: .2s all ease-in-out;

    }

a {
text-decoration: none;
color:  ${({isPoolActive}) => !isPoolActive? colors.light : "#fff"};

}

    ${({secondary}) => (
    secondary && css`
    background:  ${({isPoolActive, isDark}) =>isDark? !isPoolActive? colors.darkTheme : colors.light : !isPoolActive? colors.light : "#fff"};
    color:   ${({isPoolActive, isDark}) =>isDark? isPoolActive? colors.darkTheme : colors.light : isPoolActive? colors.light : "#fff"};
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
const Pools = () => {
    const [isPoolActive, setPoolActive] = useState(false)
    const {isDark} = useContext(ThemeContext)


    return (
            <Wrapper isDark={isDark}>
                <TitleWrapper>
                <div>
                <Title> <span>{TOKEN_SHORT}</span> Pool</Title>
                <SubTitle isDark={isDark}>
                    Stake {TOKEN_SHORT} to earn new tokens.
                    You can unstake at any time.
                    Rewards are calculated per block.
                </SubTitle>
                </div>
                    <TitleImg width={160} src={samurai} alt="batman"/>
                </TitleWrapper>
                <ActiveContainer>
                    <ActiveButton isDark={isDark} isPoolActive={isPoolActive} onClick={() => setPoolActive(!isPoolActive)}>Active <span isPoolActive={isPoolActive}></span></ActiveButton>
                    <ActiveButton isDark={isDark} secondary isPoolActive={isPoolActive} onClick={() => setPoolActive(!isPoolActive)} >Inactive</ActiveButton>
                </ActiveContainer>

                <CardWrapper>
                    {
                        poolsCardsData.map(({poolLabel, projectIcon, aprValue, projectSiteUrl, totalTokens, endValue,active},id) => (
                            <PoolCard
                                poolLabel={poolLabel}
                                projectIcon={projectIcon}
                                aprValue={aprValue}
                                projectSiteUrl={projectSiteUrl}
                                totalTokens={totalTokens}
                                endValue={endValue}
                                active={active}
                                isPoolActive={isPoolActive}
                                key={poolLabel+id}
                            />
                        ))
                    }
                </CardWrapper>

            </Wrapper>
        )
};

export default Pools;