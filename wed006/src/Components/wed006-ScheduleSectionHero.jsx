import React, { useState } from "react";
import CloudLeft from "../assets/schedule-section/cloud-left.png";
import CloudRight from "../assets/schedule-section/cloud-right.png";
import BrideGroomArch from "../assets/schedule-section/bride-groom-arch.png";
import BackgroundClouds from "../assets/schedule-section/background-clouds.png";
import ArrowBack from "../assets/schedule-section/arrow-back.svg";
import ArrowForward from "../assets/schedule-section/arrow-forwards.svg";
import aboutfence from "../assets/about-section/Frame 351.png";

import "./wed006-ScheduleSectionHero.css";

const events = [
  {
    day: "Saturday",
    date: "1st June",
    events: [
      { event: "Reception", time: "7:00 PM" },
      { event: "Dinner", time: "8:30 PM" },
    ],
  },
  {
    day: "Sunday",
    date: "2nd June",
    events: [
      { event: "Muhurtha", time: "9:30 AM" },
      { event: "Lunch", time: "1:00 PM" },
    ],
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
          <div className="schedule-container-page">
            <div className="cloud-left-container">
              <img src={CloudLeft} alt="" />
            </div>
            <div className="cloud-right-container">
              <img src={CloudRight} alt="" />
            </div>
            <div className="golden-fence-container">
              <img src={aboutfence} alt="" />
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
                <div className="schedule-line-hz"></div>
                <div className="schedule-details">
                  {currentEvent.events.map((eventDetail, index) => (
                    <div className="schedule-event" key={index}>
                      <span>{eventDetail.event}</span>
                      <span>{eventDetail.time}</span>
                    </div>
                  ))}
                </div>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="schedule-btn"
                >
                  More details
                </a>
              </div>
            </div>
            <div className="schedule-controls_2">
              <div className="schedule-control-left" onClick={handlePrev}>
                <img src={ArrowBack} alt="Previous" />
              </div>
              <div className="schedule-control-right" onClick={handleNext}>
                <img src={ArrowForward} alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
