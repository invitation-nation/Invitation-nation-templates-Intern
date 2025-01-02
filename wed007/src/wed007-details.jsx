import React from 'react';
import './wed007-details.css';
import leftdecoration from './assets/img/wed007-contact/contact-decoration.svg';
import rightdecoration from './assets/img/wed007-contact/contact-decoration-right.svg';
import call from './assets/img/wed007-contact/call.svg';
import location from './assets/img/wed007-contact/location.svg';
import calendar from './assets/img/wed007-contact/calendar.svg';
import gallery from './assets/img/wed007-contact/gallery.svg';

function details() {
  return (
    <section id='wed007-details-section'>
      <img id='wed007-details-leftdecoration' src={leftdecoration} alt="" />
      <img id='wed007-details-rightdecoration' src={rightdecoration} alt="" />
      <div className='nimbus-container'>
        <div className='wed007-info-details'>
          <div className='wed007-conloc'>
            <div className='wed007-contact'>
              <img id='wed007-details-call' src={call} alt="" />
              <span className='wed007-details-call'>Contact</span>
            </div>
            <div className='wed007-location2'>
              <img id='wed007-details-loc' src={location} alt="" />
              <span>Location</span>
            </div>
          </div>
          <div className='wed007-conloc'>
            <div className='wed007-calendar'>
              <img id='wed007-details-calendar' src={calendar} alt="" />
              <span>Schedule</span>
            </div>
            <div className='wed007-gal'>
              <img id='wed007-details-gallery' src={gallery} alt="" />
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default details;
