import React from "react";
import "./slidernav.css";
import "../index.css";
import { Link } from "react-router-dom";

export default function SlideNav() {
  return (
    <div className="slidenav-main">
      <div className="slide-nav-container">
        <div className="nav-buttons">
          <div className="nav-button-flex">
            <div className="nav-button" style={{ justifySelf: "right" }}>
              <a
                href="tel:+919845782797"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </a>
            </div>
            <div className="label">Contact</div>
          </div>
          <div className="nav-button-flex">
            <div className="nav-button" style={{ justifySelf: "left" }}>
              <a
                href="https://www.google.com/maps/dir//329,+14th+Cross+Rd,+Muthuraya+Swamy+Extension,+Sunkadakatte,+Bengaluru,+Karnataka+560091/@12.9900846,77.4253384,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3de2650dce8f:0x349bda15b1d1e60c!2m2!1d77.5077146!2d12.9901014?entry=ttu"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
              </a>
            </div>
            <div className="label">Location</div>
          </div>
          <div className="nav-button-flex">
            <div className="nav-button" style={{ justifySelf: "right" }}>
              <Link
                to="/nayana-weds-punith/#schedule-section"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <div className="icon">
                  <i className="fa-regular fa-calendar"></i>
                </div>
              </Link>
            </div>
            <div className="label">Schedule</div>
          </div>
          <div className="nav-button-flex">
            <div className="nav-button" style={{ justifySelf: "left" }}>
              <Link
                to="/nayana-weds-punith/gallery"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <div className="icon">
                  <i className="fa-regular fa-image"></i>
                </div>
              </Link>
            </div>
            <div className="label">Gallery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
