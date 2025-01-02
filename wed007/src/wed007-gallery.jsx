import React from 'react';
import './wed007-gallery.css';
import momentleftrose from './assets/img/wed007-gallery/gallery-left-rose.svg';
import momentrightrose from './assets/img/wed007-gallery/gallery-right-rose.svg';
import image1 from './assets/img/wed007-gallery/image1.png';
import image2 from './assets/img/wed007-gallery/image2.png';
import image3 from './assets/img/wed007-gallery/image3.png';
import image4 from './assets/img/wed007-gallery/image4.png';
import mapright from './assets/img/wed007-hero/map-rose-right.svg';
import mapleft from './assets/img/wed007-hero/map-rose-left.svg';
import galsidedeco from './assets/img/wed007-gallery/gallery-decoration.svg';

function Gallery() {
  return (
    <>
      <section id='wed007-gallery-section'>
        <div className='nimbus-container'>
          <img id='wed007-gallery-lsidedeco' src={galsidedeco} alt="" />
          <img id='wed007-gallery-rsidedeco' src={galsidedeco} alt="" />
          <div className='wed007-gallery'>
            <div className='wed007-gallery-moments'>
              <img src={momentleftrose} alt="" />
              <span className='wed007-moments'>Moments to Remember</span>
              <img src={momentrightrose} alt="" />
            </div>
            <div className='wed007-gallery-image'>
              <div className='wed007-gallery-imgl'>
                <div className='wed007-image-container'>
                  <img id='wed007-image1' src={image1} alt="" />
                  <div className='wed007-image-info'>
                    <span className='wed007-family'> Family Photos</span>
                    <a href="">
                      <span className='wed007-see'> See more photos</span>
                    </a>
                  </div>
                </div>
                <div className='wed007-image-container'>
                  <img id='wed007-image3' src={image3} alt="" />
                  <div className='wed007-image-info'>
                    <span className='wed007-family'> Engagement Photos</span>
                    <a href="">
                      <span className='wed007-see'> See more photos</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='wed007-gallery-imgr'>
                <div className='wed007-image-container'>
                  <img id='wed007-image2' src={image2} alt="" />
                  <div className='wed007-image-info'>
                    <span className='wed007-family'> Friends Photos</span>
                    <a href="">
                      <span className='wed007-see'> See more photos</span>
                    </a>
                  </div>
                </div>
                <div className='wed007-image-container'>
                  <img id='wed007-image4' src={image4} alt="" />
                  <div className='wed007-image-info'>
                    <span className='wed007-family'> Sangeet Photos</span>
                    <a href="">
                      <span className='wed007-see'> See more photos</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a className='wed007-gallery-open' href="">
              <img id='wed007-left' src={mapleft} alt="" />
              <span id='wed007-button1'>Upload photos</span>
              <img id='wed007-right' src={mapright} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;