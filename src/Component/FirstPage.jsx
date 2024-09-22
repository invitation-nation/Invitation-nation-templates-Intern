import React, { useEffect, useState } from 'react';
import cloudm1 from "../assets/hero-section/medium-cloud.svg";
import clouds from "../assets/hero-section/small-cloud.svg";
import backg from "../assets/hero-section/hero-background.svg";
import left from "../assets/hero-section/hero-decoration-left.svg";
import right from "../assets/hero-section/hero-decoration-right.svg";
import navigation from "../assets/hero-section/navigation.svg";
import house from "../assets/hero-section/hero-house.svg";
import spinner from '../assets/preloader/spinner.gif'; // Preloader GIF path

const FirstPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust loading time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Trigger animations when content is loaded
      const elementsToAnimate = [
        'hero-section',
        'hero-cloud-1',
        'hero-cloud-2',
        'hero-cloud-3',
        'hero-decoration-left',
        'hero-decoration-right',
        'hero-subtitle',
        'hero-info-box',
        'hero-img'
      ];

      elementsToAnimate.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('animate');
        }
      });
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div id="preloader" style={{ textAlign: 'center', padding: '50px' }}>
          <img src={spinner} alt="Loading..." />
        </div>
      ) : (
        <div id="content">
          <section id="hero-section">
            <div className="nimbus-container">
              <div className="hero-container">
                <div id="hero-cloud-1" className="hero-cloud-1">
                  <img src={cloudm1} alt="" />
                </div>
                <div id="hero-cloud-2" className="hero-cloud-2">
                  <img src={clouds} alt="" />
                </div>
                <div id="hero-cloud-3" className="hero-cloud-3">
                  <img src={cloudm1} alt="" />
                </div>
                <div className="hero-background-img">
                  <img src={backg} alt="" />
                </div>
                <div id="hero-decoration-left" className="hero-decoration-left">
                  <img src={left} alt="" />
                </div>
                <div id="hero-decoration-right" className="hero-decoration-right">
                  <img src={right} alt="" />
                </div>

                <h3 id="hero-subtitle" className="hero-subtitle">
                  Inviting you to the House warming of
                </h3>
                <div className='hero-title-prime'>
                
                  <h2 className="hero-title">Savi Nilaya</h2>
                <div id="hero-info-box" className="hero-info-box">
                  <span className="hero-day">Friday</span>
                  <span className="hero-date">November 08</span>
                  <span className="hero-time">11AM</span>
                  <a
                    href="https://www.google.com/maps/place/12%C2%B030'26.8%22N+76%C2%B057'20.5%22E/@12.5074444,76.9556944,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.5074444!4d76.9556944?entry=ttu"
                    className="hero-location"
                  >
                    <div className="nav-icon">
                      <img src={navigation} alt="" />
                    </div>
                  </a>
                </div>
                </div>

                <div id="hero-img" className="hero-img">
                  <img src={house} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
  };

export default FirstPage;
