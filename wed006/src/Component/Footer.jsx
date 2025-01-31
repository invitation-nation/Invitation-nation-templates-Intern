
import "./Footer.css";
import React from "react";
import Logo from '/src/assets/Group 2.svg'


export default function Footer() {
  return (
    <div className="main-section-footer">
      <div className="main-container-footer">
        <div className="footers-section">
          <div className="img-bckrnd-cont">
            <img src="" alt="" className="footer-bg" />
            <div className="text-overlay">
              <h1 className="Footer-heading">Wedding Invitation website by <span className="invit"><a href="https://invitationnation.in/"className="invit" style={{textDecoration:"none"}}>Invitationnation.in</a></span></h1>
              <a href="https://invitationnation.in/" className="invitation-lonk" style={{"textDecoration":"none", textAlign:"center", color:"black"}}>
              <img src={Logo} alt="" className="invi-logo" />
              <h1 className="main-footer">Invitation Nation</h1></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}