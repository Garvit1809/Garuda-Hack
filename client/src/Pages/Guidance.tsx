import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import img from '../Assets/eventImg.webp'

const Section = styled.div`
width: 100%;
min-height: calc(100vh - 4rem);

display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */

h1,h2,h3,h4,h5,h6{
  margin: 0;
}
`

const Heading = styled.div`
margin: 1.5rem 0 2rem 0;
`

const Guides = styled.div`
width: 85%;
/* border: 1px solid red; */

display: grid;
grid-template-columns: auto auto auto;
`

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;
`

const Header = styled.div`
  img{
    width: 100%;
  }
`

const Guidance = () => {
  return (
    <>
    <Navbar/>
    <Section>
      <Heading>
      <h1>Looking for some personal guidance??</h1>
      <h3>Here are some experienced mentors who can help you in achieving your goals</h3>
      </Heading>
      <Guides>
        <Guide>
          <Header>
            <img src={img} alt="" />
            <div>
            <h2>GuideName</h2>
              <h2>12</h2>
            </div>
          </Header>
          <h3>Web Developer</h3>
          <h3>Experience</h3>
          <h3>Working at Org name</h3>
          <h3>Good Work for Community</h3>
          <h3>Fees:- $10/lesson</h3>
          <h3>Socials</h3>
          <div>
            <button>Become a mentee</button>
          </div>
        </Guide>
        <Guide>
          <Header>
            <img src={img} alt="" />
            <div>
            <h2>GuideName</h2>
              <h2>12</h2>
            </div>
          </Header>
          <h3>Web Developer</h3>
          <h3>Experience</h3>
          <h3>Working at Org name</h3>
          <h3>Good Work for Community</h3>
          <h3>Fees:- $10/lesson</h3>
          <h3>Socials</h3>
          <div>
            <button>Become a mentee</button>
          </div>
        </Guide>
        <Guide>
          <Header>
            <img src={img} alt="" />
            <div>
            <h2>GuideName</h2>
              <h2>12</h2>
            </div>
          </Header>
          <h3>Web Developer</h3>
          <h3>Experience</h3>
          <h3>Working at Org name</h3>
          <h3>Good Work for Community</h3>
          <h3>Fees:- $10/lesson</h3>
          <h3>Socials</h3>
          <div>
            <button>Become a mentee</button>
          </div>
        </Guide>
        <Guide>
          <Header>
            <img src={img} alt="" />
            <div>
            <h2>GuideName</h2>
              <h2>12</h2>
            </div>
          </Header>
          <h3>Web Developer</h3>
          <h3>Experience</h3>
          <h3>Working at Org name</h3>
          <h3>Good Work for Community</h3>
          <h3>Fees:- $10/lesson</h3>
          <h3>Socials</h3>
          <div>
            <button>Become a mentee</button>
          </div>
        </Guide>
        <Guide>
          <Header>
            <img src={img} alt="" />
            <div>
            <h2>GuideName</h2>
              <h2>12</h2>
            </div>
          </Header>
          <h3>Web Developer</h3>
          <h3>Experience</h3>
          <h3>Working at Org name</h3>
          <h3>Good Work for Community</h3>
          <h3>Fees:- $10/lesson</h3>
          <h3>Socials</h3>
          <div>
            <button>Become a mentee</button>
          </div>
        </Guide>
      </Guides>
    </Section>
    </>
  )
}

export default Guidance