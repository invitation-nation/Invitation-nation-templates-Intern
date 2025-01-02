import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './Bir004-monavbar.css';
import closebutton from '../assets/img/bir004-monavbar/moclose.svg';
import menubutton from '../assets/img/bir004-monavbar/momenu.svg';
import monavimg from '../assets/img/Bir004-Monavbar/monavimg.svg';

function Bir004_mobilenavbar() {
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
      <section id='bir004-mobilenavbar'>
        <button className="bir004-nav-toggle" onClick={toggleNavbar}>
          <img src={menubutton} alt="" />
        </button>
        <div className={`bir004-mnavbar ${isOpen ? 'bir004-nav-open' : ''}`}>
          <button className="bir004-close-nav" onClick={closeNavbar}>
            <img src={closebutton} alt="" />
          </button>
          <div className='nimbus-container'>
            <div className="bir004-nav-menu">
              <div className='bir004-navbutton-collection'>
               
                  <div className="bir004-navbutton">
                  <Link to="/">
                    <span>Home</span>
                    </Link>
                  </div>
                  <div className="bir004-navbutton">
                  <a href="#bir004-banner">
                    <span>About</span>
                    </a>
                  </div>
                  <div className="bir004-navbutton">
                  <a href="#bir004-Gallery">
                    <span>Gallery</span>
                    </a>
                  </div>
                  <div className="bir004-navbutton">
                  <a href="#bir004-activity">
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

export default Bir004_mobilenavbar