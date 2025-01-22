import "./wishesform.css"
import flowerbar1 from "../assets/img/hou003-WishesForm/hou003-wishesform-flowerbar.svg"
import flowerbar2 from "../assets/img/hou003-WishesForm/hou003-wishesform-flowerbar.svg"
import flowerbar3 from "../assets/img/hou003-WishesForm/hou003-wishesform-flowerbar.svg"
import flowerbar4 from "../assets/img/hou003-WishesForm/hou003-wishesform-flowerbar.svg"
import floraldrop from "../assets/img/hou003-WishesForm/hou003-wishesform-floraldrop.svg"
import butterflies from "../assets/img/hou003-WishesForm/hou003-wishesform-butterflies.svg"
import leftleaves from "../assets/img/hou003-WishesForm/hou003-wishesform-leftleaves.svg"
import rightleaves from "../assets/img/hou003-WishesForm/hou003-wishesform-rightleaves.svg"

function WishesForm(){
    return(
        <>
        <section id="hou003-WishesForm">
            <div className="hou003-wishesform-beginflowers">
                <img src= {flowerbar1} alt="flowerbar-firsthalf" />
                <img src= {flowerbar2} alt="flowerbar-secondhalf" />
            </div>
            <div className="hou003-wishesform-leftdecor">
                <img src= {floraldrop} alt="floral-design" className="hou003-wishesform-floral" />
                <img src= {butterflies} alt="butterflies" className="hou003-wishesform-butterflies" />
            </div>
            <div className="nimbus-container">
                <div className="hou003-wishesform-wishescontainer">
                    <img src= {leftleaves} alt="leaves-on-left" />
                    <h3>Send your Wishes</h3>
                    <img src= {rightleaves} alt="leaves-on-right" />
                    <div className="hou003-wishesform-entry">
                        <form className="hou003-wishesform-form">
                            <div className="hou003-wishesform-fullname"> 
                                <input type="text" id="fullName" name="fullName" className="hou003-wishesform-input" />
                            </div>
                            <div className="hou003-wishesform-wishes">
                                <input type="text" id="message" name="message" rows="4" className="hou003-wishesform-wishbox"/>
                            </div>
                            <div className="hou003-wishesform-submit">
                                <button type="submit" className="hou003-wishesform-submitbutton">Send Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hou003-wishesform-endflowers">
                <img src= {flowerbar3} alt="flowerbar-firsthalf" />
                <img src= {flowerbar4} alt="flowerbar-secondhalf" />
            </div>
        </section>
        </>
    );
}

export default WishesForm