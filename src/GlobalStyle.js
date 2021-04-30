import {createGlobalStyle} from "styled-components";
import {colors} from "./utils/colors";
import bg from "./assets/mainbg.png";
const GlobalStyle = createGlobalStyle`



*, *::before, *::after{
    box-sizing:border-box;
    margin:0;
    padding: 0;
    font-family: 'Cinzel Decorative', cursive;
    color:${colors.light};

}

html{
font-size:50.5%;

}

body{
    font-size: 1.6rem;
    width:100%;
    height: 100%;
    position:relative;
    background: url(${bg}) ;
    background-size: cover;
    background-position: center;
}


`;

export default GlobalStyle;
