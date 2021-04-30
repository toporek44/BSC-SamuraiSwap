import React from 'react';
import styled from "styled-components";
import {CardInfoContainer, CardInfoTitle, CardInfoValue} from "../FarmCard/FarmCard";
import {colors, TOKEN_SHORT} from "../../utils/colors";


const DetailsContainer = styled.div`
display: ${({isDetailsActive}) => isDetailsActive? "flex": "none"};
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;

`

const ViewLink = styled.a`
color:${colors.white};
margin-top: .7rem;
text-shadow: none;

`


const CardDetails = ({isDetailsActive, farmPair, bscLink, pools ,totalTokens, endValue, projectSite,otherPair}) => {
    return (
        <DetailsContainer isDetailsActive={isDetailsActive}>
            {pools ?

                <>
                    <CardInfoContainer>
                        <CardInfoTitle>Total:</CardInfoTitle>
                        <CardInfoValue>{totalTokens}</CardInfoValue>
                    </CardInfoContainer>

                    <CardInfoContainer>
                        <CardInfoTitle>End:</CardInfoTitle>
                        <CardInfoValue>${endValue}</CardInfoValue>
                    </CardInfoContainer>
                    <ViewLink href={projectSite} target="_blank" rel="noreferrer noopener">View project site</ViewLink>
                </>
                :
                <>
                    <CardInfoContainer>
                        <CardInfoTitle>Stake:</CardInfoTitle>
                        <CardInfoValue> <a href="#" target="_blank" rel="noreferrer noopener" >{otherPair? otherPair : TOKEN_SHORT}-{farmPair? farmPair : "USD"} LP</a></CardInfoValue>
                    </CardInfoContainer>

                    <CardInfoContainer>
                        <CardInfoTitle>Total Liquidity:</CardInfoTitle>
                        <CardInfoValue>$900,021</CardInfoValue>
                    </CardInfoContainer>
                    <ViewLink href={bscLink} target="_blank" rel="noreferrer noopener">View on BscScan</ViewLink>
                </>
                }

        </DetailsContainer>
    );
};

export default CardDetails;