import React, { useEffect, useState } from "react";
import flowerOutline from "../assets/rose-outline.png";
import overlayImage from "../assets/overlay.png"; // The overlay image
import "./wed006-Preloader.css";

const Preloader = () => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3); // Cycle through 3 dots
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="preloader">
      <div className="preloader">
        <div className="image-container">
          {/* Flower outline */}
          <img src={flowerOutline} alt="Loading" className="flower" />

          {/* Masking effect for overlay */}
          <div className="overlay-mask">
            <img src={overlayImage} alt="Overlay" className="overlay" />
          </div>
        </div>

        {/* Dots animation */}
        <div className="dots">
          <span className={`dot ${activeDot === 0 ? "active" : ""}`}></span>
          <span className={`dot ${activeDot === 1 ? "active" : ""}`}></span>
          <span className={`dot ${activeDot === 2 ? "active" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
