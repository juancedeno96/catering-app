import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/_home.scss";

const Home = () => {
  return (
    <div id="container">
      <header></header>

      {/* <!-- Each image is 350px by 233px --> */}
      <div class="photobanner">
        <img
          class="first"
          src="https://c2.staticflickr.com/9/8454/28951308921_6589e3f1d3_z.jpg"
          alt="placeholder"
        />
        <img
          src="https://c3.staticflickr.com/9/8716/28407134794_bef4e3b216_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8334/28951307401_d8a7c852e9_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c1.staticflickr.com/9/8190/28407132824_fdf7bfe154_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8210/28951305801_bfe7c0b346_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c1.staticflickr.com/9/8716/28407131024_91c2626d3c_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8592/28951304321_a01fb808fb_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c1.staticflickr.com/9/8869/28407129424_54ea0f3d5a_z.jpg"
          alt="placeholder"
        />
        <img
          src="https://c2.staticflickr.com/9/8454/28951308921_6589e3f1d3_z.jpg"
          alt="placeholder"
        />
        <img
          src="https://c3.staticflickr.com/9/8716/28407134794_bef4e3b216_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8334/28951307401_d8a7c852e9_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c1.staticflickr.com/9/8190/28407132824_fdf7bfe154_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8210/28951305801_bfe7c0b346_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c1.staticflickr.com/9/8716/28407131024_91c2626d3c_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c2.staticflickr.com/9/8592/28951304321_a01fb808fb_z.jpg"
          alt="placeholder"
        />

        <img
          src="https://c1.staticflickr.com/9/8869/28407129424_54ea0f3d5a_z.jpg"
          alt="placeholder"
        />
      </div>
      <div className="home-description">
        <h1 className="about-title">La Jama d'Julieta</h1>
        <p>
          Prepare for Pokem! Make it Ipsum! To protect the world from
          devastation! To unite all peoples within our nation! To denounce the
          evils of truth and love! To extend our reach to the stars above!
          Pokem! Ipsum! Pokem Ipsum, blast off at the speed of light! Surrender
          now or prepare to fight! Pokem Ipsum! That's right!
        </p>

        <button>
          <NavLink to="/about">About</NavLink>
        </button>

      </div>

      <div className="home-services">
      <h1 className="service-title">Services</h1>
      <p>
          Prepare for Pokem! Make it Ipsum! To protect the world from
          devastation! To unite all peoples within our nation! To denounce the
          evils of truth and love! To extend our reach to the stars above!
          Pokem! Ipsum! Pokem Ipsum, blast off at the speed of light! Surrender
          now or prepare to fight! Pokem Ipsum! That's right!
        </p>

      </div>
      <div className="home-choose">
      <h1 className="choose-title">Services</h1>
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
