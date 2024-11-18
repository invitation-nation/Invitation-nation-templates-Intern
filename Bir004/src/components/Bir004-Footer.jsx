import React from 'react';
import './Bir004-Footer.css';
import footerbutter from '../assets/img/Bir004-Footer/footerbutter.svg';
import footerlo from '../assets/img/Bir004-Footer/footerlo.svg';
import footerco from '../assets/img/Bir004-Footer/footerco.svg';
import footersc from '../assets/img/Bir004-Footer/footersc.svg';
function Bir004_Footer() {
  return (
    <>
        <section id="bir004-Footer">
            <div className="nimbus-container">
              <div className="bir004-footer-main">
                <div className="bir004-footer-sub">
                  <img src={footerlo} alt="" />
                  <h2>Location</h2>
                </div>
                <div className="bir004-footer-sub">
                  <img src={footerco} alt="" />
                  <h2>Contact</h2>
                </div>
                <div className="bir004-footer-sub">
                  <img src={footersc} alt="" />
                  <h2>Schedule</h2>
                </div>
              </div>
            </div>
            <div id='footer-butterfly'>
              <img  src={footerbutter} alt="" />
            </div>
            
        </section>
    </>
  )
}

export default Bir004_Footer