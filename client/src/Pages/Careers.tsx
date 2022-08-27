import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import { getData } from '../lib'

const Section = styled.div`
width: 100%;
min-height: calc(100vh - 4rem);
/* border: 1px solid red; */

display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */

`

const Opportunity = styled.div`
width: 80%;
/* border: 1px solid black; */
`

const Oppo = styled.div`
/* display: flex; */
/* flex-wrap: wrap; */
/* border: 1px solid black; */
display: grid;
grid-template-columns: auto auto auto auto;

div{
  border: 1px solid blue;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
  height: 30vh;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    /* transform: scale(1.1); */
    transform: translateY(-5%);
  }
}
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
    <h1>Looking to start a new career? Get started here!</h1>
    <Opportunity>
    <Oppo>
    <div onClick={careerClick} >Lorem ipsum dolor sit amet.</div>
    <div onClick={careerClick} >Lorem ipsum dolor sit amet.</div>
    <div onClick={careerClick} >Lorem ipsum dolor sit amet.</div>
    <div onClick={careerClick} >Lorem ipsum dolor sit amet.</div>
    <div onClick={careerClick} >Lorem ipsum dolor sit amet.</div>
    <div onClick={careerClick} >Lorem ipsum dolor sit amet.</div>
    </Oppo>
    </Opportunity>
    </Section>
    </>
  )
}

export default Careers