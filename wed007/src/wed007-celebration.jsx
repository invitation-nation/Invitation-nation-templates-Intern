import React from 'react'
import './wed007-celebration.css'
import backg from './assets/img/wed007-celebration/background.svg'
import uline from './assets/img/wed007-celebration/underline.svg'
import mapright from './assets/img/wed007-hero/map-rose-right.svg'
import mapleft from './assets/img/wed007-hero/map-rose-left.svg'
function celebration() {
  return (
    <section id='wed007-celebration-section'>
        
        <div className='nimbus-container'>
            <div className='wed007-celebration'>
            <div className='wed007-details'>
            <div className='wed007-date'>
                <span id='wed007-join'>Join the Celebration on</span>
                <span id='wed007-feb'>25th February</span>
                <img className='wed007-uline' src={uline} alt="" />
            </div>
            <div className='wed007-location'>
                <span id='wed007-loc'>Location : </span>
                <span id='wed007-address'>88, Avalahalli Kanakapura Rd, Royal Park Residency Layout 2, JP Nagar 9th Phase, J. P. Nagar, Bengaluru, Karnataka 560108</span>
                <span id='wed007-fac'>Facilities Available :</span>
                <div className='wed007-items'>
                    <span>Elevator</span>
                    <span>Veg Food</span>
                    <span>Car Parking</span>
                    <span>Cab</span>
                </div>
            </div>
            <div className='wed007-celebration-buttons'>

            <div id="wed007-button2">
           <a href="/Schedule">
           <img id='wed007-left' src={mapleft} alt="" />
            <span>Open in Maps</span>
            <img id='wed007-right' src={mapright} alt="" />
            </a>
           </div>
           <div id="wed007-button2">
           <a href="/Schedule">
           <img id='wed007-left' src={mapleft} alt="" />
            <span>View all Events</span>
            <img id='wed007-right' src={mapright} alt="" />
            </a>
           </div>

           </div>
            </div>
           
            </div> 
        </div>
        <img id='wed007-backg' src={backg} alt="" />

    </section>
  )
}

export default celebration