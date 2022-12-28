import { NavLink } from "react-router-dom"
import './Nav.css'

export default function Nav ({ logged }) {
  return (
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
        <li className={logged.login ? 'nav__link' : 'nav__link disabled'}>
          <NavLink to="/series">SERIES</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className={logged.login ? 'nav__link' : 'nav__link disabled'}>
          <NavLink to="/interactive">INTERACTIVE</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className={logged.login ? 'nav__link' : 'nav__link disabled'}>
          <NavLink to="/community">COMMUNITY</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        <li className={logged.login ? 'nav__link' : 'nav__link disabled'}>
          <NavLink to="/databank">DATABANK</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        
        <li className={logged.login ? 'nav__link' : 'nav__link disabled'}>
          <NavLink to="/code+">CODE+</NavLink>
         
          <span className="nav__link-bar nav__link-bar--yellow"></span>
        </li>
        
      </ul>
    </nav>
  )
}