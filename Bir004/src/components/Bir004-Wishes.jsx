import React from 'react';
import './Bir004-Wishes.css';
import wishbl from '../assets/img/Bir004-Wishes/wishbl.png';
import wishbr from '../assets/img/Bir004-Wishes/wishbr.svg';
import wishtr from '../assets/img/Bir004-Wishes/wishtr.png';
import wishtl from '../assets/img/Bir004-Wishes/wishtl.svg';
import wishbm from '../assets/img/Bir004-Wishes/wishbm.svg';
import wishtr1 from '../assets/img/Bir004-Wishes/wishtr1.svg';
import wishdesc from '../assets/img/Bir004-Wishes/wishdsec.svg';

function Bir004_Wishes() {
  return (
    <>
        <section id='bir004-wishes'>
            <div className="nimbus-container">
                <div className="bir004-wish-headmain">
                  <div className="bir004-wishes-head">
                      <h2>Send wishes for</h2>
                      <h1>Jenny</h1>
                  </div>
                </div>
                <div className="bir004-wishes-content-main">
                  <div className="bir004-wishes-content-entrysection">
                    <div className="bir004-wish-content-name">
                      <input id='bir004-wishes-name-entry' type="text" placeholder="Enter name"/>
                    </div>
                    <div className="bir004-wish-content-message">
                      <input id='bir004-wishes-message-entry' type="text" placeholder="Enter Message"/>
                    </div>
                    <div className="bir004-wish-content-sendbutton">
                      <button className='bir004-wishes-send'>
                        <span>SEND WISH</span>
                      </button>
                    </div>
                  </div>
                  <div className="bir004-wishes-display-section" id='wishdisplaysection'>
                    <h2 className="bir004-wishes-display-header">Wishes</h2>
                    <div className="bir004-wishes-display-content">
                      <div className="bir004-wishes-display-message">
                        <p>Happy 25th birthday! May this special year be filled with joy, success, and endless possibilities. You've already achieved so much, and the best is yet to come!</p>
                        <h2>Amelia</h2>
                      </div>
                    </div>
                    <img src={wishdesc} alt="" />
                  </div>
                </div>
            </div>
            <img src={wishbl} alt="wishbl" id="bir004-wish-bl"/>
            <img src={wishbr} alt="wishbr" id="bir004-wish-br"/>
            <img src={wishtr} alt="wishtr" id="bir004-wish-tr"/>
            <img src={wishtl} alt="wishtl" id="bir004-wish-tl"/>
            <img src={wishbm} alt="wishbm" id="bir004-wish-bm"/>
            <img src={wishtr1} alt="wishtr1" id="bir004-wish-tr1"/>
        </section>
    </>
  )
}

export default Bir004_Wishes