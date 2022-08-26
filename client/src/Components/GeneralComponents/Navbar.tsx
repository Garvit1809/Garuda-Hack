import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 4rem;
width: 90%;
margin: 0 auto;
border: 1px solid pink;
`

const Menu = styled.ul`
display: flex;
align-items: center;
`

const MeuItem = styled.li`
list-style: none;
margin-right: 1rem;
`


const Navbar = () => {
  return (
    <Section>
    <div>
    ProudIndo
    </div>
    <Menu>
    <MeuItem><Link to="/" >Home</Link></MeuItem>
    <MeuItem><Link to="/careers" >Careers</Link></MeuItem>
    <MeuItem><Link to="/resources" >Resources</Link></MeuItem>
    <MeuItem><Link to="/events" >Events</Link></MeuItem>
    <MeuItem><Link to="/mentors" >Guidance</Link></MeuItem>
    </Menu>
    </Section>
  )
}

export default Navbar