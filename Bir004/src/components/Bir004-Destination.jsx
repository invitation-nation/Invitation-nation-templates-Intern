import './bir004-Destination.css'
import destinationpic from '../assets/img/Bir004-Destination/destination-pic.png' 
import desbottomleft from '../assets/img/Bir004-Destination/desbottomleft.svg'
import desrighttop from '../assets/img/Bir004-Destination/desrighttop.svg'
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
        </div>
        <img id="bir004-desrt" src={desrighttop} alt="" />
        <img id="bir004-deslb" src={desbottomleft} alt="" />
    </section>
    </>
  )
}

export default Bir004_Destination