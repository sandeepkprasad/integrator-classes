import React from "react";
import HeroSection from "../../hero/HeroSection";
import Slider from "../../slider/Slider";
import { SliderData } from "./SliderData";
import { homeObjOne } from "./Data";
import WhyUs from "../../why-us/WhyUs";
import Courses from "../../courses/Courses";
import AboutUs from "../../about-us/AboutUs";
import Testimonials from "../../testimonials/Testimonials";
import HomeBlog from "../../homeBlog/HomeBlog";

const Home = () => {
  return (
    <div>
      <Slider slides={SliderData} />
      <HeroSection {...homeObjOne} />
      <WhyUs />
      <Courses />
      <AboutUs />
      <Testimonials />
      <HomeBlog />
    </div>
  );
};

export default Home;
