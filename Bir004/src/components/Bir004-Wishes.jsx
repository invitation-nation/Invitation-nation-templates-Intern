import React from 'react';
import './Bir004-Wishes.css';

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
                  <div className="bir004-wishes-display-section">
                    <h2 className="bir004-wishes-display-header">Wishes</h2>
                    <div className="bir004-wishes-display-content">
                      <div className="bir004-wishes-display-message">
                        <p>Happy 25th birthday! May this special year be filled with joy, success, and endless possibilities. You've already achieved so much, and the best is yet to come!</p>
                        <h2>Amelia</h2>
                      </div>
                    </div>
                    <div className="bir004-wishes-display-name">
                      
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Bir004_Wishes