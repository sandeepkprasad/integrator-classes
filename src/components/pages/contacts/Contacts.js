import React from "react";
import "./Contacts.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contact-page-title">
        <h1>Contact Us</h1>
      </div>
      <div className="contacts-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i>
                <FaMapMarkerAlt />
              </i>
              <div className="topic">Address</div>
              <div className="text-one">
                No. 02, Krupa Complex, Gangamma Circle,
              </div>
              <div className="text-two">
                Jalahalli East, Near AFS East Gate, Bangalore - 560097
              </div>
            </div>
            <div className="phone details">
              <i>
                <FaPhoneAlt />
              </i>
              <div className="topic">Phone</div>
              <div className="text-one">+91-7899056609</div>
              <div className="text-two">+91-9902925626</div>
            </div>
            <div className="email details">
              <i>
                <FaEnvelope />
              </i>
              <div className="topic">Email</div>
              <div className="text-one">integratorclasses@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any question or query please ask with us.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name"></input>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email"></input>
              </div>
              <div className="input-box message-box">
                <textarea
                  name="name"
                  rows="8"
                  cols="80"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Now"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
