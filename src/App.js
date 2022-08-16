import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Banner from "./components/banner/Banner";
import Gallery from "./components/pages/gallery/Gallery";
import Footer from "./components/pages/footer/Footer";
import About from "./components/pages/about/About";
import Contacts from "./components/pages/contacts/Contacts";
import Apply from "./components/apply/Apply";

const App = () => {
  return (
    <div>
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/contacts" exact element={<Contacts />} />
          <Route path="/apply" exact element={<Apply />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
