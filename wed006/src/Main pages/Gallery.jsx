import React from "react";

import Galleryslide from "../Components/wed006-Galleryslide";
import Gallerygrid from "../Components/wed006-Gallerygrid";
import SlideNav from "../Components/wed006-Slidernav";
import Footer from "../Components/wed006-Footer";
import NavBar from "../Components/wed006-Navbar";
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
