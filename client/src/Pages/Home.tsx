import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import CoverImg from "../Assets/cover.jpg"
import MentorsImg from "../Assets/mentors.jpg"
import ResourcesImg from "../Assets/resources.jpg"
import Button from '../Components/GeneralComponents/Button'
import SectionButton from '../Components/GeneralComponents/SectionButton'
import Footer from '../Components/GeneralComponents/Footer'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import MentorImg1 from '../Assets/mentor1.jpg'
import MentorImg2 from '../Assets/mentor2.jpg'
import MentorImg3 from '../Assets/mentor3.jpg'
import StarImg from "../Assets/star.png"
import CalendarImg from "../Assets/calendar.png"
import ClockImg from "../Assets/clock.png"
import LocationImg from "../Assets/location.png"
import GoogleHackImg from "../Assets/google-hack.jpg"
import ProjectManagementImg from "../Assets/project-management.jpg"
import LatteArtImg from "../Assets/latte-art.jpg"

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

const Guides = styled.div`
width: 85%;
box-sizing: border-box;
/* border: 1px solid red; */

display: grid;
grid-template-columns: auto auto auto;
`

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 2rem;
  box-sizing: border-box;
  border-radius: 15px;
  /* box-shadow: 10px 10px black; */

  h3.JobDesc{
    margin: 0;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: grey;

    /* color: orange; */
  }

  h3.experience{
    margin: 0;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: grey;

    span{
      font-weight: 700;
      color: orange
    }
  }

  h3.company{
    margin: 0;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: grey;
    margin-bottom: 0.6rem;

    span{
      font-weight: 700;
      color: orange
    }
  }

  h3.fees{
    margin: 0;
    margin-top: 20px;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0.4rem;

    span{
      font-weight: 700;
      color: orange
    }
  }

`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const StarContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    img.star {
    padding-left: 1rem;
    margin: 2px 0 2px 0;
    width: 20px;
    height: 20px;
  }
    h3.starnum{
    margin: 0;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    }
`
const Header = styled.div`
  box-sizing: border-box;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2{
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0;
  }

  h3{
    margin-right: 1rem;
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    font-weight: 500;

    svg{
      fill: grey;
      padding-right: 0.2rem;
      padding-top: 0.2rem;
    }
  }
`

const ImgContainer = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-bottom: 0.6rem;
    
    img{
      box-sizing: border-box;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 100%;
      height: 30vh;
      object-fit: cover;
  }
`

const BecomeMentee = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

const Home = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <Cover>
        <h1 className='content'>Anyone can get their dream job</h1>
        <SectionButton text="Get Started" link="#mentor" clr="#fff" backgroundColor="#202020" />
      </Cover>
    </Wrapper>
    <div id="mentor" />
    <Title>Learn from the Expert</Title>
    <Section>
        <MentorsImage /> 
        <TextContainer>
          <div className='description'>Sometimes trying to get your dream job can be very difficult and exhausting, it often feels impossible to achieve, and in the end, the dream job will only remain as a dream. At MauKerja your dream job will no longer be a dream anymore because you can learn directly from our experienced mentors who already know how to land your dream job to find some insightful tips and tricks.</div>
        <Button text="Get Mentor" link="/mentors" clr="#fff" backgroundColor="#202020" />
        </TextContainer>
      </Section>
      <div id="top-mentor" />
    <Title>Our Most Popular Mentors</Title>
    <Section>
    <Guides>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg1} alt="" />
            </ImgContainer>
            <h2 className='name'>Mark Armstrong</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc' >Web Developer at Google</h3>
          <h3 className='fees' >Fees: <span>$15/lesson</span></h3>
          <StarContainer>
          <img className='star' src={StarImg} alt="" /><h3 className='starnum'>4.8</h3>
          </StarContainer>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg2} alt="" />
            </ImgContainer>
            <h2 className='name'>Daniel Green</h2>
          </Header>
          <h3 className='JobDesc'>UX Designer at Airbnb</h3>
          <h3 className='fees' >Fees: <span>$10/lesson</span></h3>
          <StarContainer>
          <img className='star' src={StarImg} alt="" /><h3 className='starnum'>4.8</h3>
          </StarContainer>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg3} alt="" />
            </ImgContainer>
            <h2 className='name'>Anthony Josh</h2>
          </Header>
          <h3 className='JobDesc'>Tech Startup CEO</h3>
          <h3 className='fees' >Fees: <span>$12/lesson</span></h3>
          <StarContainer>
          <img className='star' src={StarImg} alt="" /><h3 className='starnum'>4.8</h3>
          </StarContainer>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
      </Guides>
    </Section>
    <div id="ongoing-events" />
    <Title>Learn From Events</Title>
    <Section>
    <Guides>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={GoogleHackImg} alt="" />
            </ImgContainer>
            <h2 className='name'>Google Hackathon</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Google</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>26 Aug 2022 - 28 Aug 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>All Day</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>New York</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={ProjectManagementImg} alt="" />
            </ImgContainer>
            <h2 className='name'>Project Management 101</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Ricky</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>30 Aug 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>7pm - 9pm WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Zoom</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={LatteArtImg} alt="" />
            </ImgContainer>
            <h2 className='name'>Latte Art Masterclass</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Barista Union</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>10 December 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
      </Guides>
    </Section>
    <div id="resources" />
    <Title>Get Free Resources</Title>
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