import './bir004-Destination.css'
import destinationpic from '../assets/img/Bir004-Destination/destination-pic.png' 
import desbottomleft from '../assets/img/Bir004-Destination/desbottomleft.svg'
import desrighttop from '../assets/img/Bir004-Destination/desrighttop.svg'
import acthearts from '../assets/img/Bir004-Destination/acthearts.svg'
import actheadline from '../assets/img/Bir004-Destination/actheadline.svg'
import actp1 from '../assets/img/Bir004-Destination/actp1.png'
import actp2 from '../assets/img/Bir004-Destination/actp2.png'
import actp3 from '../assets/img/Bir004-Destination/actp3.png'
import actp4 from '../assets/img/Bir004-Destination/actp4.png'
import actrb from '../assets/img/Bir004-Destination/actrb.svg'
import actrt from '../assets/img/Bir004-Destination/actrt.svg'
import deslt from '../assets/img/Bir004-Destination/deslt.svg'
import desrm from '../assets/img/Bir004-Destination/desrm.svg'
import actlb from '../assets/img/Bir004-Destination/actlb.svg'
function Bir004_Destination() {
  return (
    <>
    <section id="bir004-destination">
        <div className="nimbus-container">
            <div className="bir004-destinationcontainer">
                <img src={destinationpic} alt="" />
                <div className="bir004-destinationdetails">
                    <h3>Venue</h3>
                    <h1>The Tamrid Tree</h1>
                    <p>
                        88, Avalahalli Kanakapura Rd, 
                        Royal Park Residency Layout 2, JP Nagar 9th Phase, 
                        J. P. Nagar, Bengaluru, Karnataka 560108
                    </p>
                    <a className="bir004-destination-mapbutton" href="https://maps.app.goo.gl/qyyBmbLSvMHZhWLM6">
                                <span>OPEN MAP</span>
                    </a>
                </div>
            </div>
            <div className="bir004-activitycontainer">
                <div className="bir004-activity-title">
                   <div className="bir004-activity-uppert">
                        <h2>Activities</h2>
                        <img src={acthearts} alt="" /> 
                    </div>
                   <div className="bir004-actvity-lowert">
                   <h1>for the party</h1> 
                   </div>
                    <img className='bir004-activity-headline' src={actheadline} alt="" />
                </div>
                <div className="bir004-activity-main">
                <div className="bir004-activities">
                    <div className="bir004-activityn">
                        <img alt="Children painting at a table" src={actp1}/>
                        <div className="bir004-description">
                            Welcome Drinks
                            <br />
                            10:00 AM
                        </div>
                    </div>
                    <div className="bir004-activityn">
                        <img alt="Children balancing gifts on their heads"src={actp2} />
                        <div className="bir004-description">
                            Games & Activites
                            <br />
                            12:00 PM
                        </div>
                    </div>
                    <div className="bir004-activityn">
                        <img alt="Child posing with a rainbow prop in a photobooth" src={actp3}/>
                        <div className="bir004-description">
                            Cake Cutting
                            <br />
                            1:00 PM
                        </div>
                    </div>
                    <div className="bir004-activityn">
                        <img alt="Placeholder for cake cutting activity" src={actp4}/>
                        <div className="bir004-description">
                            Lunch Time
                            <br />
                            2:00 PM
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
        <img id="bir004-desrt" src={desrighttop} alt="" />
        <img id="bir004-deslm" src={desbottomleft} alt="" />
        <img id="bir004-actrt" src={actrt} alt="" />
        <img id="bir004-actrb" src={actrb} alt="" />
        <img id="bir004-deslt" src={deslt} alt="" />
        <img id="bir004-desrm" src={desrm} alt="" />
        <img id='bir004-actlb' src={actlb} alt="" />
    </section>
    </>
  )
}

export default Bir004_Destination