import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 1rem;
  width: 100vw;

  a{
    color: inherit;
    text-decoration: none;
  }
  div.copyright{
    margin-bottom: 100px;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 2px 0 2px 0;
  padding: 0;
  width: 100%;
`;

const MenuItem = styled.li`
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

const Footer = () => {
  return (
    <Section>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/careers">Careers</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/resources">Resources</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/events">Events</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/mentors">Guidance</Link>
        </MenuItem>
      </Menu>
      <div className="copyright">
        Copyright © 2022 MauKerja. All Rights Reserved
      </div>
    </Section>
  );
};

export default Footer;
