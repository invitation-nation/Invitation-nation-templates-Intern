import React from 'react'
import infobg from './assets/upn001-info-section/info-section-bg.svg'
import infobd from './assets/upn001-info-section/info-bottom-decoration.svg'
import infocall from './assets/upn001-info-section/info-call.svg'
import infonav from './assets/upn001-info-section/info-nav.svg'
import './upn001-Info.css'

function Info() {
  return (
    <div id="content">

    <section id="upn001-info-section">
        <div className="upn001-nimbus-container">
          <div className="upn001-info-section-bg">
            <img src={infobg} alt="" />
          </div>
          <div className="upn001-info-decoration-bottom">
            <img src={infobd} alt="" />
          </div>
          <div className="upn001-info-container">
            <h2 className="upn001-info-title">
              ||<b className="upn001-color-r">Sri Aadimadhavarayaswami Krupe</b>||
            </h2>
            <p className="upn001-info-text">
              The family of 
              <b className="upn001-color"> Mr. Kumar Chandra and Mrs. Sindu Rao </b>
              invites you and your family to join us in the celebration of
              <b className="upn001-color"> Amogha’s Upanayana Reception.</b>
            </p>
            <div className="upn001-info-event-box">
              <span className="upn001-event-name">Aarthi & Pooja</span>
              <span className="upn001-event-timings">Sep 28, 11:00 am</span>
            </div>
            <div className="upn001-info-address-box">
              <h3 className="upn001-address-title">Vasavi Convention Center 3rd Floor</h3>
              <p className="upn001-info-address">
                4, Vanivilas Rd, Beside to Vasavi Vidyanikethan High School,
                Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004
              </p>
            </div>
            <a href="tel:+919986381509" className="upn001-info-contact-btn">
              <span>Contact</span>
              <img src={infocall} alt="" />
            </a>
            <a
              href="https://maps.app.goo.gl/1JVS9soKK1UZvSCq6"
              className="upn001-info-location-btn"
            >
              <span>Location</span>
              <img src={infonav} alt="" />
            </a>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Info