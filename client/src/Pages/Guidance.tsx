import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import PostMentor from '../Components/GuidanceComponents/PostMentor'
import MentorImg1 from '../Assets/MentorImg1.jpg'
import MentorImg2 from '../Assets/MentorImg2.jpg'
import {MdPeopleAlt} from 'react-icons/md'
import Button from '../Components/GeneralComponents/Button'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { getData } from '../lib'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStyles from '../Components/CareerComponents/CareersStyles'
import MentorImg3 from '../Assets/MentorImg3.jpg'
import MentorImg4 from '../Assets/MentorImg4.jpg'
import MentorImg5 from '../Assets/MentorImg5.jpg'

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
/* border: 1px solid red; */
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
  font-size: 2rem;
  font-weight: 500;
}

h3{
  font-size: 1.5rem;
  font-weight: 400;
}
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
  /* box-shadow: 10px 10px black; */

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #C4C4C4",
  boxShadow: 24,
  p: 4,
};

const Guidance = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  const [mentors, setMentors] = useState([])

  useEffect(()=>{
    const data: any = getData("http://localhost:4000/mentors")
    if(!data.statusCode){
      setMentors(data)
      console.log(data)
    }
   }, [])

  return (
    <>
    <Navbar/>
    <div onClick={handleOpen} >
    <PostMentor/>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modal}>
          <h1>Want to become a Mentor?? Provide us your Details!!</h1>
          <form action="">
          <h3>Your Name</h3>
          <input type="text" name="" id="" placeholder='Enter Your Name' />
          <h3>Profile Photo</h3>
          <input type="text" name="" id="" placeholder='Upload Your Profile Photo'/>
          <h3>Expertise</h3>
          <input type="text" name="" id="" placeholder='Guidance do u want to provide' />
          <h3>Years of Experience</h3>
          <input type="number" name="" id="" placeholder='How long have you been in this industry' />
          <h3>Working At</h3>
          <input type="text" name="" id="" placeholder='Currently Working at' />
          <h3>Worked At</h3>
          <input type="text" name="" id="" placeholder='Previously Working at' />
          <h3>Education</h3>
          <input type="text" name="" id="" placeholder='Your highest educational qualification' />
          <h3>Fees per lesson</h3>
          <input type="text" name="" id="" placeholder="Fees per lesson($)" />
          <h3>Linkedin Link</h3>
          <input type="text" name="" id="" placeholder="Enter your LinkedIn Profile" />
          <h3>Github Link</h3>
          <input type="text" name="" id="" placeholder="Enter your Github Profile" />
          <h3>Other Link</h3>
          <input type="text" name="" id="" placeholder="Any Other Link you want to provide" />
          <button>Become Mentor</button>
        </form>
        </Box>
      </Modal>
    <Section>
      <Heading>
      <h1>Looking for some personal guidance??</h1>
      <h3>Here are some experienced mentors who can help you in achieving your goals</h3>
      </Heading>
      <Guides>
        <Guide>
          <Header>
            <ImgContainer>
            <img src={MentorImg3} alt="" />
            </ImgContainer>
            <div>
            <h2>Jonas Schmedtmann</h2>
            <h3><MdPeopleAlt/> <span>128</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Web Developer</h3>
          <h3 className='experience' >Experience:- <span>14 Years</span> </h3>
          <h3 className='company' >Working at <span>Udemy</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>McGill University</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$25/lesson</span></h3>
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
            <h2>Md. Yusuf Khan</h2>
            <h3><MdPeopleAlt/> <span>37</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >BlockChain Developer</h3>
          <h3 className='experience' >Experience:- <span>6 Years</span> </h3>
          <h3 className='company' >Working at <span>Polygon</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>University of Toronto</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$20/lesson</span></h3>
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
            <img src={MentorImg4} alt="" />
            </div>
            </ImgContainer>
            <div>
            <h2>Jose Portilla</h2>
            <h3><MdPeopleAlt/> <span>292</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Senior SDE || Teacher</h3>
          <h3 className='experience' >Experience:- <span>11 Years</span> </h3>
          <h3 className='company' >Working as <span>Instructor</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>MIT - Massachusetts Institute of Technology</p> 
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
            <h2>Garvit Varshney</h2>
            <h3><MdPeopleAlt/> <span>08</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >Frontend Developer</h3>
          <h3 className='experience' >Experience:- <span>1 Years</span> </h3>
          <h3 className='company' >Working at <span>SuperReach</span></h3>
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
            <img src={MentorImg5} alt="" />
            </ImgContainer>
            <div>
            <h2>Ashutosh Rana</h2>
            <h3><MdPeopleAlt/> <span>12</span></h3>
            </div>
          </Header>
          <h3 className='JobDesc' >ML Engineer</h3>
          <h3 className='experience' >Experience:- <span>4 Years</span> </h3>
          <h3 className='company' >Working at <span>Google</span></h3>
          <Education>
          <h3 className='education' >Education</h3>
          <p>Indian Institute of Technology Bombay</p> 
          </Education>
          <h3 className='fees' >Fees:- <span>$15/lesson</span></h3>
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