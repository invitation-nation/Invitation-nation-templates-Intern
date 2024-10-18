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
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div id="upn001-preloader">
          
          <div className="spinner">Loading...</div>
        </div>
      )}

      {!loading && (
        <div id="upn001-content">
          <section id="hero-section">
          <div className="upn001-hero-background-decoration">
                  <img src={decoration} alt="Background Decoration" />
                </div>
            <div className="upn001-nimbus-container">
              <div className="upn001-hero-container">
               
                <div className="upn001-hero-bg-img">
                  <img src={herobg} alt="Hero Background" />
                </div>
                <div className="upn001-hero-text-box">
                  <div className="upn001-hero-text-box-img">
                    <img src={om} alt="Om Image" />
                  </div>
                  <span>Amogha’s</span>
                  <h2>UPANAYANA</h2>
                  <div className="upn001-hero-img">
                    <img src={hero} alt="Hero Image" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="upn001-hero-bottom-decoration">
                  <img src={hbd} alt="Bottom Decoration" />
                </div>
          </section>
          
        </div>
      )}
    </>
  );
}

export default Navbar;


