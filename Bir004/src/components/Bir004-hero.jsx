import '../App.css';
import './Bir004-hero.css';
import { Link } from 'react-router-dom';
import bottle from '../assets/img/Bir004-Hero/HeroBottle.png';
import butterfly from '../assets/img/Bir004-Hero/hero-butterfly.svg';
import divider from '../assets/img/Bir004-Hero/herodivider.svg';
import leftdeco from '../assets/img/Bir004-Hero/heroleftdeco.svg';
import rightdeco from '../assets/img/Bir004-Hero/herorightdeco.svg';
import herobg from '../assets/img/Bir004-Hero/herobackground.svg';
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
                            <span>Jenny&apos;s </span>
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
                    <div id="bir004-bottleimgmo">
                        <img src={bottle} alt="" />
                    </div>
                </div>
            </div>
            <div id="bir004-bottleimg">
                <img src={bottle} alt="" />
            </div>
            <div id="bir004-herorightdeco">
                <img src={rightdeco} alt="" />
            </div>
            <div id="bir004-heroleftdeco">
                <img src={leftdeco} alt="" />
            </div>
            <img src={herobg} alt="" id='bir004-herobg'/>
        </section>
    </>
)
}

export default Bir004_hero