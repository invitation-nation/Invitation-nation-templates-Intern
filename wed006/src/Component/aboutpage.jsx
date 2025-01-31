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
import "./aboutpage.css";
import Family from "../assets/Family.jpg";
const aboutpages = () => {
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
            <div className="about-page-elements">
              <div className="about-title">
                <span>The brides Family</span>
              </div>
              <div className="about-page-image">
                <img className="family-image" src={Family} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutpages;
