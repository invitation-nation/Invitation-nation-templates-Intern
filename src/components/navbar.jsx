import React, { useState } from 'react';
import '../components/navbar.css';
import navmob from '../assets/img/hou003-Navbar/navbar-mobile.svg';
import houseAnime from '../assets/img/hou003-Navbar/navbar-houseAnime.mp4';
import Gallery from "../components/gallerygrid.jsx"

function NavBar() {
  const [loading, setLoading] = useState(false);

  const handleGalleryClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // Function to scroll to and open the mobile navbar
  const handleNavMobClick = () => {
    const mobileNavSection = document.getElementById('hou003-mobilenavbar');

    if (mobileNavSection) {
      console.log("Scrolling to mobile navbar..."); // Debugging log
      mobileNavSection.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        if (window.toggleMobileNav) {
          console.log("Opening mobile navbar..."); // Debugging log
          window.toggleMobileNav(); // Open the navbar
        } else {
          console.error("toggleMobileNav is undefined");
        }
      }, 500); // Delay ensures section is in view before opening
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#hou003-Hero">Home</a></li>
          <li><a href="Gallery" onClick={handleGalleryClick}>Gallery</a></li>
          <li><a href="#hou003-Events">Schedule</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div id="mobnav">
          <img 
            src={navmob} 
            alt="slider-icon" 
            onClick={handleNavMobClick} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
      </nav>

      {loading && (
        <div className="preloader">
          <img src={houseAnime} alt="Loading..." />
        </div>
      )}
    </>
  );
}

export default NavBar;
