import React from 'react'
import styled from 'styled-components'
import Button from '../Components/GeneralComponents/Button'
import Navbar from '../Components/GeneralComponents/Navbar'

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 360px;
  height: 50vh;
  margin: 0 auto;
  margin-bottom: 2rem;
  box-sizing: border-box;
  box-shadow: 1px 2px 10px grey;
  border-radius: 10px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`
const Container = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 
  h3.content {
    width: auto;
  height: fit-content;
  }
`

const InputBox = styled.input`
  width: fit-content;
  height: 20px;
  margin: 5px 0 5px 0;
`


const Register = () => {
  return (
    <>
  
    </>
  )
}

export default Register