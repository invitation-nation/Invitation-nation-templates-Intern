import React, { useState, useEffect } from 'react';
import './wed007-count.css'
import underline from './assets/img/wed007-countdown/underline.svg'
import leaf from './assets/img/wed007-countdown/leaf-right.svg'
import bg from './assets/img/wed007-countdown/bac.svg'
function Wed007_count() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [countdownTo, setCountdownTo] = useState(new Date("Dec 10, 2024 12:00:00").getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const curTime = new Date().getTime();
      const timeDiff = countdownTo - curTime;
      if (timeDiff < 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMins(0);
        setSecs(0);
      } else {
        setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMins(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
        setSecs(Math.floor((timeDiff % (1000 * 60)) / 1000));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTo]);

  return (
    
      
      <section id="wed007-count-down-section">
      
        <div className="nimbus-container">
        <div id="content">
        <img id='wed007-under' src={bg} alt="" />
          <div className="wed007-count-down-container">
          
            <div className="wed007-count-down-title">Officially Husband and Wife in</div>
            <img id='wed007-underline' src={underline} alt="" />
            <div className="wed007-count-down-elements">
              <div className="wed007-count-down-element">
               
                <span className="wed007-count-down-number"> {days}   </span>
                <span className="wed007-count-down-text">Days</span>
              </div>
              <span className='wed007-break'>|</span>
              <div className="wed007-count-down-element">
             
                <span className="wed007-count-down-number"> {hours} </span>
                <span className="wed007-count-down-text">Hours</span>
              </div>
              <span className='wed007-break'>|</span>
              <div className="wed007-count-down-element">
              
                <span className="wed007-count-down-number"> {mins}   </span>
                <span className="wed007-count-down-text">Mins</span>
              </div>
              <span className='wed007-break'>|</span>
              <div className="wed007-count-down-element">
              
                <span className="wed007-count-down-number"> {secs} </span>
                <span className="wed007-count-down-text">Secs</span>
              </div>
              
            </div>
          
          </div>
          <img id='wed007-leaf' src={leaf} alt="" />
        </div>
        </div>

      </section>
  );
}

export default Wed007_count