import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: 3em;
color: #202020;
color: pink;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
    <Link to="/">
    MauKerja..
    </Link>
    </LogoText>
  )
}

export default Logo