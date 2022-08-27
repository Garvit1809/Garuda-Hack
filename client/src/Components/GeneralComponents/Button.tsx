import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonColorProps {
  backgrndColor: any,
  clr: any
}

const Btn = styled.button`
/* background-color: #202020; */
background-color: ${(props:ButtonColorProps) => props.backgrndColor};
/* color: #fff; */
color: ${(props:ButtonColorProps) => props.clr};
font-size: 1em;
font-weight: 500;
padding: 0.8rem 2.5rem;
border-radius: 3rem;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

a{
    color: inherit;
    text-decoration: none;
}

&:hover{
    transform: scale(0.9);
}

&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 3rem;
    /* border: 2px solid #202020; */
    border: 2px solid ${(props:ButtonColorProps) => props.backgrndColor};
    /* background-color: lightblue; */
}

&:hover::after{
  transform: translate(-50%, -50%) scale(1);
  padding: 0.3rem;
}
`

interface buttonProps {
    text: String,
    link: any
    backgroundColor: String,
    clr: String
}

const Button = (props: buttonProps) => {
  return (
    <Btn backgrndColor={props.backgroundColor} clr={props.clr}  >
    <Link to={props.link} target="_blank">
    {props.text}
    </Link>
    </Btn>
  )
}

export default Button