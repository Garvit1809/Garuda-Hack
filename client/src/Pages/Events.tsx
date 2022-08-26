import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import eventImg1 from '../Assets/eventImg.webp'
import { useNavigate } from 'react-router-dom'

const Section = styled.div`
width: 75%;
min-height: calc(100vh - 4rem);
/* border: 1px solid red; */
margin: 0 auto;
margin-top: 2rem;
display: grid;
grid-template-columns: auto auto;
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

const Events = () => {

  const navigate = useNavigate();
  const eventClick = () => {
    navigate("/events/id")
  }

  return (
    <>
    <Navbar/>
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