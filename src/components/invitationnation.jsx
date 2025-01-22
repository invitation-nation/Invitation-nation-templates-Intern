import "./invitationnation.css"
import icon from "../assets/img/hou003-Invitationnation/hou003-Invitationnation-icon.svg"

function Invitation(){
    return(
        <>
        <section id="hou003-Invitation">
            <div className="nimbus-container">
                <div className="hou003-Invitation-container">
                    <p>
                        Wedding Invitation website by&nbsp;  
                        <a href="https://invitationnation.in">
                              Invitationnation.in
                        </a>
                    </p>
                    <img src= {icon} alt="invitationnation-icon" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Invitation