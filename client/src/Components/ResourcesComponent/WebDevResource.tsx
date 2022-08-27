import React from 'react'
import styled from 'styled-components'
import Navbar from '../GeneralComponents/Navbar'

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,h2,h3,h4,height,h6{
    margin: 0;
  }
`

const Heading = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 600;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

const Start = styled.div`
  
`

const WebDevResource = () => {
  return (
    <>
    <Navbar/>
    <Section>
      <Heading>
      Roadmap to Become a Web Developer in 2022
      </Heading>
      <Start>
    Web Developer/ Full Stack Web Developer – How do you feel when you tag yourself with such titles? A long journey takes place to be called by such names. In the beginning, you might feel bored or terrified, but, trust me, this is the most popular and interesting field one should work on. You can also become a web developer provided you know why you want to learn it. According to a study, there are approximately 23 million software developers worldwide and the population growth is going to increase day by day. Now if you don’t know about web development, no worries! All your doubts will get cleared here. 
      </Start>
      <p>Who’s a web developer? Those websites which you scroll to are created by none other than web developers. A person who creates amazing websites for businesses and startups. A full-stack web developer looks after both the front-end and the back-end parts. The front-end deals with how the websites look when delivered to the customers while the back-end stores and processes all the data safely. </p>
      <p>Also, to bring to your notice, web developers are highly paid professionals. Most Software Developers work as Web Developers. MNCs also hire professionals/freshers based on their interest in web development. No matter what the situation would be web developers will always be in demand and for this, you don’t have to care whether it’s WFH (Work From Home) or WFO (Work From Office). This job requires dedication, patience, and eagerness to learn every day and play with technology. From Big MNCs to startups, everyone needs web developers to see growth in their business. But before we start this journey, you all should have a clear idea of why do you want to be a web developer?</p>
      <p>In this resource, we will discuss the Web Development Roadmap 2022. Let’s begin!!</p>
      <p>Here’s a step-by-step process:</p>
      <ol>
        <li>Choose a technology on which you want to work</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Database</li>
        <li>Version Control System</li>
        <li>Build Projects</li>
      </ol>
    </Section>
    </>
  )
}

export default WebDevResource