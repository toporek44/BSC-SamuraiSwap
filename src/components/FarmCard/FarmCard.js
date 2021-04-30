import React, { useState} from 'react';
import Card from "../Card";
import CardHeader from "./CardHeader";
import {Connect} from "../Connect";
import arrow from "../../assets/arrow.png";
import {ReactComponent as CalculationIcon} from "../../assets/calculation.svg"
import CardDetails from "./CardDetails";
import styled from "styled-components";
import {ShowDetailsContainer} from "../PoolCard";
import {colors, TOKEN_SHORT} from "../../utils/colors";





export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:.4rem 0;
  width: 100%;
  color:${colors.white};
`

export const CardInfoTitle = styled.p`
font-weight: 400;
font-size: 1.6rem;
text-transform: uppercase;
color:${colors.white};

`

export const CardInfoValue = styled.p`
font-weight: 800;
font-size: 1.8rem;
text-transform: uppercase;
color:${colors.secondary};

a {
color:${colors.dark};
}
`

export const EarnedTitle = styled.p`
margin: .6rem 0;
text-transform: uppercase;
font-weight: 800;
color:  ${({secondary}) => secondary? colors.white : colors.secondary};

span {
color:${colors.white};
font-weight: 700;
}
`

const EarnedValue = styled.span`
font-size: 2.5rem;
color:${colors.white};

`

export const HarvestBtn = styled.button`
background: ${colors.secondary};
color:${colors.light};
border-radius: 50px;
padding:0.4rem 2.2rem .4rem;
font-size: 1.8rem;
font-weight: 700;
max-width: 200px;
border: 1px solid ${colors.dark};
border-bottom: 2px solid ${colors.dark};
&:focus {
outline: none;
}

&:hover {
cursor: pointer;
opacity: 0.7;
}
`

const EarnedContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 1.5rem;
`

export const ShowDetailsBtn = styled.button`
  background: none;
  border: none;
  text-align: center;
  color:${colors.white};
  font-size: 2rem;

  &:hover {
  cursor: pointer;
  }
  
  &:focus {
  outline: none;
  }
  
  img {
  width: 11px;
  margin-left: .4rem;
  position:relative;
  top:-2px;
  transition: .3s all ease-in-out;

  transform: rotate(${({isDetailsActive}) => isDetailsActive? "180deg": "0"});
  transition: .3s all ease-in-out;
  }
`
const StyledCalculationIcon = styled(CalculationIcon)`
width: 15px;
height: 15px;
fill:#fff;
margin-right: 1rem;

&:hover {
cursor: pointer;
background: rgba(255,255,255,.4);
}
`


const FarmCard = ({farmPair, multiplier, aprValue, bscLink, active, isFarmActive, pairImage,otherPair, depositFee}) => {
    const [isDetailsActive, setDetailsActive] = useState(false)



    return (
        <>
            {active !== isFarmActive ?
                <Card secondary active={active}>
                    <CardHeader
                        farmPair={farmPair}
                        multiplier={multiplier}
                        pairImage={pairImage}
                        otherPair={otherPair}
                        depositFee={depositFee}
                    />

                    <CardInfoContainer>
                        <CardInfoTitle>APR:</CardInfoTitle>
                        <CardInfoValue>{aprValue ? aprValue : 999.33}%</CardInfoValue>
                    </CardInfoContainer>
                    <CardInfoContainer>
                        <CardInfoTitle>Earn:</CardInfoTitle>
                        <CardInfoValue>{TOKEN_SHORT}</CardInfoValue>
                    </CardInfoContainer>

                    <EarnedTitle >
                        {TOKEN_SHORT} <span>Earned</span>
                    </EarnedTitle>
                    <EarnedContainer>
                        <EarnedValue>0</EarnedValue>
                        <HarvestBtn>Harvest</HarvestBtn>
                    </EarnedContainer>
                    <EarnedTitle>
                        {otherPair? otherPair : TOKEN_SHORT} - {farmPair} lp <span>Staked</span>
                    </EarnedTitle>
                    <Connect/>
                <ShowDetailsContainer secondary={true}>
                    <ShowDetailsBtn
                        isDetailsActive={isDetailsActive}
                        onClick={() => setDetailsActive(!isDetailsActive)}>
                        Details
                        <img src={arrow} alt="arrow"/>
                    </ShowDetailsBtn>
                </ShowDetailsContainer>
                    <CardDetails
                        farmPair={farmPair}
                        bscLink={bscLink}
                        isDetailsActive={isDetailsActive}
                        otherPair={otherPair}
                    />

                </Card>
            : null
            }
</>
    );
};

export default FarmCard;