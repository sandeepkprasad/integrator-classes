import React from "react";
import "./AboutUs.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="aboutus__section">
        <div className="aboutus__wrapper">
          <h1 className="aboutus__heading">ABOUT US</h1>
          <p className="aboutus__description">
            At INTEGRATOR CLASSES Medical coaching Institute in Bangalore, we
            offer methodical NEET coaching and a healthy competitive atmosphere
            to the pre-medical aspirants through our excellent curriculum and
            adequate learning facilities.
          </p>
          <div className="aboutus__container">
            <Link to="/" className="aboutus__container-card">
              <div className="aboutus__container-cardInfo">
                <h4>Doubt Clearing Sessions</h4>
                <p>
                  After a topic completion, we conduct Doubt Removal sessions
                  for that topic helping our students learn better.
                </p>
              </div>
            </Link>
            <Link to="/" className="aboutus__container-card">
              <div className="aboutus__container-cardInfo">
                <h4>Knowledge Centric</h4>
                <p>
                  We follow a knowledge centric approach in our institution, so
                  that our students are well prepared for all the exams.
                </p>
              </div>
            </Link>
          </div>
          <div className="aboutus__container">
            <Link to="/" className="aboutus__container-card">
              <div className="aboutus__container-cardInfo">
                <h4>Active Learning</h4>
                <p>
                  We make our learning process fun so that it helps our students
                  to learn in best possible way.
                </p>
              </div>
            </Link>
            <Link to="/" className="aboutus__container-card">
              <div className="aboutus__container-cardInfo">
                <h4>Systematic Theory</h4>
                <p>
                  Students require a very systematic preparation and we build
                  their fundamentals, as well as their ability
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default AboutUs;
