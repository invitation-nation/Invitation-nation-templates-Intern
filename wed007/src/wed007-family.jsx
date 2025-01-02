import React from 'react'
import './wed007-family.css';
import fambride from './assets/img/wed007-family/bride.svg';
import famgroom from './assets/img/wed007-family/groom.svg';
import fambridepic from './assets/img/wed007-family/bride-family.png';
import famgroompic from './assets/img/wed007-family/groom-family.png';
import famdash from './assets/img/wed007-family/family-dash.svg';
import famlongdash from './assets/img/wed007-family/family-longdash.svg';
import familyside from './assets/img/wed007-family/family-side.svg';
import familyheadingfooter from './assets/img/wed007-family/family-heading-footer.svg';
function wed007_family() {
  return (
    <>
    <section id="wed007-family">
        <div className="nimbus-container">
            <div className="wed007-family-main">
                <div className="wed007-family-main-heading">
                    <h1>Meet our Family Members</h1>
                    <img src={familyheadingfooter} alt="" />
                </div>
                <div className="wed007-family-main-content">
                    <div className="wed007-family-content">
                        <div className="wed007-family-content1">
                            <h3>Bride</h3>
                            <img src={fambride} alt="" />
                        </div>
                        <div className="wed007-family-smldash">
                            <img src={famdash} alt="" />
                        </div>
                        <div className="wed007-family-content2">
                            <img src={fambridepic} alt="" className='wed007-family-smalldash'/>
                        </div>
                        <div className="wed007-family-longdash">
                            <img src={famlongdash} alt="" />
                        </div>
                        <h2>Mr. Rohan Kumar’s Family</h2>
                    </div>
                    <div className="wed007-family-content">
                        <div className="wed007-family-content1">
                            <img src={famgroom} alt="" />   
                            <h3>Groom</h3>
                        </div>
                        <div className="wed007-family-smldash">
                            <img src={famdash} alt="" />
                        </div>
                        <div className="wed007-family-content2">
                            <img src={famgroompic} alt="" />
                        </div>
                        <div className="wed007-family-longdash">
                            <img src={famlongdash} alt="" />
                        </div>
                        <h2>Mr. Raj Gupta’s Family</h2>
                    </div>
                </div>
            </div>
        </div>
        <img src={familyside} alt="" id='wed007-family-lm'/>
    </section>
    </>
  )
}

export default wed007_family