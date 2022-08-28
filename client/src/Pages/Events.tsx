import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/GeneralComponents/Navbar";
import eventImg1 from "../Assets/eventImg.webp";
import eventImg2 from "../Assets/EventImg2.png";
import eventImg3 from "../Assets/EventImg3.png";
import { useNavigate } from "react-router-dom";
import PostEvent from "../Components/EventsComponents/PostEvent";
import { getData } from "../lib";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useStyles from "../Components/CareerComponents/CareersStyles";

import { EventData } from "../Components/EventsComponents/EventsData";
import BriefEvent from "../Components/EventsComponents/BriefEvent";
import moment from 'moment';
import CalendarImg from "../Assets/calendar.png"
import ClockImg from "../Assets/clock.png"
import LocationImg from "../Assets/location.png"
import GoogleHackImg from "../Assets/google-hack.jpg"
import ProjectManagementImg from "../Assets/project-management.jpg"
import LatteArtImg from "../Assets/latte-art.jpg"
import Button from "../Components/GeneralComponents/Button";
import Hack1 from '../Assets/Hack1.png'
import Hack2 from '../Assets/Hack2.png'
import Hack3 from '../Assets/Hack3.png'


const Section = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 4rem); */
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

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

  h2,
  h3,
  h4,
  h5,
  h {
    margin: 0;
  }

  img {
    width: 100%;
    border-radius: 20px;
    /* height: 250px; */
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */
    width: 90%;
  }
`;

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

const EventPlans = styled.div`
width: 100%;
box-sizing: border-box;
/* border: 1px solid red; */

display: grid;
grid-template-columns: auto auto auto auto;
`

const EventPlan = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 2rem;
  box-sizing: border-box;
  border-radius: 15px;
  /* box-shadow: 10px 10px black; */

  h3.JobDesc{
    margin: 0;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: grey;

    /* color: orange; */
  }

  h3.experience{
    margin: 0;
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
    margin: 0;
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
    margin: 0;
    margin-top: 20px;
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
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const StarContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    img.star {
    padding-left: 1rem;
    margin: 2px 0 2px 0;
    width: 20px;
    height: 20px;
  }
    h3.starnum{
    margin: 0;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
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
    margin: 0;
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
    justify-content: center;
    border-radius: 15px;
    margin-bottom: 0.6rem;
    
    img{
      box-sizing: border-box;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 100%;
      height: 30vh;
      object-fit: cover;
  }
`

const BecomeMentee = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`


const Events = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const data: any = getData("http://localhost:4000/events");
    if (!data.statusCode) {
      setEvents(data);
      console.log(data);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div onClick={handleOpen}>
        <PostEvent />
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
            <input type="text" name="" id="" placeholder="Enter Events Name" />
            <h3>Event Image URL</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter an image for the event (URL preferred)"
            />
            <h3>Event Type</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="What Kind of Event is this?"
            />
            <h3>Event Description</h3>
            <textarea
              name=""
              id=""
              placeholder="Specify the Event Description"
            />
            <h3>Event Mode</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="InPerson || Digital || Hybrid"
            />
            <h3>Location</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter the location of Event if InPerson || Hybrid"
            />
            <h3>Event For</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Specify Who's eligible to attend the Event"
            />
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
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your Organization Name"
            />
            <h3>Discord Link</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter the Event's Discord Link"
            />
            <h3>Any Other Link</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Any other Link you want to share"
            />
            <button>Host Event</button>
          </form>
        </Box>
      </Modal>
      <Section>
      <EventPlans>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={GoogleHackImg} alt="" />
            </ImgContainer>
            <h2 className='name'>Google Hackathon</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Google</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>26 Aug 2022 - 28 Aug 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>All Day</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>New York</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={ProjectManagementImg} alt="" />
            </ImgContainer>
            <h2 className='name'>Project Management 101</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Ricky</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>30 Aug 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>7pm - 9pm WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Zoom</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={LatteArtImg} alt="" />
            </ImgContainer>
            <h2 className='name'>Latte Art Masterclass</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Barista Union</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>10 December 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={Hack3} alt="" />
            </ImgContainer>
            <h2 className='name'>Hack and Fitness</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Google</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>10 December 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={Hack1} alt="" />
            </ImgContainer>
            <h2 className='name'>MedHacks</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Google</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>13 December 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={Hack2} alt="" />
            </ImgContainer>
            <h2 className='name'>MLH Hack Week September</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Google</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>16 December 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={eventImg2} alt="" />
            </ImgContainer>
            <h2 className='name'>Women in Tech</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Generation Girl</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>18 September 2022</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
        <EventPlan>
          <Header>
            <ImgContainer>
            <img src={eventImg3} alt="" />
            </ImgContainer>
            <h2 className='name'>Pet Grooming</h2>
          </Header>
          <div></div>
          <h3 className='JobDesc'>Foxy Pet Shop</h3>
          <IconContainer>
          <StarContainer>
          <img className='star' src={CalendarImg} alt="" /><h3 className='starnum'>10 January 2023</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={ClockImg} alt="" /><h3 className='starnum'>9am - 10am WIB</h3>
          </StarContainer>
          <StarContainer>
          <img className='star' src={LocationImg} alt="" /><h3 className='starnum'>Jakarta</h3>
          </StarContainer>
          </IconContainer>
          <BecomeMentee>
            <Button text="Participate" link="#" clr="#fff" backgroundColor="#202020" />
          </BecomeMentee>
        </EventPlan>
      </EventPlans>
      </Section>
    </>
  );
};

export default Events;
