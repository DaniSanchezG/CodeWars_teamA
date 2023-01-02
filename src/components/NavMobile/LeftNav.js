import React from 'react';
import styled from 'styled-components';

import { NavLink } from "react-router-dom"
import '../../components/NavMobile/LeftNav.css'
import Social from '../Social/Social'

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
    width: 375px;
    padding-top: 10rem;
    transition: transform 0.02s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <>
    <Ul open={open}>
    
        <li className="nav__link_left">
          <NavLink exact to="/">HOME</NavLink>
          <span className="nav__link-bar_left"></span>
        </li>
        <li className="nav__link_left">
          <NavLink exact to="/video">VIDEO</NavLink>
          <span className="nav__link-bar_left"></span>
        </li>
        <li className="nav__link_left">
          <NavLink exact to="/films">FILMS</NavLink>
          <span className="nav__link-bar_left"></span>
        </li>
        <li className="nav__link_left">
          <NavLink to="/series">SERIES</NavLink>
         
          <span className="nav__link-bar_left"></span>
        </li>
        <li className="nav__link_left">
          <NavLink to="/interactive">INTERACTIVE</NavLink>
         
          <span className="nav__link-bar_left"></span>
        </li>
        <li className="nav__link_left">
          <NavLink to="/community">COMMUNITY</NavLink>
         
          <span className="nav__link-bar_left"></span>
        </li>
        <li className="nav__link_left">
          <NavLink to="/databank">DATABANK</NavLink>
         
          <span className="nav__link-bar_left"></span>
        </li>
        
        <li className="nav__link_left">
          <NavLink to="/code+">CODE+</NavLink>
         
          <span className="nav__link-bar_left"></span>
        </li>
       
   </Ul>
      <Social>
      <li className="social__icon"><a href="#!"><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li className="social__icon"><a href="#!"><ion-icon name="logo-instagram"></ion-icon></a></li>
        <li className="social__icon"><a href="#!"><ion-icon name="logo-youtube"></ion-icon></a></li>
        <li className="social__icon"><a href="#!"><ion-icon name="logo-twitter"></ion-icon></a></li>
      </Social>
        </>
  )
}

export default LeftNav