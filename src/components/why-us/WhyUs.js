import React from "react";
import "./WhyUs.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const WhyUs = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="whyus__section">
        <div className="whyus__wrapper">
          <h1 className="whyus__heading">WHY US</h1>
          <div className="whyus__container">
            <Link to="/" className="whyus__container-card">
              <div className="whyus__container-cardInfo">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                    alt=""
                  />
                </div>
                <h4>
                  <CountUp end={3000} duration={3} />
                </h4>
                <h3>Success Stories</h3>
              </div>
            </Link>
            <Link to="/" className="whyus__container-card">
              <div className="whyus__container-cardInfo">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/ios/80/ffffff/athlete.png"
                    alt=""
                  />
                </div>
                <h4>
                  <CountUp end={320} duration={3} />
                </h4>
                <h3>Trusted Tutors</h3>
              </div>
            </Link>
            <Link to="/" className="whyus__container-card">
              <div className="whyus__container-cardInfo">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png"
                    alt=""
                  />
                </div>
                <h4>
                  <CountUp end={1000} duration={3} />
                </h4>
                <h3>Schedules</h3>
              </div>
            </Link>
            <Link to="/" className="whyus__container-card">
              <div className="whyus__container-cardInfo">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png"
                    alt=""
                  />
                </div>
                <h4>100%</h4>
                <h3>Rank Percentage</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default WhyUs;
