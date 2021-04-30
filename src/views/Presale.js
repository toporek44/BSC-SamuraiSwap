import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components"
import logo from "../assets/logo.png"
import {colors} from "../utils/colors";
import {ThemeContext} from "../contexts/ThemeContext";


const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: ${({isDark}) => isDark ? colors.darkTheme : "linear-gradient(186.65deg, #b7e99e 35.44%, #9fc776 53.86%, #82be6c 73.46%)"};
width: 100%;
height: 100%;
min-height: 100vh;
padding:4rem 2rem 15rem;

 @media (min-width: 600px ){
    padding:14rem 4rem 25rem;
    }



img {
width: 120px;
height: 120px;
margin-bottom: 3rem;

 @media (min-width: 600px ){
    width: 200px;
    height: 200px;
    }

 @media (min-width: 1300px ){
    width: 300px;
    height: 300px;
    margin:0;
     }
}




.timer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:1rem 0;
}



.timer__container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.timer__title {
  margin:.3rem 0;
  color:${({isDark}) => isDark ? colors.ultraLight : colors.white};
  font-size: 2.2rem;
  font-weight: 400;
text-shadow: 2px 2px 0 #338c2f;

  @media (min-width: 800px) {
    font-size: 2.6rem;
    font-weight: 900;
    margin:.6rem 0;

  }

}



.timer__segment {
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 0 #338c2f;

  span {
    position: relative;
    top:2px;
    font-size: 2.4rem;
    color:${({isDark}) => isDark ? colors.white : colors.secondary};
    font-weight: 300;


    @media (min-width: 800px) {
      font-size: 7rem;
    }
  }
}

.hours, .minutes, .seconds {
  font-size: 3.5rem;
  color:${({isDark}) => isDark ? colors.white : colors.secondary};
  font-weight: 300;

  @media (min-width: 800px) {
    font-size: 9rem;
  }
}

.colon {
  font-size: 2.2rem;
  color:${({isDark}) => isDark ? colors.white : colors.secondary};
  margin:0 1rem;
  font-weight: 500;
text-shadow: 2px 2px 0 #338c2f;


  @media (min-width: 800px) {
    font-size: 6rem;
  }
}
`

const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`

const Title = styled.p`
font-size: 2.6rem;
color:${({isDark}) => isDark ? colors.white : colors.secondary};
font-weight: 600;
margin-top: 2rem;
text-shadow: 2px 2px 0 #338c2f;

  @media (min-width: 1000px ){
         font-size: 4rem;
     }
`

const Text = styled.p`
margin-top: 2rem;
font-size: 1.6rem;
color:${({isDark}) => isDark ? colors.white : colors.white};
font-weight: 300;
max-width: 1200px;
padding: .8rem 1.6rem;
border-radius: 5px;
  @media (min-width: 1000px ){
        font-size: 2.2rem;
     }
`

const Presale = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const {isDark} = useContext(ThemeContext)

    useEffect(()=>{

        const currDate = () => {
            const now = new Date();
            const deadline = new Date('March 20 2021 23:59:59');
            const total = deadline - now;
            if (total < 0) {
                clearInterval(timeInterval);
                return;
            }
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours =Math.floor( Math.abs(deadline - now) / 36e5);


            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)


        }

        const timeInterval = setInterval(() =>{
            currDate()
        }, 1000)

    },[])

    return (
        <Wrapper isDark={isDark}>
            <img src={logo} alt="PastaSwap"/>
            <div className="timer">
                <p className="timer__title">To the End of PreSale</p>
                <div className="timer__container">
                    <div className="timer__segment">
                        <div className="hours">{hours}</div>
                        <span>h</span>
                    </div>
                    <div className="colon">:</div>
                    <div className="timer__segment">
                        <div className="minutes">{minutes}</div>
                        <span>m</span>
                    </div>
                    <div className="colon">:</div>
                    <div className="timer__segment">
                        <div className="seconds">{seconds}</div>
                        <span>s</span>
                    </div>
                </div>
            </div>

            <TextContainer>
                <Title isDark={isDark}>PreSale</Title>
                <Text isDark={isDark}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eos Consequuntur dolores eos hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis quod sequi.</Text>
                <Text isDark={isDark}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eos Consequuntur dolores eos hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis quod sequi.</Text>
                <Title isDark={isDark}>Lorem ipsum</Title>

                <Text isDark={isDark}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eos Consequuntur dolores eos hic illo libero non veniamLorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eos Consequuntur dolores eos hic illo libero non veniamLorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eos Consequuntur dolores eos hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis quod sequi.</Text>
                <Text isDark={isDark}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eos Consequuntur dolores eos hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis hic illo libero non veniam! Atque dignissimos enim esse necessitatibus optio quis recusandae. Commodi cum cupiditate debitis quod sequi.</Text>
            </TextContainer>
        </Wrapper>
    );
};

export default Presale;