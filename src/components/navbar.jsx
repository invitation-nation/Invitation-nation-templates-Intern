import React, { useState } from 'react';
import '../components/navbar.css';
import navmob from '../assets/img/hou003-Navbar/navbar-mobile.svg'
import houseAnime from '../assets/img/hou003-Navbar/navbar-houseAnime.mp4';
function NavBar() {
  const [loading, setLoading] = useState(false);

  const handleGalleryClick = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
    }, 3000); 
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#" onClick={handleGalleryClick}>Gallery</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div id='mobnav'>
        <img src={navmob} alt=""/>
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
