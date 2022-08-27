import React from 'react'
import styled from 'styled-components'
import Button from '../GeneralComponents/Button'

const Section = styled.div`
    width: 100%;
    /* height: 30vh; */
    background-color: #202020;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const PostEvent = () => {
  return (
    <Section>
        <h1>Want to host an event ??</h1>
        <Button text="Host a Event"  link="#" backgroundColor="#fff" clr="#202020" />
    </Section>
  )
}

export default PostEvent