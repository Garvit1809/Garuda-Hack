import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  width: 25vw;
  height: auto;
  /* border: 1px solid purple; */
  margin: 0 auto;
  margin-bottom: 3.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.75);
box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.75);

h1,h2,h3,h4,h5,h6{
  margin: 0;
}

  &:hover{
    /* transform: scale(1.1); */
    transform: translateY(-5%);
    -webkit-box-shadow: 11px 10px 33px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 11px 10px 33px 1px rgba(0,0,0,0.75);
box-shadow: 11px 10px 33px 1px rgba(0,0,0,0.75);
  }
`

const ImgContainer = styled.div`
  img{
    height: 30vh;
    width: 25vw;
    object-fit: cover;
  }
`
  

interface opportunity {
        companyName: String,
        companyImageLink: any
        companyWebsite: String,
        companyVision: String,
        role: String,
        roleDescription: String,
        skills: String[],
        jobType: String,
        jobLocation: String,
        userId: String
}

const Career = (props: opportunity) => {
  return (
    <Section>
      <ImgContainer>
      <img src={props.companyImageLink} alt="" />
      </ImgContainer>
      <h3>{props.companyName}</h3>
      <h3>{props.role}</h3>
      {
        props.jobType === "Work from Home" ? 
        <h3>
          Remote Work
        </h3>
        : <h3>{props.jobLocation}</h3>
      }
    </Section>
  )
}

export default Career