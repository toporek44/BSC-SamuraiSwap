import React from 'react';
import styled from "styled-components";
import logo from "../../assets/logo.png"
import {colors, TOKEN_SHORT} from "../../utils/colors";



const FarmHeading = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 1.5rem;
color: ${colors.white};
font-weight: 700;
text-transform: uppercase;

`

const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
  background: #fff;
  padding: 1rem;
  border-radius: 100%;
`
const TagsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const PairTitle = styled.p`
font-size: 2.5rem;
color: ${colors.white};

span {
color:${colors.secondary};
}
`

const CoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .6rem;
  width: 120%;

`

export const Core = styled.div`
    margin-right: 1rem;
    border: 2px solid ${colors.white};
    border-radius: 20px;
    padding: 0.2rem 1rem;
    color:${colors.white};

`
const MultiplierTag = styled.div`
    border-radius: 20px;
    font-size: 1.5rem;
    color:#fff;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center; 
    min-height: 30px;
    border:2px solid  ${colors.white};
    color: ${colors.secondary};
    padding: 0 .7rem;
    margin-right: 1rem;
`

const PairLogoContainer = styled.div`
position:relative;
`

const CryptoImg = styled.img`
position:absolute;
top:-20px;
right:-20px;
width: 25px;
z-index: 999;
`

const DepositFee = styled.p`
font-size: 1.4rem;
color:${colors.white};
border-radius: 20px;
padding: .5rem .7rem;
border:2px solid  ${colors.white};
`

const CardHeader = ({farmPair, multiplier, pairImage, otherPair, depositFee}) => {


    return (
        <FarmHeading>
            <PairLogoContainer>

            </PairLogoContainer>
            <TagsContainer>
                <PairTitle>{otherPair? otherPair : TOKEN_SHORT}-<span>{farmPair}</span> LP</PairTitle>
                <CoreContainer>
                    <Core>Core</Core>
                    <MultiplierTag>{multiplier}X</MultiplierTag>
                    <DepositFee>Deposit fee:{depositFee}%</DepositFee>
                </CoreContainer>
            </TagsContainer>
        </FarmHeading>

    );
};

export default CardHeader;