import "../App.css"
import { Link } from 'react-router-dom';
import "./bir005-hero.css";
import hero_cloud from '../assets/img/Bir005-Hero/Vector.png'
import hero_teddy from '../assets/img/Bir005-Hero/Teddy.png'
import location_button from '../assets/img/Location.png'
// import Mapbutton from './bir005-Mapbutton';

function Bir005_Hero() {
  return (
    <>
     <section id= "bir005-hero">
     <img className="bir005-herocloud" src={hero_cloud} alt="some random cloud" />
     <img className="bir005-heroteddy" src={hero_teddy} alt="some teddy pic" />       
     <div className="bir005-hero-animation">
     </div>
        <div className="nimbus-container">
        <div className='bir005-Hero'>
        <div className="bir005-navbar">
          <Link to="/">
            Home
          </Link>
          <Link to="/">
            About
          </Link>
          <Link to="/">
            Gallery
          </Link>
          <Link to="/">
            Schedule
          </Link>
        </div>
        <div className="bir005-titleinfo">
          <p>Please join us to celebrate</p>
          <h1 id="bir005-namebir">ETHAN</h1>
          <h1>IS TURNING <b>3</b></h1>
          <p>14th Jan&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4:00PM</p>
          <div className="bir005-mapbutton">
          <img src={location_button} alt="📍" /><span>OPEN IN MAPS</span>
          </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Bir005_Hero



