import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './Bir005-mobilenavbar.css';
import closebutton from '../assets/img/Bir005-mobilenavbar/close.svg';
import menubutton from '../assets/img/Bir005-mobilenavbar/menu.svg';
import desteddy from '../assets/img/Bir005-Destination/destinationteddy.png';

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
                  <Link to="/">
                    <span>Home</span>
                    </Link>
                  </div>
                  <div className="bir005-navbutton">
                  <a href="#bir005-banner">
                    <span>About</span>
                    </a>
                  </div>
                  <div className="bir005-navbutton">
                  <a href="#bir005-Gallery">
                    <span>Gallery</span>
                    </a>
                  </div>
                  <div className="bir005-navbutton">
                  <a href="#bir005-activity">
                    <span>Activity</span>
                    </a>
                  </div>
              </div>
            </div>
            <img src={desteddy} alt="" />
          </div>
        </div>
      </section>
      </>
    );
  }

export default Bir005_mobilenavbar