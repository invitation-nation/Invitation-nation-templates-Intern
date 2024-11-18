import React, { useState,useEffect } from 'react';
import './Bir004-Gallery.css';
import gallertbl from '../assets/img/Bir004-Gallery/gallerybl.svg';
import gallerybr from '../assets/img/Bir004-Gallery/gallerybr.svg';
import gallerytr from '../assets/img/Bir004-Gallery/gallerytr.svg';
import gallerytl from '../assets/img/Bir004-Gallery/gallerytl.svg';
import gallerttr1 from '../assets/img/Bir004-Gallery/gallerytr1.svg';
import gallert1 from '../assets/img/Bir004-Gallery/gallery1.png';
import gallert2 from '../assets/img/Bir004-Gallery/gallery2.png'; 
import gallert3 from '../assets/img/Bir004-Gallery/gallery3.png';
import gallerynext from '../assets/img/Bir004-Gallery/gallerynext.svg';
import gallerymoimg1 from '../assets/img/Bir004-Gallery/gallerymoimg1.png';
import gallerymoimg2 from '../assets/img/Bir004-Gallery/gallerymoimg2.png';
import gallerymoimg3 from '../assets/img/Bir004-Gallery/gallerymoimg3.png';
import gallerynavmob from '../assets/img/Bir004-Gallery/gallerynavmob.svg'
import Footer from './Bir004-Footer';


function Bir004_Gallery() {
  const [activeButton, setActiveButton] = useState(1);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photos, setPhotos] = useState([gallert1, gallert2, gallert3]);

  useEffect(() => {
    const updatePhotos = () => {
      if (window.innerWidth < 650) {
        setPhotos([gallerymoimg1, gallerymoimg2, gallerymoimg3]);
      } else {
        setPhotos([gallert1, gallert2, gallert3]);
      }
    };
    updatePhotos();
    window.addEventListener('resize', updatePhotos);

    return () => {
      window.removeEventListener('resize', updatePhotos);
    };
  }, []);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const handleNextClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  return (
    <>
      <section id='bir004-gallery'>
        <div id="dummy">
        <div className="nimbus-container">
          <div className="bir004-gallery-main">
            <h1>Gallery</h1>
            <div className="bir004-gallery-setsection">
              <button
                className={activeButton === 1 ? 'active' : ''}
                onClick={() => handleButtonClick(1)}
              >
                <span>FAMILY</span>
              </button>
              <button
                className={activeButton === 2 ? 'active' : ''}
                onClick={() => handleButtonClick(2)}
              >
                <span>FRIENDS</span>
              </button>
              <button
                className={activeButton === 3 ? 'active' : ''}
                onClick={() => handleButtonClick(3)}
              >
                <span>SINGLE</span>
              </button>
            </div>
            <div className="bir004-gallery-pictures-pc">
            <button className='bir004-gallery-prev' onClick={handlePrevClick} disabled={currentPhotoIndex === 0}>
              <img id='navbuttonprev' src={gallerynext} alt="" />
            </button>
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  className={`photo ${index === currentPhotoIndex ? 'active' : ''} ${index < currentPhotoIndex ? 'left' : ''}`}
                />
              ))}
              
              <button className='bir004-gallery-next' onClick={handleNextClick} disabled={currentPhotoIndex === photos.length - 1}>
                <img id='navbuttonnext' src={gallerynext} alt="" />
              </button>
            </div>
            <div className="bir004-gallery-mobile-nav">
            <button className='bir004-gallery-mo-prev' onClick={handlePrevClick} disabled={currentPhotoIndex === 0}>
              <img id='navbuttonprev' src={gallerynavmob} alt="" />
            </button>
            <button className='bir004-gallery-mo-next' onClick={handleNextClick} disabled={currentPhotoIndex === photos.length - 1}>
                <img id='navbuttonnext' src={gallerynavmob} alt="" />
              </button>
            </div>
          </div>
        </div>
        <img src={gallertbl} alt="" id="bir004-gallery-bl" />
        <img src={gallerybr} alt="" id="bir004-gallery-br" />
        <img src={gallerytr} alt="" id="bir004-gallery-tr" />
        <img src={gallerytl} alt="" id="bir004-gallery-tl" />
        <img src={gallerttr1} alt="" id="bir004-gallery-tr1" />
        </div>
        <Footer/>
      </section>
    </>
  );
}

export default Bir004_Gallery;