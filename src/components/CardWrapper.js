import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;
width: 100%;
height: 100%;
padding:4rem 0 0 0;
max-width: 1100px;
`

const CardWrapper = ({children}) => {
    return (
        <Wrapper >
            {children}


        </Wrapper>
    );
};

export default CardWrapper;