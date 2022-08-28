import React from 'react'
import { Link } from 'react-router-dom'
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
-moz-box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.75);
box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.75);

h1,h2,h3,h4,h5,h6{
  margin: 0;
}

a{
  color: inherit;
  text-decoration: none;
}

  &:hover{
    /* transform: scale(1.1); */
    transform: translateY(-5%);
    -webkit-box-shadow: 4px 3px 8px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 5px 16px 1px rgba(0,0,0,0.75);
box-shadow: 5px 5px 16px 1px rgba(0,0,0,0.75);
  }

  h2{
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 1rem;
    margin-bottom: 0.2rem;
  }
`

const ImgContainer = styled.div`
  img{
    height: 30vh;
    width: 25vw;
    object-fit: cover;
  }
`

const Role = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 90%;
    margin-left: 1rem;
    margin-bottom: 0.2rem;

    div{
      /* border: 1px solid red; */
      width: 50%;
    }

    h3{
      font-size: 0.9rem;
      font-weight: 500;

    }

    h3.role{
      color: orange;
      font-weight: 700;
      font-size: 1.2rem;
    }
`

const Location = styled.div`
   margin-left: 1rem;
   
   h3{
     font-size: 1rem;
     font-weight: 500;

   }
`

const Links = styled.div`

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
      <Link to="//optiver.com/working-at-optiver/career-opportunities/6326967002/" target="_blank" >
      <ImgContainer>
      <img src={props.companyImageLink} alt="" />
      </ImgContainer>
      <h2>{props.companyName}</h2>
      <Role>
        <div>
      <h3 className='role' >{props.role}</h3>
        </div>
      <h3>Full Time</h3>
      </Role>
      <Location>
      {
        props.jobType === "Work from Home" ? 
        <h3>
          Remote Work
        </h3>
        : <h3>{props.jobLocation}</h3>
      }
      </Location>
      </Link>
      <Links>
      
      </Links>
    </Section>
  )
}

export default Career