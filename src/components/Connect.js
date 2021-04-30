import MetaMaskOnboarding from '@metamask/onboarding';
import React, {useContext} from 'react';
import styled, {css} from "styled-components";
import {colors} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";


const UnlockButton = styled.button`
width:80%;
height: 40px;
color: ${ ( {isDark} ) => isDark ? colors.darkTheme : colors.white };
font-size:1.9rem;
background: ${colors.ultraLight};
border:2px solid ${colors.secondary};
margin:2rem auto;
transition: .3s all ease-in-out;
font-weight: 400;
padding-top: 0rem;
z-index: 999;

 &:focus {
 outline: none;
 }

  &:hover {
  cursor: pointer;
  transition: .3s all ease-in-out;
  background: ${ ( {isDark} ) => isDark ? colors.dark : colors.light};
  color:${colors.white};
  width: 100%;
  box-shadow: 0 3px 40px -20px #000000;

  }
  
      ${({secondary}) => (
    secondary && css`
      width:105px;
      height: 30px;
      font-size: 1.6rem;
      color:${ ( {isDark} ) => isDark ? colors.darkTheme : colors.light};
      border: none;
      background: ${colors.white};
      box-shadow: none;
      font-weight: 600;
      margin: 0;
      z-index: 9999;
      padding: .2rem .5rem 0;
      
     &:hover {
          cursor: pointer;
          transition: .3s all ease-in-out;
          width:105px;
          transform: translateY(-1px);
          background: ${colors.ultraLight};

    }
    
     @media (min-width: 370px ){
               margin-right: 2rem;
     }
    
  
    
 
`
)}
`


const CONNECT_TEXT = 'Unlock Wallet';
const CONNECTED_TEXT = 'Connected';

export function Connect({secondary, children}) {
    const [buttonText, setButtonText] = React.useState(CONNECT_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const {isDark} = useContext(ThemeContext)

    const onboarding = React.useRef();
    // const { setMetamaskInstalled } = useContext(WindowContext)

    React.useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    React.useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                // setMetamaskInstalled(true)
                setButtonText(CONNECTED_TEXT);
                setDisabled(true);
                onboarding.current.stopOnboarding();
            } else {
                setButtonText(CONNECT_TEXT);
                setDisabled(false);
            }
        }
    }, [accounts]);

    const connectWallet = () => {
        function handleNewAccounts(newAccounts) {
            setAccounts(newAccounts);
        }
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {

            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleNewAccounts);
            window.ethereum.on('accountsChanged', handleNewAccounts);
            return () => {
                window.ethereum.off('accountsChanged', handleNewAccounts);
            };
        }
    }




    const onClick = () => {

        connectWallet()
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((newAccounts) => setAccounts(newAccounts));
        } else {
            onboarding.current.startOnboarding();
        }
    };

    return (
        <UnlockButton isDark={isDark} disabled={isDisabled} isConnected={isDisabled} secondary={secondary} onClick={onClick}> {children? children : "Unlock Wallet"} </UnlockButton>
    );
}


