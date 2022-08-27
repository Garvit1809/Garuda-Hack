import React from "react";
import styled from "styled-components";
import Navbar from "../Components/GeneralComponents/Navbar";

import img1 from '../Assets/CVResource.jpg'
import img2 from '../Assets/WebDevResource.jpg'
import img3 from '../Assets/AppDevResource.jpg'
import img4 from '../Assets/InterviewResource.jpg'
import img5 from '../Assets/BlockChainResource.jpg'
import img6 from '../Assets/AIResource.jpg'
import img7 from '../Assets/DSAResource.jpg'
import img8 from '../Assets/IOTRsource.jpg'
import img9 from '../Assets/DLResource.jpg'
import img10 from '../Assets/OpenSourceContriResource.png'
import img11 from '../Assets/MLResource.png'
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Start = styled.div`
display: flex;
flex-direction: column;
margin-top: 1.5rem;
margin-bottom: 1rem;
align-items: center;
justify-content: center;

  h1,h2{
    margin: 0;
  }

  h1{
    margin-bottom: 0.4rem;
    font-size: 1.5rem;
    font-weight: 400;
    /* border: 1px solid red; */
  }
  
  h2{
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
  font-weight: 600;
}

`

const Heading = styled.div`
  width: 80%;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      margin: 0;
      font-weight: 400;
    }

    hr {
      width: 40%;
      height: 2px;
      border: none;
      background-color: #dadada;
    }
  }
`;

const Courses = styled.div`
width: 85%;
display: grid;
grid-template-columns: auto auto auto;
`

const Course = styled.div`
/* border: 1px solid red; */
margin: 0 auto;
margin-bottom: 1.5rem;
position: relative;
transition: all 0.2s ease;
cursor: pointer;

img{
  height: 30vh;
  width: 25vw;
  object-fit: cover;
}

h2{
  /* border: 1px solid red; */
  width: 100%;
  font-size: 1.1rem;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(32,32,32,0.6);
  color: white;
  position: absolute;
  bottom:0;
  margin: 0;
}

h3{
  position: absolute;
  /* display: flex; */
  /* align-items: center; */

  /* bottom: 0; */
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.5rem;
  color: #fff;
  z-index: 10;
}

&:hover{
    /* transform: scale(1.1); */
    transform: translateY(-5%);
    -webkit-box-shadow: 4px 3px 8px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 5px 16px 1px rgba(0,0,0,0.75);
box-shadow: 5px 5px 16px 1px rgba(0,0,0,0.75);
  }

  img.blur{
    filter: blur(5px);
   -webkit-filter: blur(5px);  
  }
`

const Resrc = () => {

  const navigate = useNavigate();

  const handleCVClick = () => {
    navigate("/resources/cv-resource")
  }
  const handleWebClick = () => {
    navigate("/resources/web-resource")
  }
  const handleAppClick = () => {
    navigate("/resources/app-resource")
  }
  const handleInterviewClick = () => {
    navigate("/resources/interview-resource")
  }
 
  return (
    <>
      <Navbar />
      <Section>
        <Start>
        <h1>Can't buy those expensive Online Courses??</h1>
        <h2>Dont Worry !!</h2>
        <h1>Learn from these resources and courses which are available free of cost</h1>
        </Start>
        <Heading>
          <header>
            <hr />
            <h3>ALL RESOURCES</h3>
            <hr />
          </header>
        </Heading>
        <Courses>
          <Course onClick={handleCVClick} >
            <img src={img1} alt="" />
            <h2>Ultimate guide to build a CV</h2>
          </Course>
          <Course onClick={handleWebClick} >
            <img src={img2} alt="" />
            <h2>Web Development RoadMap</h2>
          </Course>
          <Course onClick={handleAppClick} >
            <img src={img3} alt="" />
            <h2>Intro to Mobile Development</h2>
          </Course>
          <Course onClick={handleInterviewClick} >
            <img src={img4} alt="" />
            <h2>Important Interview Skills</h2>
          </Course>
          <Course>
            <img src={img5} alt="" />
            <h2>BlockChain is the new Era!!</h2>
          </Course>
          <Course>
            <img src={img6} alt="" />
            <h2>Deep Dive to AI around us</h2>
          </Course>
          <Course>
            <img src={img7} alt="" />
            <h2>Get Started with Data Structures and Algorithms</h2>
          </Course>
          <Course>
            <img src={img8} alt="" />
            <h2>What actually is IOT??</h2>
          </Course>
          <Course>
            <img src={img11} alt="" />
            <h2>Learn Machine Learning Concepts</h2>
          </Course>
          <Course>
            <img src={img10} alt="" />
            <h2>Build your career woth Open Source</h2>
          </Course>
          <Course  >
            <img className="blur" src={img9} alt="" />
            <h3>Coming Soon</h3>
          </Course>
        </Courses>
      </Section>
    </>
  );
};

export default Resrc;
