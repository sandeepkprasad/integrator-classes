import React from "react";
import "./About.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="about__section">
        <div className="about__wrapper">
          <h1 className="about__heading">ABOUT US</h1>
          <p className="about__description">
            We prepare students to crack Engineering and Medical entrance exams
            like KVPY, IIT–JEE and NEET. We are committed to the success of our
            students. We offer CBSE integrated curriculum. Our teaching
            techniques are related to distinctive entrance patterns which are
            designed for cracking IIT–JEE (Mains & Advanced), NEET, KVPY etc. We
            support and foster our students. We ensure that the visions of our
            students get strong wings to fly. At our institute, we believe in
            unifying the individual strength of each of our students towards
            their success.
          </p>
          <p className="about__description">
            We are one of the best coaching centers for NEET in Bangalore. We
            provide special coaching classes for Pre Medical Tests Exams for
            NEET repeaters and dropouts. InteGrator Classes – PMT ensures that
            only the best Available Faculty members with long teaching
            experience and special exposure in Pre Medical, PMT, NEET, CET
            MEDICAL, AIIMS, AFMC competitions and holding experience of
            prestigious institutions with a commitment towards students welfare.
            After undergoing a reorientation programme at Integrator Classes
            start teaching the students. Integrator takes great pains in
            selecting the faculty and ensures their stability on a long term
            basis so that students will get the best guidance in PRE MEDICAL
            Coaching Bangalore. InteGrator Classes also provide PRE Medical
            Crash Course Coaching in Bangalore.
          </p>
          <p className="about__description">
            At INTEGRATOR CLASSES Medical coaching Institute in Bangalore, we
            offer methodical NEET, AIIMS & JIPMER coaching and a healthy
            competitive atmosphere to the pre-medical aspirants through our
            excellent curriculum and adequate learning facilities.
          </p>
          <p className="about__description">
            The INTEGRATOR CLASSES Tuition Classes in Bangalore has been set up
            with the objective of preparing school children for their school
            tests and exams with tough competitive examinations like IIT-JEE/
            KCET/ NEET in the future. Our focus is on building high concepts and
            shaping minds.
          </p>
          <p className="about__description">
            We also offer PUC tuitions in Bangalore for science and commerce
            students as well. We cover all class XI (1st PUC) 11th & XII (2nd
            PUC) 12th Science subjects like – Mathematics, Physics, Chemistry,
            Biology, PCMB, PCMC, PCME, etc.
          </p>
          <div className="about__container">
            <Link to="/about" className="about__container-card">
              <div className="about__container-cardInfo">
                <h4>Vision</h4>
                <p>
                  Our vision is to create an incomparable system of teaching
                  accessible to all. It is our dream to be the best educational
                  institution delivering success with cutting–edge technologies
                  through exceptionally designed structure and methodologies.
                </p>
              </div>
            </Link>
            <Link to="/about" className="about__container-card">
              <div className="about__container-cardInfo">
                <h4>Mission</h4>
                <p>
                  Our mission is to educate students to succeed in their careers
                  and prepare them for a lifetime of learning and achieve the
                  skills needed to become industry leaders in their field of
                  interest. Our aim is to impart the highest quality of
                  education to mould the leaders, pioneers and inventors of
                  tomorrow.
                </p>
              </div>
            </Link>
          </div>
          <div className="about__container-message">
            <div className="about__message-card">
              <AboutCard
                image="images/founder.jpg"
                title="Er. Praveen Kumar"
                position="Director"
                description="I would like to take this opportunity to thank you all for trusting our institute with your preparation of 
            various IIT–JEE entrance examinations. In this era of proliferation and relaxation, there are many challenges. 
            The competition is getting tougher day on day, and this is why, the energetic academia of various inputs from 
            exponential material to rational methodology, from ideological motivation to maverick adventurism cannot be ignored. 
            At our institute, knowledgeable and skilled faculty resources are drawn in to deliver courses, infrastructure 
            and the required software is in place and linkages with industry are established. We assure you that we will 
            continue to identify the successful & latent strength in you thus flowering the dormant genius in you."
              />
            </div>
            <div className="about__message-card">
              <AboutCard
                image="images/cofounder.jpg"
                title="Er. Deepak Kumar  Agrawal"
                position="Co-Founder"
                description="The extra one percent is the mile that we are willing to go, to make the journey worthy of its destination. We were founded with the aim to provide quality and innovative services in today’s era of commercialized education. We have been at the forefront of basic learning from day one, so as to make sure that the basic fundamentals of our students are strong. We motivate our students to excel in terms of thought, ideology, and performance. To achieve this, my team and I work with structured determination and selfless dedication. Our institute has evolved to reach and hold a unique position of pride amongst all its peers. With such an objective we shall continue achieving the heights of success."
              />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default About;
