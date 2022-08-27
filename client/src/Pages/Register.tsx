import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Components/GeneralComponents/Navbar'
import SubmitButton from '../Components/GeneralComponents/SubmitButton'
import { postData } from '../lib'

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
const ErrorMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
 text-align: center;
  align-items: center;
  color: red;
  font-size: 1rem;

  ${({ hidden }) => hidden && `
      display: none
  `}
`

const InputBox = styled.input`
  width: fit-content;
  height: 20px;
  margin: 5px 0 5px 0;
`


const Register = () => {
 let navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [notError, setNotError] = useState(true)
  const [errorMsg, setErrorMsg] = useState("test")

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    setName(e.target.value)
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    setPassword(e.target.value)
  }

  const handleCpassword = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    setCpassword(e.target.value)
  }

  const registerHandler = ()=>{
    if(password === cpassword){
      setErrorMsg("")
      setNotError(true)
      postData('http://localhost:4000/auth/signup', {
        name,
        email,
        password
      }).then((data) => {
        if(!data.statusCode){
          localStorage.setItem('user', JSON.stringify(data));
          navigate("/")
        } else {
          setErrorMsg(data.message.toString())
          setNotError(false)
        }
      })
      .catch(err=>console.log(err))
    }
    else {
      setErrorMsg("Password did not match")
      setNotError(false)
    }
  }



  return (
    <>
    <Navbar/>
    <Wrapper>
    <Card>
      <Container>
      <h3 className='content'>Register an Account</h3>
      </Container>
      <Container>
      <InputBox type="name" className="name" name="name" placeholder='Name' value={name} onChange={handleName} />
      <InputBox type="email" className="email" name="email" placeholder='Email' value={email} onChange={handleEmail} />
      <InputBox type="password" className="password" name="email" placeholder='Password' value={password} onChange={handlePassword}  />
      <InputBox type="password" className="confirm-password" name="confirm-password" placeholder='Confirm Password'value={cpassword} onChange={handleCpassword}  />
      </Container>
      <ErrorMessages hidden={notError} className='err'>{errorMsg}</ErrorMessages>
      <Container>
      <SubmitButton text="Submit" clr="#fff" backgroundColor="#202020" onClick={()=> registerHandler()} />
   
      </Container>
     
    </Card>
    </Wrapper>
    </>
  )
}

export default Register