import React from 'react';
import { Link } from 'react-scroll';
import icon from '../assets/icon.png';


const NavBar = () =>{
    return (
        <nav className="NavBar">
          <div className="logoContainer">
                <img src={icon} className="icon" alt="Icon" />
                <span className="title">My Portfolio</span>
            </div>
            <div className="desktopMenu">
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListItem">About Me</Link>
                <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListItem">Projects</Link>
            </div>
        </nav>
    )
}

export default NavBar

