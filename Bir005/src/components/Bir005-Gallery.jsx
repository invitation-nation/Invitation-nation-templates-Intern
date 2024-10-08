import { useEffect, useState } from 'react';
import '../App.css'
import './Bir005-Gallery.css'
import family from '../assets/img/Bir005-Gallery/family.png'
import group from '../assets/img/Bir005-Gallery/groupphotos.png'
import single from '../assets/img/Bir005-Gallery/singlephotos.png'

const photos = [
  { src: family, text: 'FAMILY PHOTOS' },
  { src: group, text: 'GROUP PHOTOS' },
  { src: single, text: 'SINGLE PHOTOS' }
];
function Bir005_Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Change photo every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <>
      <section id='bir005-Gallery'>
        <div className='nimbus-container'>
          <h1 className='bir005-gal-head'>Gallery</h1>
        <div
        className="bir005-gallery-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="bir005-gallery-slide">
            <div className='bir005-familypic'>
              <img src={photo.src} alt={`Family ${index + 1}`} />
              <div className="bir005-picbutton">
                <span>{photo.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </section>
    </>
  )
}

export default Bir005_Gallery




{/* <div >
            <h1>Gallery</h1>
            <div className='bir005-familypic'>
              <img src={family} alt="" />
              <div className="bir005-picbutton">
                <span>FAMILY PHOTOS</span>
              </div>
            </div>
          </div> */}