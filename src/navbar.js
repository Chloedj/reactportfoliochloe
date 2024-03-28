import React from 'react';
import './navbar.css';
import Logo from './images/Logo.png';

function Navbar() {
  return (
    <header>
     <nav className="navbar">
          <a href="https://mellifluous-druid-467b57.netlify.app/" className="logo">
            <img src={Logo} alt="Chloe Duggan-Jones Logo" />
          </a>
          <div className="navLinks">
            <a href="#about-me">About Me</a>
            <a href="#projects">My Projects</a>
          </div>
        </nav>
    </header>
  );
}

export default Navbar;

