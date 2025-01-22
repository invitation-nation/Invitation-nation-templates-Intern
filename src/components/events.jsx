import './events.css';
import leaf1 from "../assets/img/hou003-Events/hou003-events-leaf1.svg";
import '../App.css';
import sathyanarayanpooja from "../assets/img/hou003-Events/hou003-events-sathyanarayanpooja.svg"
import reactanglebox from "../assets/img/hou003-Events/hou003-events-boxrectangle.svg"
import bouquet1 from "../assets/img/hou003-Events/hou003-events-bouquet1.svg"
import gruhapravesha from "../assets/img/hou003-Events/hou003-events-gruhapravesha.svg"
import bouquet2 from "../assets/img/hou003-Events/hou003-events-bouquet2.svg"
import bhojana from "../assets/img/hou003-Events/hou003-events-bhojana.svg"
import bouquet3 from "../assets/img/hou003-Events/hou003-events-bouquet3.svg"
import leaves from "../assets/img/hou003-Events/hou003-events-leafs.svg"
import line from "../assets/img/hou003-Events/hou003-events-line.svg"
import parking from "../assets/img/hou003-Events/hou003-events-parking.svg"
import elevator from "../assets/img/hou003-Events/hou003-events-elevator.svg"

function Events(){
    return(
        <>
        <section id='hou003-Events'>
            <div className='hou003-events-leavesdiv'>
                <img src= {leaves} alt="leaves-hanging" className='hou003-events-leaves' />
            </div>
            <div className='nimbus-container'>
                <h3 className='hou003-events-inviting'>We request your presence on this Occasion</h3>
            <div className='hou003-events-content'>

                <div className='hou003-events-box1'>

                    <div className='hou003-events-box1rectangle'>

                        <img src= {sathyanarayanpooja} alt='sathyanarayanpooja-image' className='hou003-events-sathyanarayanpooja'/>

                        <h3>Sri Sathyanarayan Pooja</h3>

                        <h7>5:30 AM -6:30 AM</h7>
                    </div>

                </div>

                <img src= {bouquet1} alt='bouquet-1' className='hou003-events-bouquet1'/>

                <div className='hou003-events-box2'>
                    <div className='hou003-events-box2rectangle'>

                        <img src= {gruhapravesha} alt='gruhapravesha-image' className='hou003-events-gruhapravesha'/>

                        <h3>Gruha Pravesha</h3>

                        <h7>7:00 AM Onwards</h7>
                    </div>
                </div>

                <img src= {bouquet2} alt='bouquet-2' className='hou003-events-bouquet2'/>

                <div className='hou003-events-box3'>
                    <div className='hou003-events-box3rectangle'>

                        <img src= {bhojana} alt='bhojana-image' className='hou003-events-bhojana'/>

                        <h3>Bhojana</h3>

                        <h7>12:30 Noon Onwards</h7>

                    </div>
                </div>
            </div>
            <img src= {bouquet3} alt='bouquet-3' className='hou003-events-bouquet3'/>

            <div className='hou003-events-facility'>
                <div className='hou003-events-facility-text'>
                    <h3>Facility That Will Be</h3>

                    <h7>Available</h7>
                </div>

                <img src= {line} alt='vertical line' className='hou003-events-line'/>

                <div className='hou003-events-facilities'>
                    <div className='hou003-events-facilities-parking'>
                        <img src= {parking} alt="parking-icon" className='hou003-events-parking' />

                        <h7>Parking</h7>
                    </div>

                    <div className='hou003-events-facilities-elevator'>
                        <img src= {elevator} alt='elevator-icon' className='hou003-events-elevator' />

                        <h7>Elevator</h7>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default Events