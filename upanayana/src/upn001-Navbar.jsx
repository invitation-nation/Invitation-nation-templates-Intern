import React, { useEffect, useState } from 'react';
import './upn001-Navbar.css';
import decoration from './assets/upn001-hero-section/hero-bg-decoration.svg';
import herobg from './assets/upn001-hero-section/hero-bg.svg';
import om from './assets/upn001-hero-section/om-img.svg';
import hero from './assets/upn001-hero-section/hero-img.svg';
import hbd from './assets/upn001-hero-section/hero-bottom-decoration.svg';

function Navbar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after delay
    }, 2000); // Adjust the delay as needed

    // Cleanup the timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div id="preloader">
          {/* Preloader content */}
          <div className="spinner">Loading...</div>
        </div>
      )}

      {!loading && (
        <div id="content">
          <section id="hero-section">
          <div className="hero-background-decoration">
                  <img src={decoration} alt="Background Decoration" />
                </div>
            <div className="nimbus-container">
              <div className="hero-container">
               
                <div className="hero-bg-img">
                  <img src={herobg} alt="Hero Background" />
                </div>
                <div className="hero-text-box">
                  <div className="hero-text-box-img">
                    <img src={om} alt="Om Image" />
                  </div>
                  <span>Amogha’s</span>
                  <h2>UPANAYANA</h2>
                  <div className="hero-img">
                    <img src={hero} alt="Hero Image" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="hero-bottom-decoration">
                  <img src={hbd} alt="Bottom Decoration" />
                </div>
          </section>
          
        </div>
      )}
    </>
  );
}

export default Navbar;


