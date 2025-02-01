import React from "react";

import Galleryslide from "../Components/wed006-Galleryslide";
import Gallerygrid from "../Components/wed006-Gallerygrid";
import SlideNav from "../Components/wed006-Slidernav";
import Footer from "../Components/wed006-Footer";
import NavBar from "../Components/wed006-Navbar";
import gallerybg from "../assets/Gellary_bg.jpg";
import "../Components/wed006-Gallerygril.css";
export default function Gallerysection() {
  return (
    <div className="gallery-section">
      <div className="gallery-section-heading">
        <NavBar />
        <div className="gallery-bg">
          <img src={gallerybg} alt="" />
        </div>
        <Gallerygrid />
        <SlideNav />
        <Footer />
      </div>
    </div>
  );
}
