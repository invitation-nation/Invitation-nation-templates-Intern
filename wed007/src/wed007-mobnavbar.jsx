import { useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import './wed007-mobnavbar.css';
import closebutton from './assets/img/wed007-monavbar/moclose.png';
import menubutton from './assets/img/wed007-monavbar/moment-co.png';
import monavimg from './assets/img/wed007-monavbar/monavimg.png';

function wed007_mobilenavbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.documentElement.classList.remove('no-scroll');
  };

  return (
    <>
      <section id='wed007-mobilenavbar'>
        <button className="wed007-nav-toggle" onClick={toggleNavbar}>
          <img src={menubutton} alt="" />
        </button>
        <div className={`wed007-mnavbar ${isOpen ? 'wed007-nav-open' : ''}`}>
          <button className="wed007-close-nav" onClick={closeNavbar}>
            <img src={closebutton} alt="" />
          </button>
          <div className='nimbus-container'>
            <div className="wed007-nav-menu">
              <div className='wed007-navbutton-collection'>
               
                  <div className="wed007-navbutton">
                  <Link to="/">
                    <span>Home</span>
                    </Link>
                  </div>
                  <div className="wed007-navbutton">
                  <a href="#wed007-banner">
                    <span>About</span>
                    </a>
                  </div>
                  <div className="wed007-navbutton">
                  <a href="#wed007-Gallery">
                    <span>Gallery</span>
                    </a>
                  </div>
                  <div className="wed007-navbutton">
                  <a href="#wed007-activity">
                    <span>Activity</span>
                    </a>
                  </div>
              </div>
              <img src={monavimg} alt="" />
            </div>
          </div>      
        </div>
      </section>
      </>
    );
  }

export default wed007_mobilenavbar