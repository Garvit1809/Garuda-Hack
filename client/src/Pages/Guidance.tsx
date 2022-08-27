import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import PostMentor from '../Components/GuidanceComponents/PostMentor'
import MentorImg1 from '../Assets/MentorImg1.jpg'
import MentorImg2 from '../Assets/MentorImg2.jpg'
import {MdPeopleAlt} from 'react-icons/md'
import Button from '../Components/GeneralComponents/Button'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

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
box-sizing: border-box;
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
  box-sizing: border-box;
  border-radius: 15px;

  h3.JobDesc{
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: grey;

    /* color: orange; */
  }

  h3.experience{
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
    border-radius: 15px;
    justify-content: center;
    margin-bottom: 0.6rem;
    
    img{
      box-sizing: border-box;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 25vw;
      height: 30vh;
      object-fit: cover;
  }
`

const Education = styled.div`

/* border: 1px solid black; */
width: 20vw;
box-sizing: border-box;
margin-bottom: 0.4rem;

   h3{
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    
  } 

  p{
    margin: 0;
    font-size: 0.9rem;
    width: 90%;
    padding-left: 1rem;
    /* border: 1px solid red; */
    color: grey;
    }

`

const Socials = styled.div`
  /* border: 1px solid black; */
width: 100%;
box-sizing: border-box;
margin-bottom: 1rem;

h3{
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    
  } 

  div{
    /* border: 1px solid red; */
    width: 80%;
    margin-left: 1.3rem;
    margin-top: 0.4rem;

    svg{
      width: 30px;
      height: 30px;
      margin-right: 1rem;
      fill: grey;
      cursor: pointer;
    }
  }
`

const BecomeMentee = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

const Guidance = () => {
  return (
    <>
    <Navbar/>
    <PostMentor/>
    <Section>
      <Heading>
      <h1>Looking for some personal guidance??</h1>
      <h3>Here are some experienced mentors who can help you in achieving your goals</h3>
      </Heading>
      <Guides>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg1} alt="" />
            </ImgContainer>
            <div>
            <h2>GuideName</h2>
            <h3><MdPeopleAlt/> <span>12</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Web Developer</h3>
          <h3 className='experience' >Experience:- <span>10 Years</span> </h3>
          <h3 className='company' >Working at <span>Org Name</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>Zakir Hussain College of Engineering and Texhnology, AMU</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$10/lesson</span></h3>
          <Socials>
          <h3>Socials</h3>
          <div>
            <BsLinkedin/>
            <BsGithub/>
          </div>
          </Socials>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg1} alt="" />
            </ImgContainer>
            <div>
            <h2>GuideName</h2>
            <h3><MdPeopleAlt/> <span>12</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Web Developer</h3>
          <h3 className='experience' >Experience:- <span>10 Years</span> </h3>
          <h3 className='company' >Working at <span>Org Name</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>Zakir Hussain College of Engineering and Texhnology, AMU</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$10/lesson</span></h3>
          <Socials>
          <h3>Socials</h3>
          <div>
            <BsLinkedin/>
            <BsGithub/>
          </div>
          </Socials>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg2} alt="" />
            </ImgContainer>
            <div>
            <h2>GuideName</h2>
            <h3><MdPeopleAlt/> <span>12</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Web Developer</h3>
          <h3 className='experience' >Experience:- <span>10 Years</span> </h3>
          <h3 className='company' >Working at <span>Org Name</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>Zakir Hussain College of Engineering and Texhnology, AMU</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$10/lesson</span></h3>
          <Socials>
          <h3>Socials</h3>
          <div>
            <BsLinkedin/>
            <BsGithub/>
          </div>
          </Socials>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <div>
            <img src={MentorImg2} alt="" />
            </div>
            </ImgContainer>
            <div>
            <h2>GuideName</h2>
            <h3><MdPeopleAlt/> <span>12</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Web Developer</h3>
          <h3 className='experience' >Experience:- <span>10 Years</span> </h3>
          <h3 className='company' >Working at <span>Org Name</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>Zakir Hussain College of Engineering and Texhnology, AMU</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$10/lesson</span></h3>
          <Socials>
          <h3>Socials</h3>
          <div>
            <BsLinkedin/>
            <BsGithub/>
          </div>
          </Socials>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg1} alt="" />
            </ImgContainer>
            <div>
            <h2>GuideName</h2>
            <h3><MdPeopleAlt/> <span>12</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Web Developer</h3>
          <h3 className='experience' >Experience:- <span>10 Years</span> </h3>
          <h3 className='company' >Working at <span>Org Name</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>Zakir Hussain College of Engineering and Texhnology, AMU</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$10/lesson</span></h3>
          <Socials>
          <h3>Socials</h3>
          <div>
            <BsLinkedin/>
            <BsGithub/>
          </div>
          </Socials>
          <BecomeMentee>
            <Button text="Become a Mentee" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </Guide>
      </Guides>
    </Section>
    </>
  )
}

export default Guidance