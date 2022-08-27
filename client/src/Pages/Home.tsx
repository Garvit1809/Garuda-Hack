import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import CoverImg from "../Assets/cover.jpg"
import MentorsImg from "../Assets/mentors.jpg"
import ResourcesImg from "../Assets/resources.jpg"
import Button from '../Components/GeneralComponents/Button'
import SectionButton from '../Components/GeneralComponents/SectionButton'
import Footer from '../Components/GeneralComponents/Footer'

const Section = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 10px;
`

const Title = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 30px;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    width: 50%;
    height: 400px;

    div.description{
  font-size: 1.5rem;
  text-align: justify;
  padding-bottom: 10px;
}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`
const Cover = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${CoverImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100vw;

  h1.content {
    font-size: 3rem;
    color: whitesmoke;
    text-shadow: 1px 1px 5px black;
  }
`

const MentorsImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${MentorsImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 600px;
  box-shadow: 1px 1px 3px black;
`

const ResourcesImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${ResourcesImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 600px;
  box-shadow: 1px 1px 3px black;
`
const Home = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <Cover>
        <h1 className='content'>Anyone can get their dream job</h1>
        <br>
        </br>
        <br>
        </br>
        <SectionButton text="Get Started" link="#mentor" clr="#fff" backgroundColor="#202020" />
      </Cover>
    </Wrapper>
    <div id="mentor" />
    <Title id="mentor">Learn from the Expert</Title>
    <Section>
        <MentorsImage /> 
        <TextContainer>
          <div className='description'>Sometimes trying to get your dream job can be very difficult and exhausting, it often feels impossible to achieve, and in the end, the dream job will only remain as a dream. At MauKerja your dream job will no longer be a dream anymore because you can learn directly from our experienced mentors who already know how to land your dream job to find some insightful tips and tricks.</div>
        <Button text="Get Mentor" link="/mentors" clr="#fff" backgroundColor="#202020" />
        </TextContainer>
      </Section>
    <div id="resources" />
    <Title id="resources">Lots of Resources</Title>
      <Section>
        <TextContainer>
        <div className='description'>Finding good study materials to prepare yourself for a job is sometimes very challenging. Worry no more, at MauKerja you can find a lot of good resources specially made for people who want to get ready for their job.</div>
        <Button text="Get Resources" link="/resources" clr="#fff" backgroundColor="#202020" />
        </TextContainer>
        <ResourcesImage />
      </Section>
      <Footer />
      <br>
        </br>
        <br>
        </br>
    </>
  )
}

export default Home