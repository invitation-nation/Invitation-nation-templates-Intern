import "../App.css"
import { Link } from 'react-router-dom';
import "./bir005-hero.css";
import teddyhead from '../assets/img/Bir005-Hero/teddyhead.svg'
import teddybody from '../assets/img/Bir005-Hero/teddybody.svg'
import location_button from '../assets/img/Location.png'
// import Mapbutton from './bir005-Mapbutton';

function Bir005_Hero() {
  return (
    <>
      <section id="bir005-hero">
        <div className="bir005-hero-animation"></div>
        <div className="nimbus-container">
          <div className='bir005-Hero'>
            <div className="bir005-navbar">
              <Link to="/">Home</Link>
              <a href="#bir005-banner">About</a>
              <a href="#bir005-Gallery">Gallery</a>
              <a href="#bir005-activity">Schedule</a>
            </div>
            <div className="bir005-titleinfo">
              <p>Please join us to celebrate</p>
              <h1 id="bir005-namebir">ETHAN</h1>
              <h1>IS TURNING <b>3</b></h1>
              <p>14th Jan&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4:00PM</p>
              <a href="https://maps.app.goo.gl/tFDawx72Q8SDE3TP8">
              <div className="bir005-mapbutton">
                <img src={location_button} alt="📍" /><span>OPEN IN MAPS</span>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bir005-heroteddy">
        <img id="head" src={teddyhead} alt="some teddy pic" />
        <img id="body" src={teddybody} alt="" />
        </div>
        
      </section>
    </>
  )
}

export default Bir005_Hero



