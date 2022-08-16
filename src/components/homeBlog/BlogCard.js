import React from "react";
import "./BlogCard.css";

const Card = ({ image, title, blog, date }) => {
  return (
    <div className="blog__card-container">
      <div className="blog__image-container">
        <img src={image} alt="" />
      </div>
      <div className="blog__card-content">
        <div className="blog__card-title">
          <h2>{title}</h2>
        </div>
        <div className="blog__card-description">
          <p>{blog}</p>
        </div>
      </div>
      <div className="button">
        <button>
          <a href="/blogs">View More</a>
        </button>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
