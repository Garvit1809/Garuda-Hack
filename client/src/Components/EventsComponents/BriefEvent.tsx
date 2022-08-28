import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
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
    text-align: left;
    padding-left: 1rem;
    width: 100%;
    margin: 0;
    font-size: 1rem;
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

interface eventProps {
    name: String,
    eventImage: any,
    eventType: String,
    description: String,
    eventMode: String,
    location: String,
    eventFor: String,
    dateStart: String,
    timeStart: String,
    dateEnd: String,
    timeEnd: String,
    discordLink: String,
    otherLink: String,
    userId: String,
}

const BriefEvent = (props: eventProps) => {

  const navigate = useNavigate();

  const eventClick = () => {
    navigate("/events/event");
  };

  return (
    <Section>
      <img src={props.eventImage} alt="" />
      <div>
        <h4>{props.name}</h4>
        <h5>125</h5>
      </div>
      <h4>Hosted By</h4>
      <div>{props.dateStart} - {props.dateEnd}</div>
      <h4>{props.eventMode}</h4>
      {
        props.eventMode === "Digital" ? null : <h4>{props.location}</h4> 
      }
      <div>
        <button>Join</button>
        <button onClick={eventClick}>More</button>
      </div>
    </Section>
  );
};

export default BriefEvent;
