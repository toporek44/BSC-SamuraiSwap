import React from 'react';
import styled from "styled-components"
import {colors} from "../utils/colors";


const Overlay = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0,0,0,.7);
position:fixed;
top:0;
left:0;
z-index:9999998;
`

const Wrapper = styled.div`
position:fixed;
top:50%;
left:50%;
transform: translate(-50%, -50%);
width: 300px;
height: 300px;
background: ${colors.light};
z-index: 9999999;
border-radius: 10px;
box-shadow: 0 0 20px -5px #111111;
padding:2rem 3rem;
`

const Modal = () => {
    return (
        <>
            <Overlay/>
            <Wrapper>

            </Wrapper>
        </>
    );
};

export default Modal;