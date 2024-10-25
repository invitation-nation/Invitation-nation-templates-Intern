import React, { useState } from "react";
import CloudLeft from "../assets/schedule-section/cloud-left.png";
import CloudRight from "../assets/schedule-section/cloud-right.png";
import BrideGroomArch from "../assets/schedule-section/bride-groom-arch.png";
import BackgroundClouds from "../assets/schedule-section/background-clouds.png";
import GoldenFence from "../assets/schedule-section/golden-fence.png";
import ArrowBack from "../assets/schedule-section/arrow-back.svg";
import ArrowForward from "../assets/schedule-section/arrow-forwards.svg";
import "./Schedule.css";

const events = [
  {
    day: "Saturday",
    date: "1st June",
    event: "Reception",
    time: "7:00 PM",
  },
  {
    day: "Sunday",
    date: "2nd June",
    event: "Muhurtha",
    time: "9:30 AM",
  },
  // Add more events as needed
];

const Schedule = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const currentEvent = events[currentEventIndex];

  return (
    <>
      <section id="schedule-section">
        <div className="nimbus-container">
          <div className="schedule-container">
            <div className="cloud-left-container">
              <img src={CloudRight} alt="" />
            </div>
            <div className="cloud-right-container">
              <img src={CloudRight} alt="" />
            </div>
            <div className="golden-fence-container">
              <img src={GoldenFence} alt="" />
            </div>

            <div className="schedule-nav">
              <h2 className="schedule-title">Join the celebration on</h2>
              <div className="schedule-controls">
                <div className="schedule-control-left" onClick={handlePrev}>
                  <img src={ArrowBack} alt="Previous" />
                </div>
                <div className="schedule-control-right" onClick={handleNext}>
                  <img src={ArrowForward} alt="Next" />
                </div>
              </div>
            </div>

            <div className="schedule-container-box">
              <div className="schedule-img-box">
                <img src={BrideGroomArch} alt="" />
              </div>
              <div className="schedule-line"></div>
              <div className="schedule-text-box">
                <span className="schedule-day">{currentEvent.day}</span>
                <span className="schedule-date">{currentEvent.date}</span>
                <div className="schedule-details">
                  <span>{currentEvent.event}</span>
                  <span>{currentEvent.time}</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir//329,+14th+Cross+Rd,+Muthuraya+Swamy+Extension,+Sunkadakatte,+Bengaluru,+Karnataka+560091/@12.9900846,77.4253384,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3de2650dce8f:0x349bda15b1d1e60c!2m2!1d77.5077146!2d12.9901014?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="schedule-btn"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
