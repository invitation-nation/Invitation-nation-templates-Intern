import React from 'react'
import rsl from './assets/upn001-ritual-section/ritual-section-left.svg'
import rsr from './assets/upn001-ritual-section/ritual-section-right.svg'
import rl from './assets/upn001-ritual-section/rituals-leaf.svg'
import rlm from './assets/upn001-ritual-section/ritual-leaf-mobile.svg'
import './upn001-Rituals.css'
/*import { Link } from 'react-router-dom'*/

function Rituals() {
  
  return (
    <div id="content">

<section id="upn001-rituals-section">
        <div className="upn001-nimbus-container">
          <div className="upn001-rituals-container">
            <div className="upn001-rituals-decoration-left">
              <img src={rsl} alt="" />
            </div>
            <div className="upn001-rituals-decoration-right">
              <img
                src={rsr}
                alt=""
              />
            </div>
            <div className="upn001-rituals-leaf">
              <img src={rl} alt="" />
            </div>
            <div className="upn001-rituals-leaf-mobile">
              <img src={rlm} alt="" />
              </div>
            <div className="upn001-rituals-text-container">
              <p>
                Explore the steps in the ceremony that lead to Amogha being
                welcomed into the fold of knowledge and Brahmacharya
              </p>
            </div>
            
            <button  class="upn001-rituals-btn" onClick={() => window.location.href = "/More"}>Learn More</button>
            
            
          </div>
        </div>
      </section>
      </div>
  )
}

export default Rituals

