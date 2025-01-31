import React, { useState, useEffect } from "react";
import "./Counter.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-06-02T09:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="time-unit">
        <div className="time-number">
          {timeLeft[interval].toString().padStart(2, "0")}
        </div>
        <div className="time-label">
          {interval.charAt(0).toUpperCase() + interval.slice(1)}
        </div>
      </div>
    );
  });

  return (
    <div className="countdown">
      <div className="countdown-title">Officially Husband and Wife in</div>
      <div className="countdown-timer">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="countdown-title">
            {" "}
            Happily Ever After Starts Here{" "}
          </span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
