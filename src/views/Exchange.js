import React from 'react';
import styled from "styled-components";
import arrow from '../assets/arrow.png'
import { NavLink} from "react-router-dom";
import {Connect} from "../components/Connect";
import Card from "../components/Card";
import {ActiveButton, ActiveContainer} from "./Farms";
import {colors} from "../utils/colors";

export const Wrapper = styled.div`  
width:100%;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`





export const Input = styled.input`
  width:100%;
  height: 70px;
  background: transparent;
  border: 1px solid ${colors.white};
  border-radius: 10px;
  font-size: 2.6rem;
  padding: 1.4rem 2rem 0 4rem;
  color: ${colors.white};
  width: 100%;
  &::placeholder {
  color:${colors.white};
  }
  
  &:focus {
  outline: none;
  }
  
`

export const Label = styled.label`
    position:relative;
    width: 100%;
    margin:0 auto;
    
    @media (min-width: 600px ){
       width: 90%;
}
    
    p {
    margin:0;
    position:absolute;
    top:7px;
    left:22px;
    color:${colors.white};
    }
`

export const StyledArrow = styled.img`
margin:1.8rem auto;
width: 16px;
`

export const SelectToken = styled.div`
position:absolute;
width:110px;
text-align: center;
right:14px;
bottom:7px;
background: transparent;
padding:.3rem 0rem;
border-radius: 5px;
background: ${colors.light};
color:${colors.white};

&:hover {
cursor: pointer;
background: rgba(67,245,255,0.8);
}



img {
width:9px;

    line {
    stroke:#fff;
    }
}
 

`

export const Banner = styled.div`
padding-bottom: 1rem;
border-bottom: 1px solid ${colors.white};
color: ${colors.ultraLight};
margin-bottom: 2rem;
display: flex;
width: 100%;
flex-direction:  ${({row}) => row? "row" : "column"};
justify-content:  ${({row}) => row? "space-between" : "flex-start"};
align-items:  ${({row}) => row? "center" : "flex-start"};
`

export const BannerTitle = styled.div`
font-size: 3rem;
color:  ${colors.secondary};

`
export const BannerSubTitle = styled.div`
font-size: 1.8rem;
margin: .5rem 0 1rem;
color:  ${colors.white};

`
const Exchange = ({row}) => {
    return (
        <Wrapper>

            <ActiveContainer>
                <ActiveButton as={NavLink} to="Exchange" activeClassName="active">Exchange <span></span></ActiveButton>
                <ActiveButton  as={NavLink} to="Liquidity" activeClassName="active">Liquidity</ActiveButton>
                <ActiveButton ><a href="https://www.onet.pl/" target="_blank" rel="noreferrer noopener">Bridge</a></ActiveButton>
            </ActiveContainer>

            <Card width="500px" tertiary>
                <Banner row={row}>
                    <BannerTitle>Exchange</BannerTitle>
                    <BannerSubTitle>Trade tokens in an instant</BannerSubTitle>
                </Banner>
                <Label>
                    <p>From</p>
                    <Input placeholder="0.0"/>
                    <SelectToken> select token <img src={arrow} alt="arrow"/></SelectToken>
                </Label>
                <StyledArrow src={arrow} alt="arrow" />
                <Label>
                    <p>To</p>
                    <Input placeholder="0.0"/>
                    <SelectToken> select token<img src={arrow} alt="arrow"/></SelectToken>
                </Label>

                <Connect/>
            </Card>
        </Wrapper>
    );
};

export default Exchange;
