import React, { useRef,useEffect } from 'react';
import './Bir004-Countdown.css';
import { Link } from 'react-router-dom';
import countline from '../assets/img/Bir004-Countdown/countdownline.svg';
import birthdaygirl from '../assets/img/Bir004-Countdown/Aboutimage.png';
import aboutbg1 from '../assets/img/Bir004-Countdown/aboutbg1.svg';
import aboutbg2 from '../assets/img/Bir004-Countdown/aboutbg2.svg';
import topleft from '../assets/img/Bir004-Countdown/about-ballon-topleft.svg';
import bottomleft from '../assets/img/Bir004-Countdown/about-circle-bottomleft.svg';
import bottomright from '../assets/img/Bir004-Countdown/aboutcircle-bottomright.svg';
import rightmid from '../assets/img/Bir004-Countdown/aboutcirlcle1-rightmid.svg';
function Bir004_Countdown() {
    const aboutDetailsRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    if (aboutDetailsRef.current && bgImageRef.current) {
      const { offsetWidth, offsetHeight } = aboutDetailsRef.current;
      bgImageRef.current.style.width = `${offsetWidth}px`;
      bgImageRef.current.style.height = `${offsetHeight}px`;
    }
  }, []);
        useEffect(() => {
            const handleScroll = () => {
                if (window.innerWidth < 650) {
                    const aboutDetails = document.querySelector('.bir004-aboutdetails');
                    const rect = aboutDetails.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    if (rect.top < windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                        setTimeout(() => {
                            aboutDetails.classList.add('scrolled');
                        }, 2000); // 2 seconds delay
                    } else {
                        aboutDetails.classList.remove('scrolled');
                    }
                }
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
  return (
    <>
    <section id="bir004-countdown">
        <div className="nimbus-container">
            <div className="bir004-countdown-header">
                <h1>Count Every Second Untill The Event</h1>
                <img src={countline} alt="countline"/>
            </div>
            <div className="bir004-counting">
                <div className="bir004-count-item">
                    <div className="bir004-countnum">
                        <h1>00</h1>
                    </div>
                    <div className="bir004-countq">
                        DAYS
                    </div>
                </div>
                <div className="bir004-count-item">
                    <div className="bir004-countnum">
                        <h1>00</h1>
                    </div>
                    <div className="bir004-countq">
                        HOURS
                    </div>
                </div>
                <div className="bir004-count-item">
                    <div className="bir004-countnum">
                        <h1>00</h1>
                    </div>
                    <div className="bir004-countq">
                        MINUTES
                    </div>
                </div>
                <div className="bir004-count-item">
                    <div className="bir004-countnum">
                        <h1>00</h1>
                    </div>
                    <div className="bir004-countq">
                        SECONDS
                    </div>
                </div>
            </div>
            <div className="bir004-about">
                <div className="bir004-aboutheading">
                    <h1 id="bir004-about-headingmobile">About Jenny</h1>
                    <h1 id='bir004-about-headingpc'>Meet the Birthday Girl</h1>
                </div>
                <div className="bir004-aboutdetails">
                    <div id='image' className="bir004-bgirlimage">
                        <img src={birthdaygirl} alt="" />
                        <div id='bir004-bgirlimage-bg'>
                        </div> 

                    </div>
                    <div className="bir004-details">
                       <div className="bir004-bghead">
                            <span id='bir004-details-head'>Jenny's </span>
                            <span id='bir004-details-highlight'>25th </span>
                            <span id='bir004-details-head'>Birthday</span>
                       </div>
                        <p>Join us as we celebrate a fabulous 25 years
                        of sparkle and joy! Let's make this milestone birthday unforgettable with laughter, love, 
                        and plenty of fun. Your presence will make the day truly special!
                        </p>
                        <Link to='/milestone' className="bir004-about-highlightbutton">
                            <span>HIGHLIGHTS</span>
                        </Link>
                     </div>
                </div>
            </div>
        </div>
        <img id='bir004-topleft' src={topleft} alt="" />
        <img id='bir004-bottomleft' src={bottomleft} alt="" />
        <img id='bir004-bottomright' src={bottomright} alt="" />
        <img id='bir004-rightmid' src={rightmid} alt="" />
    </section>
    </>
  )
}

export default Bir004_Countdown

{/* <div id='stick1' className="bir004-sticks"></div>
                    <div id='stick2' className="bir004-sticks"></div>
                    <div id='stick3' className="bir004-sticks"></div>
                    <div id='stick4' className="bir004-sticks"></div>
                    <div id='stick5' className="bir004-sticks"></div>
                    <div id='stick6' className="bir004-sticks"></div>
                    <div id='stick7' className="bir004-sticks"></div>
                    <div id='stick8' className="bir004-sticks"></div>
                    <div id='stick9' className="bir004-sticks"></div> */}