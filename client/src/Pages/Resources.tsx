import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/GeneralComponents/Navbar";

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Resource = styled.div`
  width: 80%;

  header{
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    
    h3{
      margin: 0;
      font-weight: 400;
    }
    
    hr{
      width: 40%;
      height: 2px;
      border: none;
      background-color: #DADADA;
    }
  }
`;

const Oppo = styled.div`
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: auto auto auto auto;

  div {
    border: 1px solid blue;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
    height: 30vh;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      /* transform: scale(1.1); */
      transform: translateY(-5%);
    }
  }

  div.blur{
    filter: blur(4px);
  -webkit-filter: blur(4px);
  }

  div.comingSoon{
    display: flex;
    align-items: center;
    justify-content: center;
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
        <Resource>
          <header>
            <hr />
            <h3>ALL RESOURCES</h3>
            <hr />
          </header>
          <Oppo>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick}>Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick} >Lorem ipsum dolor sit amet.</div>
            <div onClick={resorceClick} className="blur" >Lorem ipsum dolor sit amet.</div>
            <div className="comingSoon" >More Coming Soon</div>
          </Oppo>
        </Resource>
      </Section>
    </>
  );
};

export default Resources;
