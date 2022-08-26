import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'

const Section = styled.div`
width: 100%;
min-height: calc(100vh - 4rem);
border: 1px solid red;
`

const Home = () => {
  return (
    <>
    <Navbar/>
    <Section>
    </Section>
    </>
  )
}

export default Home