import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './monavbar.css';
import closebutton from '../assets/img/hou003-monavbar/moclose.svg';
import menubutton from '../assets/img/hou003-monavbar/momenu.svg';
import monavimg from '../assets/img/hou003-Monavbar/monavimg.svg';

function Hou003MobileNavbar() {
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
    <section id="hou003-mobilenavbar">
      <button className="hou003-nav-toggle" onClick={toggleNavbar}>
        <img src={menubutton} alt="menu button" />
      </button>
      <div className={`hou003-mnavbar ${isOpen ? 'hou003-nav-open' : ''}`}>
        <button className="hou003-close-nav" onClick={closeNavbar}>
          <img src={closebutton} alt="close button" />
        </button>
        <div className="nimbus-container">
          <div className="hou003-nav-menu">
            <div className="hou003-navbutton-collection">
              <div className="hou003-navbutton">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </div>
              <div className="hou003-navbutton">
                <a href="#hou003-banner">
                  <span>About</span>
                </a>
              </div>
              <div className="hou003-navbutton">
                <a href="#hou003-Gallery">
                  <span>Gallery</span>
                </a>
              </div>
              <div className="hou003-navbutton">
                <a href="#hou003-activity">
                  <span>Activity</span>
                </a>
              </div>
            </div>
            <img src={monavimg} alt="navigation image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hou003MobileNavbar;
