import BrideGroom from "../Components/wed006-Bridegroom-section";
import Countdown from "../Components/wed006-Countersection";
import React from "react";
import Schedule from "../Components/wed006-Schedule";
import SlideNav from "../Components/wed006-Slidernav";
import Footer from "../Components/wed006-Footer";
import NavBar from "../Components/wed006-Navbar";
import HeroSection from "../Components/wed006-HeroSection";

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
