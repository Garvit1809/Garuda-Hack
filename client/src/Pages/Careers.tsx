import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PostCareer from '../Components/CareerComponents/PostCareer'
import Navbar from '../Components/GeneralComponents/Navbar'
import { getData } from '../lib'
import careerImg1 from '../Assets/CareerImg1.jpg'
import {Carrers} from '../Components/CareerComponents/CareerData'
import Career from '../Components/CareerComponents/Career'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from '../Components/CareerComponents/CareersStyles'

const Section = styled.div`
width: 100%;
min-height: calc(100vh - 4rem);
/* border: 1px solid red; */
position: relative;

display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */

`

const Heading = styled.div`
  margin-bottom: 1rem;
h1{
  /* margin: 0; */
  font-size: 2rem;
  font-weight: 400;
  /* border: 1px solid red; */
}
`

const Opportunity = styled.div`
width: 80vw;
`

const Oppo = styled.div`
/* border: 1px solid black; */
display: grid;
grid-template-columns: auto auto auto;
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


const Careers = () => {
  const [careers, setCareers] = useState([])
  const navigate = useNavigate()

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 useEffect(()=>{
  const data: any = getData("http://localhost:4000/careers")
  if(!data.statusCode){
    setCareers(data)
    console.log(data)
  }
 }, [])

 const handlePostCareer = () => {
  alert("Hello")
}

  return (
    <>
    <Navbar/>
    <Section>
      <div onClick={handleOpen} > 
      <PostCareer />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modal}>
          <h1>Support the community by posting any opportunity here!!</h1>
          <form action="">
          <h3>Company Name</h3>
          <input type="text" name="" id="" placeholder='Enter Companys Name' />
          <h3>Company Image URL</h3>
          <input type="text" name="" id="" placeholder='Enter a company image (URL preferred)'/>
          <h3>Company's Website</h3>
          <input type="text" name="" id="" placeholder='Enter Companys Website' />
          <h3>Role</h3>
          <input type="text" name="" id="" placeholder='For what Role you are looking for?' />
          <h3>Role Type</h3>
          <input type="text" name="" id="" placeholder='Full Time || Part Time' />
          <h3>Work</h3>
          <input type="text" name="" id="" placeholder='Remote Work || InOffice Work' />
          <h3>Location</h3>
          <input type="text" name="" id="" placeholder='Enter Work Location if InOffice' />
          <h3>Role Description</h3>
          <textarea name="" id="" placeholder='Specify the Role Description' />
          <h3>Skills Required</h3>
          <input type="text" name="" id="" placeholder='Skills required for the role' />
          <h3>Tell us more about your organization</h3>
          <textarea name="" id="" placeholder="Your Company's Vision" />
          <button>Submit</button>
        </form>
        </Box>
      </Modal>
      <Heading>
        <h1>Looking to start a new career? Get started here!!</h1>
      </Heading>
    <Opportunity>
    <Oppo>
      {
        Carrers.map((opportunity,index) => {
          return (
            <Career key={index}
            companyName={opportunity.companyName}
            companyImageLink={opportunity.companyImageLink}
            companyWebsite={opportunity.companyWebsite}
            companyVision={opportunity.companyVision}
            role={opportunity.role}
            roleDescription={opportunity.roleDescription}
            skills={opportunity.skills}
            jobType={opportunity.jobType}
            jobLocation={opportunity.jobLocation}
            userId={opportunity.userId}
            />
            )
          })
      }
    </Oppo>
    </Opportunity>
    </Section>
    </>
  )
}

export default Careers