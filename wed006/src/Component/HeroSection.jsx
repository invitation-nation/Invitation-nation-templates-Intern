import React from "react";
import HeroText from "../assets/hero-section/hero-text-background.png";
import CloudLeft from "../assets/schedule-section/cloud-left.png";
import CloudRight from "../assets/schedule-section/cloud-right.png";
import PinkCurtain from "../assets/hero-section/pink-curtain.png";
import Petals from "../assets/hero-section/petal-gif.gif";
import RoseLine from "../assets/hero-section/roses-line.png";
import Pot from "../assets/hero-section/pot.png";
import GoldenFence from "../assets/schedule-section/golden-fence.png";
import Ganesh from "../assets/hero-section/ganesh.png";
import Leaf from "../assets/hero-section/hero-leaf.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section id="hero-section">
        <div className="nimbus-container">
          <div className="hero-container">
            <div className="cloud-left-container">
              <img src={CloudRight} alt="" />
            </div>
            <div className="cloud-right-container">
              <img src={CloudRight} alt="" />
            </div>
            <div className="curtain-left">
              <img src={PinkCurtain} alt="" />
            </div>
            <div className="curtain-right">
              <img src={PinkCurtain} alt="" />
            </div>
            {/* <div className="pot-left">
              <img src={Pot} alt="" />
            </div>
            <div className="pot-right">
              <img src={Pot} alt="" />
            </div> */}
            <div className="flower-top">
              <img src={RoseLine} alt="" />
            </div>
            <div className="flower-bottom">
              <img src={RoseLine} alt="" />
            </div>
            {/* <div className="petals-1">
              <img src={Petals} alt="" />
            </div>
            <div className="petals-2">
              <img src={Petals} alt="" />
            </div> */}
            <div className="golden-fence">
              <img src={GoldenFence} alt="" />
            </div>
            <div className="ganesh">
              <img src={Ganesh} alt="" />
            </div>
            <div className="hero-container-box">
              <div className="hero-couple-box">
                <p className="couple-name">Pooja</p>
                <p className="couple-weds">Weds</p>
                <p className="couple-name">Bhuvan</p>
              </div>
              <div className="hero-time-container">
                <img className="leaf-top" src={Leaf} alt="" />
                <img className="leaf-bottom" src={Leaf} alt="" />
                <span className="hero-time">
                  &nbsp;21 & 22 &nbsp; Jan &nbsp;2024 &nbsp;
                </span>
              </div>
              <span className="hero-location-text">
                <span>Venue</span>
                <p>Vijaynagar Banglore</p>
              </span>
            </div>
            <div className="hero-btn-container">
              <a
                href="https://www.google.com/maps/dir//329,+14th+Cross+Rd,+Muthuraya+Swamy+Extension,+Sunkadakatte,+Bengaluru,+Karnataka+560091/@12.9900846,77.4253384,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3de2650dce8f:0x349bda15b1d1e60c!2m2!1d77.5077146!2d12.9901014?entry=ttu"
                className="hero-btn"
              >
                Open In Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
