import React, { useState } from "react";
import "../styles/_navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import logo from '../images/jdj-logo.jpeg';
import menu from '../images/menu.svg';


const Navbar = () => {
  const [dropView, setDropView] = useState(false)

  const toggleDropdown = () => {
    setDropView(!dropView)
  }

  return (
    <nav className="NavBar">
      <nav className="nav">
        <a className='hire-link'
          href="https://juliescateringservice.appointlet.com/s/catering-service"
          target="_blank"
          rel="noreferrer"
        >
          <button className="schedule-button"> Hire for Event </button>
        </a>

        <a
          href="https://www.instagram.com/lajamadjulieta/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon_ig" />
        </a>
      </nav>
      <nav className="lower-nav">
      <img src={logo} alt='jama d`julieta'/>
                <span className="company-name"><NavLink to='/' className='link'>
                  
                  La Jama d'Julieta</NavLink></span>
                <div className="nav-links">
                <span><NavLink to='/' className='link'>Home</NavLink></span>
                <span><NavLink to='/services' className='link'>Services</NavLink></span>
                <span><NavLink to='/about' className='link'>About</NavLink></span>
                <span><NavLink to='/contact' className='link'>Contact</NavLink></span>
                </div>

                <span className="dropdown-btn"  onClick={toggleDropdown}><img src={menu} alt='menu button'/></span>
                {dropView ? (
        <nav className='mobile-menu'>
        Hello
        </nav>
        
         ): null }
                
            </nav>
    </nav>
  );
};

export default Navbar;
