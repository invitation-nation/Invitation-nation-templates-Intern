import React from 'react'
import './wed007-about.css'
import lefttop from './assets/img/wed007-about/decoration-left-top.svg'
import underlinedesign from './assets/img/wed007-about/underline.svg'
import raj from './assets/img/wed007-about/raj.png'
import riya from './assets/img/wed007-about/riya.png'
import moreleft from './assets/img/wed007-about/more-rose-left.svg'
import moreright from './assets/img/wed007-about/more-rose-right.svg'
import rightbottom from './assets/img/wed007-about/decoration-right-bottom.svg'
function about() {
  return (
    <>
    <section id='wed007-about-section'>
    
        <div className='nimbus-container'>
        <div className='wed007-decorationup'> 
            <img src={lefttop} alt="" />
            </div>
            <div className='wed007-aboutcontent'>
                
            <div className='wed007-content'>
                <span id='wed007-line1'> Celebrating love with </span>
                <span id='wed007-line2'> The happy couple </span>
                <img id='wed007-line' src={underlinedesign} alt="" />
            </div>
            <div className='wed007-info'>
            <div  className='wed007-his'>
              <div className='wed007-his-info'>
                <span id='wed007-name'> Raj </span>
                <span id='wed007-parent' > C/o Pankaj Gupta </span>
                <span id='wed007-detail'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </span>
              </div>
              <img id='wed007-img' src={raj} alt="" />
            </div>
            <div  className='wed007-her'>
            <img id='wed007-img' src={riya} alt="" />
              <div className='wed007-her-info'>
                <span id='wed007-name'> Riya </span>
                <span id='wed007-parent' > C/o Rohan kumar </span>
                <span id='wed007-detail'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </span>
              </div>
              </div>
            </div>
            
            <div className='wed007-morebutton'>
            <a className='wed007-more' href="/Story"> 
              <img id='wed007-moreleft' src={moreleft} alt="" />
                <span id='wed007-morebutton'> More about the couple </span>
                <img id='wed007-moreright' src={moreright} alt="" />
            </a>
            </div>
              <div id='wed007-rightbottom'>
              <img  src={rightbottom} alt="" />
              </div>
              </div>
            

            </div>
        
    </section>

    </>
  )
}

export default about