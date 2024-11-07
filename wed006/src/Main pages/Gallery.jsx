import React from "react";

import Galleryslide from "../Components/Galleryslide";
import Gallerygrid from "../Components/Gallerygrid";
import SlideNav from "../Components/Slidernav";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import gallerybg from "../assets/Gellary_bg.jpg";

export default function Gallerysection() {
  return (
    <div className="gallery-section">
      <div className="gallery-section-heading">
        <NavBar />
        <div
          classname="gallery-bg"
          style={{
            backgroundImage: `url(${gallerybg})`,
            backgroundSize: "cover",
            backgroundPosition: "center -20rem",
            height: "85vh",
            
          }}
        ></div>
        <Gallerygrid />
        <SlideNav />
        <Footer />
      </div>
    </div>
  );
}
