import React, { useState, useEffect } from 'react';
import '../components/countdown.css';
import '../App.css'

function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-01-25T00:00:00');  // Set the event date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section id='hou003-Countdown'>
      <div className='nimbus-container'>
        <div className="hou003-countdown">
          <h1>Event Starts In</h1>
          <div className="hou003-timer">
            <div className="hou003-time-unit">
              <div className='hou003-time-left'>{timeLeft.days || '0'}</div>
              <span>Days</span> 
            </div>
            <div className="hou003-separator"></div>
            <div className="hou003-time-unit">
              <div className='hou003-time-left'>{timeLeft.minutes || '0'}</div>
              <span>Mins</span>
            </div>
            <div className="hou003-separator"></div>
            <div className="hou003-time-unit">
              <div className='hou003-time-left'>{timeLeft.hours || '0'}</div>
              <span>Hours</span>
            </div>
            <div className="hou003-separator"></div>
            <div className="hou003-time-unit">
              <div className='hou003-time-left'>{timeLeft.seconds || '0'}</div>
              <span>Secs</span>
            </div>
          </div>
          </div>
    </div>
    </section>
    </>
  );
}

export default Countdown;
