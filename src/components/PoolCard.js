import React, { useState} from 'react';
import styled from "styled-components"
import Card from "./Card";
import {CardInfoContainer, CardInfoTitle, CardInfoValue, EarnedTitle, ShowDetailsBtn} from "./FarmCard/FarmCard";
import {Connect} from "./Connect";
import arrow from "../assets/arrow.png";
import CardDetails from "./FarmCard/CardDetails";
import {Core} from "./FarmCard/CardHeader";
import {colors} from "../utils/colors";


const PoolHeading = styled.div`
display: flex;
justify-content: ${({center}) => center ? "center" : "initial "};
width: 100%;
font-size: 3rem;
margin-bottom: 1rem;
font-weight: 700;
color: ${colors.white};

span {
text-transform: uppercase;
margin-right: 1rem;
color: ${colors.secondary};

}
`

const ProjectIcon = styled.img`
  width: 70px;
  height: 70px;
  margin: .7rem 0;
  background: #fff;
  border: 5px solid #fff;
  border-radius: 100%;
`

const PoolValue = styled.p`
font-size:3.5rem;
font-weight: 300;
color: ${colors.ultraLight};
margin-bottom: 1rem;

`

export const ShowDetailsContainer = styled.div`
    border-top: 1px solid ${colors.white};
    margin-top: 1rem;
    display: flex;
    justify-content:${ ( {secondary} ) => secondary? "center": "space-between" };
    align-items: center;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: .5rem;
`

const PoolCard = ({poolLabel, projectIcon, aprValue, projectSiteUrl, totalTokens, endValue, active, isPoolActive}) => {
    const [isDetailsActive, setDetailsActive] = useState(false)


    return (
        <>
            {active !== isPoolActive ?
                <Card secondary active={active} center>
                    <PoolHeading center><span>{poolLabel} </span> Pool</PoolHeading>
                    {/*<ProjectIcon src={projectIcon} alt={poolLabel}/>*/}
                    <PoolValue>0.0000</PoolValue>
                    <EarnedTitle>
                        {poolLabel} <span>Earned</span>
                    </EarnedTitle>
                    <Connect/>
                    <CardInfoContainer>
                        <CardInfoTitle>APR:</CardInfoTitle>
                        <CardInfoValue>{aprValue ? aprValue : 999.33}%</CardInfoValue>
                    </CardInfoContainer>
                    <CardInfoContainer>
                        <CardInfoTitle>Your Stake:</CardInfoTitle>
                        <CardInfoValue>0.0000</CardInfoValue>
                    </CardInfoContainer>
                    <ShowDetailsContainer >
                        <Core>Core</Core>
                        <ShowDetailsBtn
                            isDetailsActive={isDetailsActive}
                            onClick={() => setDetailsActive(!isDetailsActive)}>
                            Details
                            <img src={arrow} alt="arrow"/>
                        </ShowDetailsBtn>
                    </ShowDetailsContainer>
                    <CardDetails
                        totalTokens={totalTokens}
                        endValue={endValue}
                        projectSite={projectSiteUrl}
                        isDetailsActive={isDetailsActive}
                        pools
                    />


                </Card> : null}
        </>

    );
};

export default PoolCard;