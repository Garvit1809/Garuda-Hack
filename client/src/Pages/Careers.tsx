import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PostCareer from '../Components/CareerComponents/PostCareer'
import Navbar from '../Components/GeneralComponents/Navbar'
import { getData } from '../lib'
import careerImg1 from '../Assets/CareerImg1.jpg'


const Section = styled.div`
width: 100%;
min-height: calc(100vh - 4rem);
border: 1px solid red;
position: relative;

display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */

`

const Heading = styled.div`
  margin-bottom: 0.4rem;
h1{
  /* margin: 0; */
  font-size: 2rem;
  font-weight: 400;
  /* border: 1px solid red; */
}
`

const Opportunity = styled.div`
width: 80vw;
/* border: 1px solid black; */
`

const Oppo = styled.div`
/* display: flex; */
/* flex-wrap: wrap; */
/* border: 1px solid black; */
display: grid;
grid-template-columns: auto auto auto;

div{
  /* border: 1px solid blue; */
  width: 25vw;
  margin: 0 auto;
  margin-bottom: 2rem;
  height: 30vh;
  cursor: pointer;
  transition: all 0.2s ease;


  &:hover{
    /* transform: scale(1.1); */
    transform: translateY(-5%);
  }

  img{
    height: 30vh;
    width: 25vw;
    object-fit: cover;
  }
}
`

const Desc = styled.div`
  
`

const Careers = () => {
  const [careers, setCareers] = useState([])
  const navigate = useNavigate()

  const careerClick = () => {
    navigate("/careers/id")
  }

 useEffect(()=>{
  const data: any = getData("http://localhost:4000/careers")
  if(!data.statusCode){
    setCareers(data)
    console.log(data)
  }
 }, [])

  return (
    <>
    <Navbar/>
    <Section>
      <PostCareer/>
      <Heading>
        <h1>Looking to start a new career? Get started here!!</h1>
      </Heading>
    <Opportunity>
    <Oppo>
    <div onClick={careerClick} >
      <img src={careerImg1} alt="" />
      <Desc>
        <h2>Job Role(PartTime)</h2>
        <h4>Location</h4>
      </Desc>
    </div>
    </Oppo>
    </Opportunity>
    </Section>
    </>
  )
}

export default Careers