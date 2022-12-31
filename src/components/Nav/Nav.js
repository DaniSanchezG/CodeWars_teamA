import { NavLink } from "react-router-dom"
import './Nav.css'
import NavMobile from '../NavMobile/Burger'
import React from 'react';
// import styled from 'styled-components';
// import Burger from '../Nav/Burger';
// { logged }
export default function Nav () {
  
  return (
    <>
    {/* Imported NavMobile out side the nav list */}
    <NavMobile /> 

    <nav className="nav">
      <ul aria-label="menu" className="nav__links" id="links">
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
        <li className='nav__link' >
          <NavLink to="/series">SERIES</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/interactive">INTERACTIVE</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/community">COMMUNITY</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/databank">DATABANK</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        
        <li className='nav__link' >
          <NavLink to="/code+">CODE+</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        
      </ul>
    </nav>
    </>
  )
}