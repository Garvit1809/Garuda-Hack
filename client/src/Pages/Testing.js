import React, { useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

import img1 from '../Assets/eventImg.webp'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`

const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)}
`


const Row = styled.div`
/* background-color: lightblue; */
box-sizing: content-box;
white-space: nowrap;
margin: 2rem 0;
display: flex;
/* border: 5px solid red; */

animation: ${move} 17s linear infinite ${props => props.direction};
`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};
border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.body};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;
}
`

const Price = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

img{
  width: 1rem;
}
`

const NftItem = ({ img, number=0, price=0, passRef }) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running'
  }

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused'
  }
 

  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)} >
    <img src={img} alt='nfts' />
    <Details>
    <div>
    <span>Weirdoes</span> <br />
    <h1>#{number}</h1>
    </div>
    <div>
    <span>Price</span>
    <Price>
    <h1>{Number(price).toFixed(1)}</h1>
    </Price>
    </div>
    </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)

  return (
    <Section id="showcase">
     <Row direction="none" ref={Row1Ref}>
     <NftItem img={img1} number={234} price={1.8} passRef= {Row1Ref} />
     <NftItem img={img1} number={384} price={1.2} passRef= {Row1Ref} />
     <NftItem img={img1} number={986} price={2.8} passRef= {Row1Ref} />
     <NftItem img={img1} number={879} price={5.8} passRef= {Row1Ref} />
     <NftItem img={img1} number={125} price={3.7} passRef= {Row1Ref} />
     <NftItem img={img1} number={125} price={3.7} passRef= {Row1Ref} />
     <NftItem img={img1} number={125} price={3.7} passRef= {Row1Ref} />
     </Row>
     <Row direction="reverse" ref={Row2Ref}>
     <NftItem img={img1} number={528} price={7.9} passRef= {Row2Ref} />
     <NftItem img={img1} number={765} price={0.8} passRef= {Row2Ref} />
     <NftItem img={img1} number={91} price={1.3} passRef= {Row2Ref} />
     <NftItem img={img1} number={104} price={4.1} passRef= {Row2Ref} />
     <NftItem img={img1} number={69} price={3.2} passRef= {Row2Ref} />
     <NftItem img={img1} number={69} price={3.2} passRef= {Row2Ref} />
     <NftItem img={img1} number={69} price={3.2} passRef= {Row2Ref} />
     <NftItem img={img1} number={69} price={3.2} passRef= {Row2Ref} />
     </Row>
    </Section>
  )
}

export default Showcase