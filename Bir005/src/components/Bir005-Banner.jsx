import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import babupic from '../assets/img/Bir005-Banner/bannerimg.png';
import ballon from '../assets/img/Bir005-Banner/ballon.png';
import heartbutton from '../assets/img/Bir005-Banner/heartstar.png';
import cloud from '../assets/img/Bir005-Banner/cloudreveal.png';
import mobileflag from '../assets/img/Bir005-Banner/mobiletriflag.svg';
import triban from '../assets/img/Bir005-Banner/triban.svg';
import './Bir005-Banner.css'; // Assuming you have a CSS file for styles

function Bir005_Banner() {
    const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setAnimate(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <section
        id="bir005-banner"
        ref={sectionRef}
        className={animate ? 'animate' : ''}
      >
        <img className="bir005-lban" src={triban} alt="leftban" />
        <img className="bir005-rban" src={triban} alt="rightban" />
        <img className="bir005-mflag" src={mobileflag} alt="mobileflag" />
        <div className="nimbus-container">
          <div className="bir005-banner">
            <div className="bir005-banner-content">
              <div className="bir005-bannerpic">
                <img
                  id="bir005-leftballon"
                  className="bir005-ballon"
                  src={ballon}
                  alt=""
                />
                <img className="bir005-babypic" src={babupic} alt="" />
                <img
                  id="bir005-rightballon"
                  className="bir005-ballon"
                  src={ballon}
                  alt=""
                />
              </div>
              <div className="bir005-invite">
                <p id="bir005-join">Join us to celebrate</p>
                <h1>ETHAN&apos;S</h1>
                <h1>3RD BIRTHDAY</h1>
                <p id="bir005-invitedetails">
                  We are thrilled to invite you to join us in celebrating this
                  special occasion. Your presence will add joy and meaning to
                  our celebration, as we come together to create lasting
                  memories.
                </p>
                <Link to="/special">
                  <div className="bir005-mapbutton">
                    <span>SPECIAL HIGHLIGHTS</span>
                    <img
                      id="bir005-heartbuttn"
                      src={heartbutton}
                      alt="📍"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <img
              id="bir005-lcloud"
              className={`bir005-clouds ${animate ? 'animate-left' : ''}`}
              src={cloud}
              alt=""
            />
            <img
              id="bir005-rcloud"
              className={`bir005-clouds ${animate ? 'animate-right' : ''}`}
              src={cloud}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Bir005_Banner;