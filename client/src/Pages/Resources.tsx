import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/GeneralComponents/Navbar";

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Resorce = styled.div`
  width: 80%;
`;

const Oppo = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  border: 1px solid black;
  display: grid;
  grid-template-columns: auto auto auto auto;

  div {
    border: 1px solid blue;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
    height: 30vh;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      /* transform: scale(1.1); */
      transform: translateY(-5%);
    }
  }
`;

const Resources = () => {
  const navigate = useNavigate();

  const resorceClick = () => {
    navigate("/resources/id");
  };

  return (
    <>
      <Navbar />
      <Section>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        <Resorce>
          <h4>POLICE</h4>
          <hr />
          <Oppo>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
          </Oppo>
        </Resorce>
      </Section>
    </>
  );
};

export default Resources;
