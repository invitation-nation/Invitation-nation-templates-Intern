import BrideGroom from "../Components/Bridegroom-section";
import Countdown from "../Components/Countersection";
import React from "react";
import Schedule from "../Components/Schedule";
import SlideNav from "../Components/Slidernav";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

const Homepage = () => {
  return (
    <div className="main-homepage-container">
      <NavBar />
      <HeroSection />
      <Countdown />
      <BrideGroom />
      <Schedule />
      <SlideNav />
      <Footer />
    </div>
  );
};

export default Homepage;
