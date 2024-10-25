import React from "react";

import Galleryslide from "../Components/Galleryslide";
import Gallerygrid from "../Components/Gallerygrid";
import SlideNav from "../Components/Slidernav";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import Bafkrounimg from "/src/assets/couple-bg.svg";

export default function Gallerysection() {
  return (
    <div className="gallery-section">
      <div className="gallery-section-heading">
        <NavBar />
        <h1
          className="Gallery"
          style={{
            paddingTop: "12rem",
            textAlign: "center",
            fontFamily: "Style Script",
            fontSize: "5rem",
          }}
        >
          Gallery
        </h1>

        <img
          src={Bafkrounimg}
          alt=""
          style={{
            height: "10rem",
            backgroundColor: "#D87173",
            marginTop: "2rem",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Gallerygrid />
        <SlideNav />
        <Footer />
      </div>
    </div>
  );
}
