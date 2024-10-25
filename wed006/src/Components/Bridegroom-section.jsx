import "./Bride.css";
import React from "react";
import Union from "/src/assets/Union.svg";
import Bride from "/src/assets/WhatsApp Image 2024-05-23 at 08.24.16_cf0f4554.jpg";
import Groom from "/src/assets/IMG-20240523-WA0001.jpg";
import Backgroundimg from "/src/assets/couple-bg.svg";

export default function BrideGroom() {
  return (
    <>
      <section id="couple-section">
        <div className="nimbus-container">
          <div className="couple-container">
            <div className="couple-box">
              <div className="couple-box-bg">
                <img src={Union} alt="" />
              </div>
              <h3 className="couple-name">Pooja</h3>
              <span className="couple-so">D/o Lorem ipsum dolor sit</span>
              <span className="couple-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda ad expedita suscipit molestiae consequatur
                aliquam, recusandae totam.
              </span>
              <div className="couple-img">
                <img src={Bride} alt="" />
              </div>
            </div>
            <div className="couple-box">
              <div className="couple-box-bg">
                <img src={Union} alt="" />
              </div>
              <h3 className="couple-name">Bhuvan</h3>
              <span className="couple-so">S/o Lorem ipsum dolor sit.</span>
              <span className="couple-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda ad expedita suscipit molestiae consequatur
                aliquam, recusandae totam.
              </span>
              <div className="couple-img">
                <img src={Groom} alt="" />
              </div>
            </div>
          </div>
          <div className="couple-more">
            <a href="" className="couple-btn">
              More About The Couple
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
