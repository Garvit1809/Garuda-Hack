import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import eventImg1 from '../Assets/eventImg.webp'
import { useNavigate } from 'react-router-dom'
import PostEvent from '../Components/EventsComponents/PostEvent'
import { getData } from '../lib'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStyles from '../Components/CareerComponents/CareersStyles'

const Section = styled.div`
width: 75%;
/* min-height: calc(100vh - 4rem); */
/* border: 1px solid red; */
margin: 0 auto;
margin-top: 2rem;
display: grid;
grid-template-columns: auto auto auto;
`

const EventDesc = styled.div`
width: 80%;
border: 1px solid black;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
margin-bottom: 2rem;
border-radius: 20px;

h2,h3,h4,h5,h{
  margin: 0;
}

img{
  width: 100%;
  border-radius: 20px;
  /* height: 250px; */
}

div{
display: flex;
align-items: center;
justify-content: space-between;
/* border: 1px solid black; */
width: 90%;
}
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

const Events = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [events, setEvents] = useState([])
  const navigate = useNavigate();
  const eventClick = () => {
    navigate("/events/id")
  }

  useEffect(()=>{
    const data: any = getData("http://localhost:4000/events")
    if(!data.statusCode){
      setEvents(data)
      console.log(data)
    }
   }, [])

  return (
    <>
    <Navbar/>
    <div onClick={handleOpen} >
    <PostEvent/>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modal}>
          <h1>Want to host an Event?? Fill in the Details!!</h1>
          <form action="">
          <h3>Event Name</h3>
          <input type="text" name="" id="" placeholder='Enter Events Name' />
          <h3>Event Image URL</h3>
          <input type="text" name="" id="" placeholder='Enter an image for the event (URL preferred)'/>
          <h3>Event Type</h3>
          <input type="text" name="" id="" placeholder='What Kind of Event is this?' />
          <h3>Event Description</h3>
          <textarea name="" id="" placeholder='Specify the Event Description' />
          <h3>Event Mode</h3>
          <input type="text" name="" id="" placeholder='InPerson || Digital Only || Hybrid' />
          <h3>Location</h3>
          <input type="text" name="" id="" placeholder='Enter the location of Event if InPerson || Hybrid' />
          <h3>Event For</h3>
          <input type="text" name="" id="" placeholder="Specify Who's eligible to attend the Event" />
          <h3>Event Starts at</h3>
          <div>
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
          </div>
          <h3>Event Ends at</h3>
          <div>
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
          </div>
          <h3>Organization Name</h3>
          <input type="text" name="" id="" placeholder='Enter your Organization Name' />
          <h3>Discord Link</h3>
          <input type="text" name="" id="" placeholder="Enter the Event's Discord Link" />
          <h3>Any Other Link</h3>
          <input type="text" name="" id="" placeholder="Any other Link you want to share" />
          <button>Host Event</button>
        </form>
        </Box>
      </Modal>
    <Section>
      <EventDesc>
        <img src={eventImg1} alt="" />
        <div>
        <h4>Event Name</h4>
        <h5>125</h5>
        </div>
        <h4>Hosted By</h4>
        <h4>Date</h4>
        <h4>Location</h4>
        <h4>Mode</h4>
        <div>
          <button>Join</button>
          <button onClick={eventClick} >More</button>
        </div>
      </EventDesc>
      <EventDesc>
        <img src={eventImg1} alt="" />
        <div>
        <h4>Event Name</h4>
        <h5>125</h5>
        </div>
        <h4>Hosted By</h4>
        <h4>Date</h4>
        <h4>Location</h4>
        <h4>Mode</h4>
      </EventDesc>
      <EventDesc>
        <img src={eventImg1} alt="" />
        <div>
        <h4>Event Name</h4>
        <h5>125</h5>
        </div>
        <h4>Hosted By</h4>
        <h4>Date</h4>
        <h4>Location</h4>
        <h4>Mode</h4>
      </EventDesc>
    </Section>
    
    </>
  )
}

export default Events