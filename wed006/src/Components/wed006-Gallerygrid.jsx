import React, { useState } from "react";
import "./wed006-Gallerygril.css";
import Bafkrounimg from "/src/assets/couple-bg.svg";
import ArrowBack from "../assets/schedule-section/arrow-back.svg";
import ArrowForward from "../assets/schedule-section/arrow-forwards.svg";

// Importing images
import img1 from "/src/assets/Groom.png";
import img2 from "/src/assets/Bride.png";
import img3 from "/src/assets/Groom.png";
import img4 from "/src/assets/Bride.png";
import img5 from "/src/assets/Groom.png";
import img6 from "/src/assets/Bride.png";
import img7 from "/src/assets/Groom.png";

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
    <div className="nombus-container">
      <div className="category-selector">
        <img
          src={Bafkrounimg}
          alt="Couple Background"
          style={{
            height: "10rem",
            backgroundColor: "#D87173",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <div className="button-scroll-container">
          <button className="scroll-arrow" onClick={scrollLeftCategories}>
            &lt;
          </button>
          <div className="button-container">
            {visibleCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setImageStartIndex(0); // Reset image index when category changes
                }}
                aria-label={`Show ${category}`}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="scroll-arrow" onClick={scrollRightCategories}>
            &gt;
          </button>
        </div>
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
      <div className="pages-details">
        {currentPage} of {totalPages}
      </div>
      <div className="navigations">
        <button className="scroll-arrow-down" onClick={scrollLeftImages}>
          <img src={ArrowBack} alt="Arrow Back" />
        </button>
        <button className="scroll-arrow-down" onClick={scrollRightImages}>
          <img src={ArrowForward} alt="Arrow Forward" />
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;
