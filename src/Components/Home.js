import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/_home.scss";
import verde from "../images/verde-bowls.jpg"
import ServiceBlock from "./ServiceBlock";
import allServices from '../Components/allServices';
import catering2 from '../images/catering-2resized.jpeg'
const Home = () => {
  return (
    <div id="container">
      <header></header>

      {/* <!-- Each image is 350px by 233px --> */}
      <div class="photobanner">
        <img
          class="first"
          src={verde}
          alt="placeholder"
        />
        <img
          src={catering2}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8210/28951305801_bfe7c0b346_z.jpg"
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />
        <img
          src={verde}
          alt="placeholder"
        />
        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />

        <img
          src={verde}
          alt="placeholder"
        />
      </div>
      <div className="home-description">
        <h1 className="about-title">La Jama d'Julieta</h1>
        <div className='about-text'>
        <p>
        La Jama d'Julieta is a catering service located in Spanish Fork, UT. We specialize in serving a variety of foods at events such as Weddings, Birthday Parties, Quinceñeras, Company Events, etc. Our goal is to provide you with the best quality dishes and with lots of options to choose from. We will ensure your catering needs are met!

         
        </p>
     
        </div>

        <button>
          <NavLink className="about-link" to="/about">About</NavLink>
        </button>

      </div>

      <div className="mid-section">
        <h2>Same-Week Availability. Real-time online booking. Variety of meal options. </h2>
        <a className='hire-link'
          href="https://juliescateringservice.appointlet.com/s/catering-service"
          target="_blank"
          rel="noreferrer"
        >
          <button className="schedule-button"> Hire for Event </button>
        </a>
      </div>

      <div className="home-services">
      <h1 className="service-title">Services</h1>
      <div className="service-row">
     {
       allServices.map((item)=>{
         return(
           <div className="service-block" key={item.id}>
            <div className="image-data">
              <img src={item.image}/>
              <span className="title">{item.title}</span>
</div>
           </div>
         )
       })
     }
      </div>
      <button>
          <NavLink className="service-link" to="/services">Services</NavLink>
        </button>
      </div>

      <div className="home-choose">
      <h1 className="choose-title">Why Choose Us? </h1>
      <p>
          Prepare for Pokem! Make it Ipsum! To protect the world from
          devastation! To unite all peoples within our nation! To denounce the
          evils of truth and love! To extend our reach to the stars above!
          Pokem! Ipsum! Pokem Ipsum, blast off at the speed of light! Surrender
          now or prepare to fight! Pokem Ipsum! That's right!
        </p>
      </div>
    </div>
  );
};
export default Home;
