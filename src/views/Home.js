import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import CardWrapper from "../components/CardWrapper";
import Card from "../components/Card";
import {ReactComponent as LongArrow} from "../assets/longarrow.svg";
import {Connect} from "../components/Connect"
import {Link} from "react-router-dom";
import logo2 from "../assets/logo2.png";
import logo from "../assets/logo.png";
import {colors, TOKEN_SHORT} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
transition: .3s all ease-in-out;
padding-bottom: 15rem;
position:relative;
a {
text-decoration: none;
}
`


const StyledLogo = styled.img`
width: 100px;
height: 100px;
margin: .6rem 0;
position:relative;
z-index: 10;



`



const Locked = styled.p`
color:#000000;
font-size: 2rem;
font-weight: 600;
margin:.6rem 0;
position:relative;
z-index: 10;
`

const RedText = styled.p`
font-size: ${({small}) => small ? "1.8rem" : "2.5rem"};
position:relative;
z-index: 10;
font-weight: 700;
color:  ${({small}) => small ? colors.light : colors.light};
margin-top: ${({small}) => small ? "1rem": "0"};
`



const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-radius: 5px;
  padding: 1rem 0;
`
const StatTitle = styled.p`
font-size: 2rem;
color:  ${colors.light};

`

const StatValue = styled.p`
font-size: 2.2rem;
font-weight: 700;
color:  ${colors.light};
`

const CardColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

`

const LockedTitle = styled.p`
font-size: 2.5rem;
color:  ${({secondary}) => secondary? colors.white : colors.light};
font-weight: 600;
`

const LockedValue = styled.p`
font-size: 4rem;
font-weight: 800;
margin:1rem 0;
color:${({secondary}) => secondary? colors.secondary : colors.dark};
`

const Heading = styled.h1`
text-align: center;
display: flex;
justify-content: center;
align-items: flex-end;
font-size: 3.5rem;
margin:15rem 0 1rem 0;
color: #ff0033;

p {
padding-bottom: 2rem;
}

 @media (min-width: 850px ){
          font-size: 5rem;
          margin-bottom: 1rem;
         

     }

   @media (min-width: 1200px ){
          font-size: 7rem;
     }


`


const TitleImg = styled.img`
width: 50px;
display: none;
position:relative;
   @media (min-width: 560px ){
         display: block;
         margin:0 4rem;
     }
  
   @media (min-width: 850px ){
           width: 70px;

     }
  
  @media (min-width: 1200px ){
          width: 100px; 
     }
     
     &:first-child {
       @media (min-width: 1200px ){
          width: 110px; 
     }
     }

`

const LogoTitle = styled.img`
width: 250px;
margin: .6rem 3rem;

@media (min-width: 600px ){
        width: 400px;
     }

`

// const RowContainer = styled.div`
// width: 100%;
// display: flex;
// justify-content: space-between;
// align-items: center;
// position:relative;
// flex-wrap: wrap;
// `

const StyledLink = styled(Link)`
position:absolute;
bottom: 20px;
right:30px;
padding:.4rem;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
&:hover {
background: rgba(255,244,243,0.51);
}


`

const StyledLongArrow  = styled(LongArrow)`
width: 20px;
height: 20px;
path {
fill: #fff;
}
`

const Home = () => {
    const {isDark} = useContext(ThemeContext)


    return (
        <Wrapper isDark={isDark}>
            <Heading>
                <LogoTitle src={logo2}/>
            </Heading>
            <CardWrapper >
                <Card title="Farms and Staking">
                    <StyledLogo src={logo} alt="MushroomsSwap"/>
                    <Locked>Locked</Locked>
                    <RedText>{TOKEN_SHORT} to Harvest</RedText>
                    <Locked>Locked</Locked>
                    <RedText>{TOKEN_SHORT} in Wallet</RedText>

                    <Connect>Unlock Wallet</Connect>
                </Card>

                <CardColumn>
                    <Link to="/Farms">
                        <Card tertiary>
                            <LockedTitle secondary>Earn up to</LockedTitle>
                            <LockedValue secondary>1,996.65% APY</LockedValue>
                            <LockedTitle secondary>in Farms</LockedTitle>
                            <StyledLink to="/Farms"><StyledLongArrow /></StyledLink>
                        </Card>
                    </Link>

                    <Link to="/Pools">
                        <Card tertiary>
                            <LockedTitle secondary>Earn</LockedTitle>
                            <LockedValue secondary>POP, SWINGBY</LockedValue>
                            <LockedTitle secondary>in Pools</LockedTitle>
                            <StyledLink to="/Pools"><StyledLongArrow /></StyledLink>
                        </Card>
                    </Link>
                </CardColumn>

                <Card title={TOKEN_SHORT + " Stats"}>
                    <StatsContainer>
                        <StatTitle>Total {TOKEN_SHORT} Supply</StatTitle>
                        <StatValue>85.2312.3</StatValue>
                    </StatsContainer>

                    <StatsContainer>
                        <StatTitle>Total {TOKEN_SHORT} Burned
                        </StatTitle>
                        <StatValue>0.000</StatValue>
                    </StatsContainer>

                </Card>
                    <Card >
                        <LockedTitle>Total Value Locked (TVL)</LockedTitle>
                        <LockedValue>$2,127,840.294</LockedValue>
                        <RedText small>Across all Farms and Pools</RedText>
                    </Card>

            </CardWrapper>

        </Wrapper>
    )
};

export default Home;