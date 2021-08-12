import React from "react";
import '../styles/_navbar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
  return (
    <div className="NavBar">
      <nav className="nav">
          <button className="schedule-button">
            <a 
              href="https://juliescateringservice.appointlet.com/s/catering-service" target="_blank" rel='noreferrer'>
              Hire for Event
            </a>
          </button>
          <a href="https://www.instagram.com/lajamadjulieta/" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className="icon_ig" />
          </a>
      </nav>
    </div>
  );
};

export default Navbar;
