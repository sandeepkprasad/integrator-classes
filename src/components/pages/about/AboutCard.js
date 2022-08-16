import React from "react";
import "./AboutCard.css";

const AboutCard = ({ image, title, position, description }) => {
  return (
    <div className="msg__card-container">
      <div className="msg__image-container">
        <img src={image} alt="" />
      </div>
      <div className="msg__card-content">
        <div className="msg__card-title">
          <h2>{title}</h2>
        </div>
        <div className="msg__card-position">
          <h3>{position}</h3>
        </div>
        <div className="msg__card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
