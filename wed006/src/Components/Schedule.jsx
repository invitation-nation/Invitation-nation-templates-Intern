import React, { useState } from "react";
import CloudLeft from "../assets/schedule-section/cloud-left.png";
import CloudRight from "../assets/schedule-section/cloud-right.png";
import BrideGroomArch from "../assets/schedule-section/bride-groom-arch.png";
import BackgroundClouds from "../assets/schedule-section/background-clouds.png";
import GoldenFence from "../assets/schedule-section/golden-fence.png";
import ArrowBack from "../assets/schedule-section/arrow-back.svg";
import ArrowForward from "../assets/schedule-section/arrow-forwards.svg";
import frameimage from "../assets/Frame 283.png";
import "./Schedule.css";

const groomEvents = [
  { Details: "Groom event 1 details...", page: 1 },
  { Details: "Groom event 2 details...", page: 2 },
  { Details: "Groom event 3 details...", page: 3 },
  // Add more groom events if needed
];

const brideEvents = [
  { Details: "Bride event 1 details...", page: 1 },
  { Details: "Bride event 2 details...", page: 2 },
  { Details: "Bride event 3 details...", page: 3 },
  // Add more bride events if needed
];

const Schedule = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState("groom"); // "groom" or "bride"

  const events = selectedEvent === "groom" ? groomEvents : brideEvents;
  const currentEvent = events[currentEventIndex];

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const handleSelectEvent = (type) => {
    setSelectedEvent(type);
    setCurrentEventIndex(0); // Reset to the first event when switching
  };

  return (
    <>
      <section id="schedule-section">
        <div className="nimbus-container">
          <div className="cloud-left-container">
            <img src={CloudLeft} alt="" />
          </div>
          <div className="cloud-right-container">
            <img src={CloudRight} alt="" />
          </div>
          <div className="schedule-container">
            <div className="golden-fence-container">
              <img src={GoldenFence} alt="" />
            </div>
            <div className="schedule-flex">
              <div className="schedule-groom-brid-btn">
                <button
                  className={`schedule-btn ${
                    selectedEvent === "groom" ? "active" : ""
                  }`}
                  onClick={() => handleSelectEvent("groom")}
                >
                  Groom
                </button>
                <button
                  className={`schedule-btn ${
                    selectedEvent === "bride" ? "active" : ""
                  }`}
                  onClick={() => handleSelectEvent("bride")}
                >
                  Bride
                </button>
              </div>
              <h2 className="schedule-title">Wishes for the Couple</h2>
            </div>
            <div className="schedule-flex">
              <div className="schedule-nav">
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
                <div className="schedule-text-box">
                  <span className="schedule-date">{currentEvent.Details}</span>
                  <div className="schedule-details">
                    <div className="pages-details">
                      {currentEvent.page} of {events.length}
                    </div>
                  </div>
                </div>
              </div>
              <img src={frameimage} className="schedule-frameimage" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
