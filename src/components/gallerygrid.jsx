import React, { useState } from "react";
import "./Gallerygrid.css";
import ArrowBack from "../assets/img/hou003-Gallery/arrow-back.svg";
import ArrowForward from "../assets/img/hou003-Gallery/arrow-forwards.svg";
import Navbar from "./navbar.jsx";
import Facilities from "./ammenities.jsx";
import Invitation from "./invitationnation.jsx";

// Importing images
import img1 from "../assets/img/hou003-Gallery/gallery-image.svg";
import img2 from "../assets/img/hou003-Gallery/gallery-image.svg";
import img3 from "../assets/img/hou003-Gallery/gallery-image.svg";
import img4 from "../assets/img/hou003-Gallery/gallery-image.svg";
import img5 from "../assets/img/hou003-Gallery/gallery-image.svg";
import img6 from "../assets/img/hou003-Gallery/gallery-image.svg";
import img7 from "../assets/img/hou003-Gallery/gallery-image.svg";
import instruments from "../assets/img/hou003-Gallery/gallery-instruments.svg";
import leaves from "../assets/img/hou003-Events/hou003-events-leafs.svg"
import flowerbar3 from "../assets/img/hou003-WishesForm/hou003-wishesform-flowerbar.svg"
import flowerbar4 from "../assets/img/hou003-WishesForm/hou003-wishesform-flowerbar.svg"

const categorizedImages = {
  "Catalouge:1": [img1, img3, img5, img7, img3, img5, img7, img3, img5, img7],
  "Catalouge:2": [img2, img4, img6, img3, img5, img7, img3, img5, img7],
  "Catalouge:3": [img1, img2, img3, img3, img5, img7, img3, img5, img7],
  "Catalouge:4": [
    img4,
    img5,
    img6,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
  ],
  "Catalouge:5": [
    img4,
    img5,
    img6,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
    img3,
    img5,
    img7,
  ],
};

const ImageGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Catalouge:1");
  const [categoryStartIndex, setCategoryStartIndex] = useState(0);
  const [imageStartIndex, setImageStartIndex] = useState(0);

  const categories = Object.keys(categorizedImages);
  const visibleCategories = categories.slice(
    categoryStartIndex,
    categoryStartIndex + 3
  );
  const images = categorizedImages[selectedCategory];
  const visibleImages = images.slice(imageStartIndex, imageStartIndex + 6);

  // Calculate total pages in the selected category
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentPage = Math.floor(imageStartIndex / imagesPerPage) + 1;

  // Scroll functions for categories
  const scrollLeftCategories = () => {
    if (categoryStartIndex > 0) {
      setCategoryStartIndex(categoryStartIndex - 1);
      setImageStartIndex(0); // Reset image index when category changes
    }
  };

  const scrollRightCategories = () => {
    if (categoryStartIndex + 3 < categories.length) {
      setCategoryStartIndex(categoryStartIndex + 1);
      setImageStartIndex(0); // Reset image index when category changes
    }
  };

  // Scroll functions for images
  const scrollLeftImages = () => {
    if (imageStartIndex > 0) {
      setImageStartIndex(imageStartIndex - imagesPerPage);
    }
  };

  const scrollRightImages = () => {
    if (imageStartIndex + imagesPerPage < images.length) {
      setImageStartIndex(imageStartIndex + imagesPerPage);
    }
  };

  return (
    <>
      <section id="hou003-Gallery">
      <Navbar/>
    <div className="nimbus-container">
      <div className='hou003-gallery-leavesdiv'>
        <img src= {leaves} alt="leaves-hanging" className='hou003-gallery-leaves' />
      </div>
        <div style={{textAlign: "right"}}>
            <img src={instruments} alt="instrument-players" className="hou003-Gallery-instruments"/>
        </div>
        <div className="hou003-gallery-text">
          <h4>Precious Moments</h4>
        </div>
        <div className="image-grid">
        {visibleImages.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={index % 2 === 0 ? "large-image" : "small-image"}
            />
          </div>
        ))}
      </div>
      
      <div className="navigations">
        <button className="scroll-arrow-down" onClick={scrollLeftImages}>
          <img src={ArrowBack} alt="Arrow Back" />
        </button>
        <div className="pages-details">
            {currentPage} of {totalPages}
        </div>
        <button className="scroll-arrow-down" onClick={scrollRightImages}>
          <img src={ArrowForward} alt="Arrow Forward" />
        </button>
      </div>
    </div>
    <div className="hou003-wishesform-endflowers">
      <img src= {flowerbar3} alt="flowerbar-firsthalf" />
      <img src= {flowerbar4} alt="flowerbar-secondhalf" />
    </div>
    <Facilities/>
    <Invitation/>
    </section>
    </>
  );
};

export default ImageGrid;