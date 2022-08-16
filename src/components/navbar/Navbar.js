import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../button/Button";
import { IconContext } from "react-icons/lib";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} alt="logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/courses"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/team"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hostel"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Hostel
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contacts"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/apply" className="btn-link">
                    <Button buttonStyle="btn--primary" buttonColor="primary">
                      Enroll Now
                    </Button>
                  </Link>
                ) : (
                  <Link to="/apply" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Enroll Now
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
