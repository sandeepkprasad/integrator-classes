import React from "react";
import Carousal from "react-elastic-carousel";
import TestCard from "./TestCard";
import "./Testimonials.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Testimonials = () => {
  return (
    <div className="test__container">
      <div className="test__heading">
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="test__wrapper">
        <div className="test__container-carousel">
          <Carousal breakPoints={breakPoints}>
            <TestCard
              image="images/testimonials/t1.webp"
              title="Devesh Singh"
              description="This institution has been the best preparing us for the comparative exams. It has always given us the full support."
            />
            <TestCard
              image="images/testimonials/t2.webp"
              title="Bardhan NV"
              description="Very good coaching class. I highly recommend for medical and engineering entrance aspirants. Faculty is very dependable and professional."
            />
            <TestCard
              image="images/testimonials/t3.webp"
              title="Revanth P"
              description="Integrator Classes have excellent faculty & results. They have excellent plans of conducting DPP (Daily Practice Paper) for various exams."
            />
            <TestCard
              image="images/testimonials/t4.webp"
              title="Shubham Vats"
              description="Excellent teachers helped me a lot to cover everything in a single year , speed + concepts. Best for KV students."
            />
            <TestCard
              image="images/testimonials/t5.webp"
              title="Anjali Singh"
              description="Extremely well maintained classes for amazing output results. The facilities are amazing and the materials and question papers provided are amazing."
            />
          </Carousal>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
