import React from "react";
import "./HomeBlog.css";
import Carousal from "react-elastic-carousel";
import BlogCard from "./BlogCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const HomeBlog = () => {
  return (
    <div className="blog__container">
      <div className="blog__heading">
        <h1>RECENT BLOGS</h1>
      </div>
      <div className="blog__wrapper">
        <div className="blog__container-carousel">
          <Carousal breakPoints={breakPoints}>
            <BlogCard
              image="images/blog/b1.webp"
              title="Blog One"
              blog="It has always given us the full support."
              date="22 July 2022"
            />

            <BlogCard
              image="images/blog/b2.webp"
              title="Blog Two"
              blog="Very good coaching class."
              date="22 July 2022"
            />

            <BlogCard
              image="images/blog/b3.webp"
              title="Blog Three"
              blog="(Daily Practice Paper) for various exams."
              date="22 July 2022"
            />

            <BlogCard
              image="images/blog/b4.webp"
              title="Blog Four"
              blog="Best for KV students."
              date="22 July 2022"
            />

            <BlogCard
              image="images/blog/b5.webp"
              title="Blog Five"
              blog="The question papers provided are amazing."
              date="22 July 2022"
            />

            <BlogCard
              image="images/blog/b6.webp"
              title="Blog Six"
              blog="Extreme papers provided are amazing."
              date="22 July 2022"
            />
          </Carousal>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
