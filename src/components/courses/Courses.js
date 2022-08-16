import React from "react";
import "./Courses.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="courses__section">
        <div className="courses__wrapper">
          <h1 className="courses__heading">COURSES</h1>
          <div className="courses__container">
            <Link to="/courses" className="courses__container-card">
              <div className="courses__container-cardInfo">
                <h4>Integrator NEET Course</h4>
                <p>
                  NEET or the National Eligibility cum Entrance Test is an
                  Indian Medical entrance examination. It is conducted for
                  students who wish to study any graduate medical course (MBBS),
                  dental course (BDS) or postgraduate course (MD ⁄ MS) in
                  government or private medical colleges in India.
                </p>
              </div>
            </Link>

            <Link to="/courses" className="courses__container-card">
              <div className="courses__container-cardInfo">
                <h4>Integrator NEET Course</h4>
                <p>
                  NEET or the National Eligibility cum Entrance Test is an
                  Indian Medical entrance examination. It is conducted for
                  students who wish to study any graduate medical course (MBBS),
                  dental course (BDS) or postgraduate course (MD ⁄ MS) in
                  government or private medical colleges in India.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Courses;
