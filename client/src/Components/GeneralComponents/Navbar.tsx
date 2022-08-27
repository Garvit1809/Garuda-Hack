import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid pink; */

  a{
    color: inherit;
    text-decoration: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;

const MeuItem = styled.li`
  list-style: none;
  /* margin-right: 1rem; */
  margin: 0 1rem;
  cursor: pointer;

  a{
    color: inherit;
    text-decoration: none;
  }

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #202020;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Logo/>
      <Menu>
        <MeuItem>
          <Link to="/">Home</Link>
        </MeuItem>
        <MeuItem>
          <Link to="/careers">Careers</Link>
        </MeuItem>
        <MeuItem>
          <Link to="/resources">Resources</Link>
        </MeuItem>
        <MeuItem>
          <Link to="/events">Events</Link>
        </MeuItem>
        <MeuItem>
          <Link to="/mentors">Guidance</Link>
        </MeuItem>
      </Menu>
      <Button text="Connect to Discord" link="/" backgroundColor="#202020" clr="#fff"  />
    </Section>
  );
};

export default Navbar;
