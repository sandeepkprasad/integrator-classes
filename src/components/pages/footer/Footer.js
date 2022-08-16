import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="social">
        <a href="/">
          <FaFacebookF />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/hostel">Hostel</a>
        </li>
        <li>
          <a href="/apply">Apply Now</a>
        </li>
      </ul>
      <p className="copyright">
        INTEGRATOR CLASSES | Developed by RCS Technology
      </p>
    </section>
  );
};

export default Footer;
