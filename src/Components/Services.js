import React from "react";
import "../styles/_services.scss";
import catering1 from '../images/catering1.jpg'

const Services = () => {
  return (
    <div className="Services">
      <h1 className="service_title">Catering for Events</h1>
      <div className="service_description">
       <p>
       Prepare for Pokem! Make it Ipsum! To protect the world from devastation!
        To unite all peoples within our nation! To denounce the evils of truth
        and love! To extend our reach to the stars above! Pokem! Ipsum! Pokem
        Ipsum, blast off at the speed of light! Surrender now or prepare to
        fight! Pokem Ipsum! That's right!
       </p>
       <p>
       Prepare for Pokem! Make it Ipsum! To protect the world from devastation!
        To unite all peoples within our nation! To denounce the evils of truth
        and love! To extend our reach to the stars above! Pokem! Ipsum! Pokem
        Ipsum, blast off at the speed of light! Surrender now or prepare to
        fight! Pokem Ipsum! That's right!
       </p>
       <img src={catering1} alt = "dishes being displayed"/>
      </div>
      
    </div>
  );
};

export default Services;
