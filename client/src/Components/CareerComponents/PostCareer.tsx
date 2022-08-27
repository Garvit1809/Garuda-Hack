import React from 'react'
import styled from 'styled-components'
import Button from '../GeneralComponents/Button'

const Section = styled.div`
    position: absolute;
    top: 1.4rem;
    right: 1.5rem;
`

const PostCareer = () => {
  return (
    <Section>
        <Button text="Post a Job/Intern" link="#" clr="#fff" backgroundColor="#202020"  />
    </Section>
  )
}

export default PostCareer