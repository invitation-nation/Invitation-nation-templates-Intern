import React from 'react'
import './Bir004-Countdown.css';
import countline from '../assets/img/Bir004-Countdown/countdownline.svg';
import birthdaygirl from '../assets/img/Bir004-Countdown/Aboutimage.png';
function Bir004_Countdown() {
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
                    <h1>Meet the Birthday Girl</h1>
                </div>
                <div className="bir004-aboutdetails">
                    <div id='image' className="bir004-bgirlimage">
                        <img src={birthdaygirl} alt="" />   
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
                     </div>
                </div>
            </div>
        </div>
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