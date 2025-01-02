import React from 'react';
import './wed007-Nav.css';
import './wed007-count.css';
import horebackground from './assets/img/wed007-hero/hore-background.svg';
import mobilebackground from './assets/img/wed007-hero/mobile-background.svg';
import mobiledecoration from './assets/img/wed007-hero/mobile-decoration.png';
import background from './assets/img/wed007-hero/content-background.svg';
import ganesh from './assets/img/wed007-hero/ganesha.svg';
import nametop from './assets/img/wed007-hero/name-decoration-top.svg';
import namebottom from './assets/img/wed007-hero/name-decoration-bottom.svg';
import mapright from './assets/img/wed007-hero/map-rose-right.svg';
import mapleft from './assets/img/wed007-hero/map-rose-left.svg';
import underline from './assets/img/wed007-countdown/underline.svg'

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <section id='wed007-navbarsec'>
        <div className="nimbus-container">
          <div className='wed007-navbar'>
            <Link to='/'>HOME</Link>
            <Link to='/Story'>ABOUT</Link>
            <Link to='#'>GALLERY</Link>
            <Link to='/Schedule'>SCHEDULE</Link>
          </div>
        </div>
      </section>
      <section id='wed007-nav-section'>
        <div className='nimbus-container'>
          <div className='content'>
            <img id='wed007-background' src={background} alt="leftdecoration" />
            <div className='wed007-info-event-box'>
              <img id='wed007-ganesh' src={ganesh} alt="" />
              <span id="wed007-hero1">We’re Getting Married</span>
              <img id='wed007-nametop' src={nametop} alt="" />
              <span id='wed007-hero2'>Raj weds Riya</span>
              <img id='wed007-namebottom' src={namebottom} alt="" />
              <span id='wed007-hero3'>25th February</span>
              <span id='wed007-hero4'>Kormangala Bangalore</span>
              <div className='wed007-map'>
                <a href="https://maps.app.goo.gl/WJRqrWxkr4b49UQ18">
                  <img id='wed007-mapleft' src={mapleft} alt="" />
                  <span id='wed007-button'>open the map</span>
                  <img id='wed007-mapright' src={mapright} alt="" />
                </a>
              </div>
            </div>
                      <div className="wed007-hero-count-down-container">
                      
                        <div className="wed007-count-down-title">Officially Husband and Wife in</div>
                        <img id='wed007-underline' src={underline} alt="" />
                        <div className="wed007-count-down-elements">
                          <div className="wed007-count-down-element">
                           
                            <span className="wed007-count-down-number">00</span>
                            <span className="wed007-count-down-text">Days</span>
                          </div>
                          <span className='wed007-break'>|</span>
                          <div className="wed007-count-down-element">
                         
                            <span className="wed007-count-down-number">00</span>
                            <span className="wed007-count-down-text">Hours</span>
                          </div>
                          <span className='wed007-break'>|</span>
                          <div className="wed007-count-down-element">
                          
                            <span className="wed007-count-down-number">00</span>
                            <span className="wed007-count-down-text">Mins</span>
                          </div>
                          <span className='wed007-break'>|</span>
                          <div className="wed007-count-down-element">
                          
                            <span className="wed007-count-down-number">00</span>
                            <span className="wed007-count-down-text">Secs</span>
                          </div>
                          
                        </div>
                      
                      </div>
          </div>
        </div>
        <img id='wed007-mobile-background' src={mobilebackground} alt="leftdecoration" />

        <img src={horebackground} alt="" id='wed007-herobackground' />
        <img src={mobiledecoration} alt="" id='wed007-mobiledecoration' />
      </section>
    </>
  );
}

export default Nav;