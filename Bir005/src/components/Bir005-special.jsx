import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mobnav from './Bir005-mobilenavbar';
import PhotoGallery from './Bir005-Photogallery';
import Footer from './Bir005-Footer';
import Preloader from './Bir005-Preloader';
import '../App.css'
import './Bir005-special.css'

function Bir005_special() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed to match the preloader animation duration

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <section id='bir005-special'>
        <Mobnav />
        <div className="bir005-navbars">
          <Link to="/">Home</Link>
          <a href="#bir005-banner">About</a>
          <a href="#bir005-Gallery">Gallery</a>
          <a href="#bir005-activity">Schedule</a>
        </div>
        <PhotoGallery />
        <Footer />
      </section>
    </>
  );
}

export default Bir005_special;