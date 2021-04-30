import React, {useContext, useState} from 'react';
import styled from "styled-components";
import arrow from '../assets/arrow.png'
import { NavLink} from "react-router-dom";
import {Connect} from "../components/Connect";
import Card from "../components/Card";
import {ActiveButton, ActiveContainer} from "./Farms";
import {Banner, BannerSubTitle, BannerTitle, Input, Label, SelectToken, StyledArrow, Wrapper} from "./Exchange";
import {EarnedTitle, HarvestBtn} from "../components/FarmCard/FarmCard";
import {colors, TOKEN_SHORT} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";




const LiquidityContainer = styled.div`
width: 100%;
height: 90px;
border:1px solid ${colors.white};
padding:1rem;
border-radius: 10px;
background:  ${({isDark}) => isDark ? "#3f3f3f" : colors.light};
text-align: center;
color:${colors.white};
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;

`

const ImportInfo = styled.p`
margin: 1.5rem 0;
color:${colors.white};

button {
background: none;
border:none;
font-weight: 500;
color:${colors.secondary};
font-size: 1.8rem;
margin-left: 1rem;
&:focus {
outline: none;
}
&:hover {
cursor: pointer;
text-decoration: underline;
}
}
`

const Info = styled.div`
color:${colors.white};
text-align: left;

`

const Liquidity = () => {
    const [isAddLiquidityActive, setAddLiquidityActive] = useState(false)
    const {isDark} = useContext(ThemeContext)

    return (
        <Wrapper>

            <ActiveContainer>
                <ActiveButton as={NavLink} to="Exchange" activeClassName="active">Exchange <span></span></ActiveButton>
                <ActiveButton  as={NavLink} to="Liquidity" activeClassName="active">Liquidity</ActiveButton>
                <ActiveButton ><a href="https://www.onet.pl/" target="_blank" rel="noreferrer noopener">Bridge</a></ActiveButton>
            </ActiveContainer>

            {!isAddLiquidityActive?
            <Card  width="500px" tertiary>
                <Banner>
                    <BannerTitle>Liquidity</BannerTitle>
                    <BannerSubTitle>Add liquidity to receive LP tokens</BannerSubTitle>
                    <HarvestBtn onClick={()=> setAddLiquidityActive(!isAddLiquidityActive)}>Add Liquidity</HarvestBtn>
                </Banner>
                    <EarnedTitle secondary>Your Liquidity</EarnedTitle>

                <LiquidityContainer isDark={isDark}>
                    Connect to a wallet to view your liquidity.
                </LiquidityContainer>

                <ImportInfo>
                Don't see a pool you joined? <button>Import it.</button>
                </ImportInfo>
               <Info>Or, if you staked your {TOKEN_SHORT} tokens in a farm, unstake them to see them here.</Info>
                <Connect />

            </Card>
                :

                <Card width="500px" tertiary>
                    <Banner row>
                        <HarvestBtn onClick={()=> setAddLiquidityActive(!isAddLiquidityActive)}>Back</HarvestBtn>
                        <BannerTitle>Add Liquidity</BannerTitle>


                    </Banner>
                    <Label>
                        <p>Input</p>
                        <Input placeholder="0.0"/>
                        <SelectToken> select token <img src={arrow} alt="arrow"/></SelectToken>
                    </Label>
                    <StyledArrow src={arrow} alt="arrow" />
                    <Label>
                        <p>Input</p>
                        <Input placeholder="0.0"/>
                        <SelectToken> select token<img src={arrow} alt="arrow"/></SelectToken>
                    </Label>


                </Card>
            }
        </Wrapper>
    );
};

export default Liquidity;
