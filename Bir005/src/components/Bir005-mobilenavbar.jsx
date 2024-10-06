import { useState } from 'react';

import '../App.css';
import './Bir005-mobilenavbar.css'
import closebutton from '../assets/img/Bir005-mobilenavbar/close.svg'
import menubutton from '../assets/img/Bir005-mobilenavbar/menu.svg'
import desteddy from '../assets/img/Bir005-Destination/destinationteddy.png'

function Bir005_mobilenavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
    return (
    <>
      <section id='bir005-mobilenavbar'>
      <button className="bir005-nav-toggle" onClick={toggleNavbar}>
      <img src={menubutton} alt="" />
      </button>
      <div className={`bir005-mnavbar ${isOpen ? 'bir005-nav-open' : ''}`}>
      <button className="bir005-close-nav" onClick={closeNavbar}>
      <img src={closebutton} alt="" />
        </button>
        <div className='nimbus-container'>
        <div className="bir005-nav-menu">
        <div className='bir005-navbutton-collection'>
        <div className="bir005-navbutton">
          <span>Home</span>
          </div>
          <div className="bir005-navbutton">
          <span>About</span>
          </div>
          <div className="bir005-navbutton">
          <span>Gallery</span>
          </div>
          <div className="bir005-navbutton">
          <span>Schedule</span>
          </div>
          <img src={desteddy} alt="" />
        </div>
        </div>
        
      </div>
      </div>
      </section>
      </>
    );
  }

export default Bir005_mobilenavbar