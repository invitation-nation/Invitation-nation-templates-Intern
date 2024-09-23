import '../App.css'
import "./bir005-Banner.css"
import { Link } from 'react-router-dom';
import triban from '../assets/img/Bir005-Banner/triban.svg' 
import babupic from '../assets/img/Bir005-Banner/bannerimg.png'
import ballon from '../assets/img/Bir005-Banner/ballon.png'
import heartbutton from '../assets/img/Bir005-Banner/heartstar.png'
import cloud from '../assets/img/Bir005-Banner/cloudreveal.png'

function Bir005_Banner() {
    return (
        <>
            <section id="bir005-banner">
                <div className="nimbus-container">
                    <div className="bir005-banner">
                        <img className="bir005-lban" src={triban} alt="leftban" />
                        <img className="bir005-rban" src={triban} alt="rightban" />
                        <div className='bir005-banner-content'>
                        <div className="bir005-bannerpic">
                            <img id="bir005-leftballon" className="bir005-ballon" src={ballon} alt="" />
                            <img className="bir005-babypic" src={babupic} alt="" />
                            <img id="bir005-rightballon" className="bir005-ballon" src={ballon} alt="" />
                            
                        </div>
                        <div className="bir005-invite">
                            
                            <p id="bir005-join">Join us to celebrate</p>
                            <h1>ETHAN&apos;S</h1>
                            <h1>3RD BIRTHDAY</h1>
                            <p>
                                We are thrilled to invite you to join us in celebrating this special occasion.
                                Your presence will add joy and meaning to our
                            </p>
                            <p>
                                celebration, as we come together to create lasting
                                memories.
                            </p>
                            <Link to='/special'>
                                <div id="bir005-nve" className="bir005-mapbutton">
                                    <span>SPECIAL HIGHLIGHTS</span>
                                    <img id="bir005-heartbuttn" src={heartbutton} alt="📍" />
                                </div>
                            </Link>
                        </div>
                        </div>
                        <img id="bir005-lcloud" className="bir005-clouds" src={cloud} alt="" />
                        <img id="bir005-rcloud" className="bir005-clouds" src={cloud} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Bir005_Banner;