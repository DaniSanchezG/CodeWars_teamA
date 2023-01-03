import { NavLink } from "react-router-dom"
import './Nav.css'
import NavMobile from '../NavMobile/Burger'
import React from 'react';

export default function Nav () {
  
  return (
    <>
    {/* //IF NavMobile IS IMPORTED OUTSIDE nav DROP-DOWN LIST DOESNT STEP ON THE LOGO */}
    <NavMobile /> 

    <nav className="nav">
    
      <ul aria-label="menu" className="nav__links" id="links">
        <li className="nav__link">
          <NavLink exact to="/">HOME</NavLink>
          <span className="nav__link-bar "></span>
        </li>
        <li className="nav__link">
          <NavLink exact to="/video">VIDEO</NavLink>
          <span className="nav__link-bar "></span>
        </li>
        <li className="nav__link">
          <NavLink exact to="/films">FILMS</NavLink>
          <span className="nav__link-bar "></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/series">SERIES</NavLink>
         
          <span className="nav__link-bar "></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/interactive">INTERACTIVE</NavLink>
         
          <span className="nav__link-bar "></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/community">COMMUNITY</NavLink>
         
          <span className="nav__link-bar "></span>
        </li>
        <li className='nav__link' >
          <NavLink to="/databank">DATABANK</NavLink>
         
          <span className="nav__link-bar "></span>
        </li>
        
        <li className='nav__link' >
          <NavLink to="/code+">CODE+</NavLink>
         
          <span className="nav__link-bar "></span>
        </li>
        
      </ul>
    </nav>
    </>
  )
}