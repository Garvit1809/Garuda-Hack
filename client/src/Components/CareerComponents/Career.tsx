import React from 'react'
import styled from 'styled-components'
import Navbar from '../GeneralComponents/Navbar'

const Section = styled.div`
  
`

const ImgContainer = styled.div`
  
`

interface opportunity {
        companyName: String,
        // companyImageLink: string | { careerImg: string}
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