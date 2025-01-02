import React from 'react';
import './wed007-wishes.css';
import waveunderline from './assets/img/wed007-wishes/wave-underline.svg';
import peacock from './assets/img/wed007-wishes/peacock.svg';
import Gautam from './assets/img/wed007-wishes/gowtham.png';
import mapright from './assets/img/wed007-hero/map-rose-right.svg';
import mapleft from './assets/img/wed007-hero/map-rose-left.svg';
import wishbg from './assets/img/wed007-wishes/Wishes-background.png';
function wishes() {
  return (
    <section id='wed007-wish-section'>
        {/* <img  src={wishbg} alt="" /> */}
        <div className='nimbus-container'>
       
            <div className='wed007-wishes'>
                <div className='wed007-wish-details'>
                    <span id='wed007-wish'>Wishes for the Couple</span>
                    <img className='wed007-wave' src={waveunderline} alt="" />
                    <div className='wed007-couple'>
                        <span id='wed007-wbride'>Bride</span>
                        <span id='wed007-wgroom'>Groom</span>
                    </div>
                    <div className='wed007-wishes-content'> 
                        <div className='wed007-peacock'>
                        <img  src={peacock} alt="" />
                        </div>
                        <div className='wed007-wish-content'>
                        <img className='wed007-gautam' src={Gautam} alt="" />
                    <span id='wed007-wisher'>Gautam</span>
                    <span id='wed007-gautam-wish'>May your marriage be filled with all the right ingredients: a heap of love, a dash of humor, a touch of romance, and a spoonful of understanding</span>
                        </div>
                    </div>
                    <a className='wed007-wish-open' href="/Wisher">
              <img id='wed007-left' src={mapleft} alt="" />
                <span id='wed007-wish-button1'>Send your wishes</span>
                <img id='wed007-right' src={mapright} alt="" />
              
            </a>
                </div>
            </div>
        </div>
    </section>
   
  )
}

export default wishes