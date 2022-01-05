import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/_home.scss";
//Imported images *****************************************//
import catering1 from '../images/catering1.jpg';
import catering2 from '../images/catering-2resized.jpeg'
import catering3 from '../images/Catering3.jpg';
import catering4 from '../images/catering4.jpg';
import catering5 from '../images/catering5.jpg';
import catering6 from '../images/catering6.jpg';
import catering7 from '../images/catering7.jpeg';
import catering8 from '../images/catering8.jpg';
import catering9 from '../images/catering9.jpg';
import catering10 from '../images/catering10.jpeg';
import catering11 from '../images/catering11.jpg';
import catering12 from '../images/catering12.jpg';
import catering13 from '../images/catering13.jpeg';
import catering14 from '../images/catering14.jpg';
import catering15 from '../images/catering15.jpg';
import catering16 from '../images/catering16.jpg';

// ********************************************************//
import allServices from '../Components/allServices';
const Home = () => {
  return (
    <div id="container">
      <header></header>

      {/* <!-- Each image is 350px by 233px --> */}
      <div class="photobanner">
        <img
          class="first"
          src={catering3}
          alt="placeholder"
        />
        <img
          src={catering2}
          alt="placeholder"
        />

        <img
          src={catering4}
          alt="placeholder"
        />

        <img
          src={catering5}
          alt="placeholder"
        />

        <img
          src={catering1}
          alt="placeholder"
        />

        <img
          src={catering6}
          alt="placeholder"
        />

        <img
          src={catering7}
          alt="placeholder"
        />

        <img
          src={catering8}
          alt="placeholder"
        />
        <img
          src={catering9}
          alt="placeholder"
        />
        <img
          src={catering10}
          alt="placeholder"
        />

        <img
          src={catering11}
          alt="placeholder"
        />

        <img
          src={catering12}
          alt="placeholder"
        />

        <img
          src={catering13}
          alt="placeholder"
        />

        <img
          src={catering14}
          alt="placeholder"
        />

        <img
          src={catering15}
          alt="placeholder"
        />

        <img
          src={catering16}
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
