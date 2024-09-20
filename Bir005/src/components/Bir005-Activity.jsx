import '../App.css'
import './Bir005-Activity.css'
import pic1 from '../assets/img/Bir005-Activity/pic1.png'
import pic2 from '../assets/img/Bir005-Activity/pic2.png'
import pic3 from '../assets/img/Bir005-Activity/pic3.png'
import pic4 from '../assets/img/Bir005-Activity/pic4.png'
import puzz from '../assets/img/Bir005-Activity/puzzles.svg'
function Bir005_Activity() {
return (
    <>
        <section id= "bir005-activity">
        <div className="nimbus-container">
        <div className="bir005-act-container">
            <div className="bir005-title">
                <img src={puzz} alt="" />
                <span>Activities for the day</span>
                <img src={puzz} alt="" />
            </div>
            <div className="bir005-carousel">
                <div className="bir005-arrow">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="bir005-activities">
                    <div className="bir005-activityn">
                        <img alt="Children painting at a table" src={pic1}/>
                        <div className="bir005-description">
                            Party Painting
                            <br />
                            12 am
                        </div>
                    </div>
                    <div className="bir005-activityn">
                        <img alt="Children balancing gifts on their heads"src={pic2} />
                        <div className="bir005-description">
                            Balancing Act
                            <br />
                            2 pm
                        </div>
                    </div>
                    <div className="bir005-activityn">
                        <img alt="Child posing with a rainbow prop in a photobooth" src={pic3}/>
                        <div className="bir005-description">
                            Fun Photobooth
                            <br />
                            5 pm
                        </div>
                    </div>
                    <div className="bir005-activityn">
                        <img alt="Placeholder for cake cutting activity" src={pic4}/>
                        <div className="bir005-description">
                            Cake Cutting
                            <br />
                            6 pm
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        </div>
        </section>
    </>
);
}

export default Bir005_Activity