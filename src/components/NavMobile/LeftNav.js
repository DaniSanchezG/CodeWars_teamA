import React from 'react';
import styled from 'styled-components';
// import Nav from '../Nav/Nav';
import { NavLink } from "react-router-dom"


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-170%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.02s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
    
        <li className="nav__link">
          <NavLink exact to="/">HOME</NavLink>
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className="nav__link">
          <NavLink exact to="/video">VIDEO</NavLink>
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className="nav__link">
          <NavLink exact to="/films">FILMS</NavLink>
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className="nav__link">
          <NavLink to="/series">SERIES</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className="nav__link">
          <NavLink to="/interactive">INTERACTIVE</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className="nav__link">
          <NavLink to="/community">COMMUNITY</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className="nav__link">
          <NavLink to="/databank">DATABANK</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        
        <li className="nav__link">
          <NavLink to="/code+">CODE+</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>

   </Ul>

  )
}

export default LeftNav