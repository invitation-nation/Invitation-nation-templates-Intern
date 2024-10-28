import '../App.css';
import './Bir004-hero.css';
import { Link } from 'react-router-dom';
import bottle from '../assets/img/Bir004-Hero/HeroBottle.png';
import butterfly from '../assets/img/Bir004-Hero/hero-butterfly.svg';
import divider from '../assets/img/Bir004-Hero/herodivider.svg';

function Bir004_hero() {
return (
    <>
        <section id='bir004-hero'>
            <div className='nimbus-container'>
                <div className="bir004-navmain">
                <div className='bir004-navbar'>
                    <Link to='#'>HOME</Link>
                    <Link to='#'>ABOUT</Link>
                    <Link to='#'>GALLERY</Link>
                    <Link to='#'>SCHEDULE</Link>
                </div>
                </div>
                <div className='bir004-butterfly'>
                <img src={butterfly} alt="" />
                </div>
                <div className="bir004-invite">
                    
                    <div className="bir004-datetime">
                        <div className='bir004-jenny-firstline'>
                            <span>Jenny's </span>
                            <span id='bir004-highlight'>25th</span>
                        </div>
                        <div className='bir004-jenny-secondline'>
                            <span>Birthday Bash</span>
                        </div>
                        <div className="bir004-jennydate">
                            <span>14th Jan</span>&nbsp;&nbsp;&nbsp;
                            <img id='bir004-divider' src={divider} alt="" />
                            &nbsp;&nbsp;&nbsp;<span>4:00 PM</span>
                        </div>
                        <a className="bir004-hero-mapbutton" href="https://maps.app.goo.gl/qyyBmbLSvMHZhWLM6">
                                <span>OPEN MAP</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bir004-bottleimg">
                <img src={bottle} alt="" /> 
            </div>
            
        </section>
    </>
)
}

export default Bir004_hero