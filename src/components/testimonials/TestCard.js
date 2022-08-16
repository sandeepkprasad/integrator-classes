import React from "react";
import "./TestCard.css";

const TestCard = ({ image, title, description }) => {
  return (
    <div className="test__card-container">
      <div className="test__image-container">
        <img src={image} alt="" />
      </div>
      <div className="test__card-content">
        <div className="test__card-title">
          <h2>{title}</h2>
        </div>
        <div className="test__card-description">
          <p>
            <q>{description}</q>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
