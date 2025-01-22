import "./ammenities.css"
import contact from "../assets/img/hou003-Ammenities/hou003-ammenities-phone.svg"
import location from "../assets/img/hou003-Ammenities/hou003-ammenities-location.svg"
import schedule from "../assets/img/hou003-Ammenities/hou003-ammenities-schedule.svg"
import gallery from "../assets/img/hou003-Ammenities/hou003-ammenities-gallery.svg"

function Facilities(){
    return(
        <>
        <section id="hou003-Facilities">
            <div className="nimbus-container">
                <div className="hou003-facilities-container">
                    <div className="hou003-facilities-contact">
                        <img src= {contact} alt="contact-icon" />
                        <h5>Contact</h5>
                    </div>
                    <div className="hou003-facilities-location">
                        <img src= {location} alt="location-icon" />
                        <h5>Location</h5>
                    </div>
                    <div className="hou003-facilities-schedule">
                        <img src= {schedule} alt="schedule-icon" />
                        <h5>Schedule</h5>
                    </div>
                    <div className="hou003-facilities-gallery">
                        <img src= {gallery} alt="gallery-icon" />
                        <h5>Gallery</h5>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Facilities