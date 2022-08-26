import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Navbar from "../Components/GeneralComponents/Navbar";
import Testing from './Testing'

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Resource = styled.div`

width: 80%;
header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      margin: 0;
      font-weight: 400;
    }

    hr {
      width: 40%;
      height: 2px;
      border: none;
      background-color: #dadada;
    }
  }
`;

const Oppo = styled.div`
  div.blur {
    filter: blur(4px);
    -webkit-filter: blur(4px);
  }

  div.comingSoon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)}
`;

const Row = styled.div`
  box-sizing: content-box;
  white-space: nowrap;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 15s linear infinite ${(props) => props.direction};
`;

const ResourceContainer = styled.div`
  width: 15rem;
  height: 20vh;
  margin: 0 1rem;
  /* background-color: ${(props) => props.theme.body}; */
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid blue;
`;

const ResourceItem = (passRef) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ResourceContainer
      onMouseOver={(e) => pause(e)}
      onMouseOut={(e) => play(e)}
    >
      Lorem ipsum dolor sit amet.
    </ResourceContainer>
  );
};

const Resources = () => {
  const navigate = useNavigate();

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  const resorceClick = () => {
    navigate("/resources/id");
  };

  return (
    <>
      <Navbar />
      <Section>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        <Resource>
          <header>
            <hr />
            <h3>ALL RESOURCES</h3>
            <hr />
          </header>
          </Resource>
          <Testing />
      </Section>
    </>
  );
};

export default Resources;
