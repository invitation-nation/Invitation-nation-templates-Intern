import React, { useState, useEffect } from 'react';
import './wed007-wishers.css';
import Preloader from './wed007-preloader'
import waveunderline from './assets/img/wed007-wishes/wave-underline.svg';
import mapright from './assets/img/wed007-hero/map-rose-right.svg';
import mapleft from './assets/img/wed007-hero/map-rose-left.svg';
import peacock from './assets/img/wed007-wishes/peacock.svg';
import back from './assets/img/wed007-wishers/back.svg';
import widhers_back from './assets/img/wed007-wishers/mob-menu-wishers.png';
function wishers() {
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
          // Disable scrolling
          document.body.classList.add('no-scroll');
      
          const timer = setTimeout(() => {
            setLoading(false);
            // Enable scrolling
            document.body.classList.remove('no-scroll');
          }, 7000); // Adjust the timeout duration to match the total animation time
      
          return () => clearTimeout(timer);
        }, []);
  return (
   <>
   {loading && <Preloader />}
   <section id='wed007-wisher-section'>
    <div className="nimbus-container">
        <div className='wed007-wishers'>
                <div className='wed007-wish-details'>
                    <div className='wed007-wisher-header'>
                        <a href="/" id='wed007-wisher-back'>
                    <img src={back} alt="" />
                    </a>
                    
                    <span id='wed007-wishr'>Wishes for the Couple</span>
                    <div id='web007-wishersmobmenu'>
                    <img src={widhers_back} alt="" />

                    </div>
                    </div>
                    <img className='wed007-wisher-wave' src={waveunderline} alt="" />
                    <div className='wed007-wisher-couple'>
                        <div className='wed007-choose'>
                        <span id='wed007-side'>Choose your side</span></div>
                        <div className='wed007-wisher-BG'>
                            <div id='wed007-bride'>
                        <span >Bride</span></div>
                        <div id='wed007-groom'>
                        <span >Groom</span></div>
                        </div>
                    </div>
                    </div>
                    
                <div className='wed007-wisher-content'>
                <div className='wed007-peacock2' >
                        <img   src={peacock} alt="" />
                        </div>
                    <div className='wed007-yourname'>
                        <input id='wed007-wisher-name' type="text"  placeholder='Your name'/>
                    </div>
                    <div className='wed007-message'>
                        <input id='wed007-wisher-message' type="text" placeholder='Message'/>
                    </div>

                    <a  href="" className='wed007-wish-send'>
                        <div className='wed007-wisher-open'>
                        <img id='wed007-left' src={mapleft} alt="" />
                <span id='wed007-button1'>Send your message</span>
                <img id='wed007-right' src={mapright} alt="" />
                        </div>
              
            </a>

                </div>

                    </div>
    </div>
   </section>
   </>
  )
}
// test

export default wishers