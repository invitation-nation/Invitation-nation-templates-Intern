import { useState } from 'react';
import '../App.css'
import './Bir005-Photogallery.css'; // Create a CSS file for styling
import p1 from '../assets/img/Bir005-Photogallery/pgpic1.png'
import p2 from '../assets/img/Bir005-Photogallery/pgpic2.png'
import p3 from '../assets/img/Bir005-Photogallery/pgpic3.png'
import p4 from '../assets/img/Bir005-Photogallery/pgpic4.png'
import p5 from '../assets/img/Bir005-Photogallery/pgpic5.png'
import p6 from '../assets/img/Bir005-Photogallery/pgpic6.png'
import p7 from '../assets/img/Bir005-Photogallery/pgpic7.png'
import p8 from '../assets/img/Bir005-Photogallery/pgpic8.png'
const photos = [
    { src: p1, alt: 'Photo 1', info:'Ethan’s first photoshoot', date:'2.05.22' },
    { src: p2, alt: 'Photo 2', info:'Ethan’s first steps', date:'5.01.24' },
    { src: p3, alt: 'Photo 3', info:'Ethan with papa', date:'9.03.24' },
    { src: p4, alt: 'Photo 4', info:'Ethan with mumma', date:'8.04.22' },
    { src: p5, alt: 'Photo 5', info:'Ethan and his sister', date:'2.05.24' },
    { src: p6, alt: 'Photo 6', info:'Ethan’s first Painting', date:'10.02.24' },
    { src: p7, alt: 'Photo 7', info:'Playing with friends', date:'9.04.24' },
    { src: p8, alt: 'Photo 8', info:'Ethan with Nia', date:'14.05.24' }
  ];
  

function Bir005_Photogallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + photos.length) % photos.length);
  };

return (
    <>
        <section id='bir005-photogallery'>
            <div className='nimbus-container'>
                <div className="bir005-photo-gallery">
                    <div className="bir005-photos">
                        {photos.slice(currentIndex, currentIndex + 4).map((photo, index) => (
                            <div key={index} className="bir005-photo-item">
                                {index % 2 === 0 ? 
                                <div>
                                    <p>{photo.info}</p>
                                    <p>{photo.date}</p>
                                </div>
                                : null}
                                <img src={photo.src} alt={photo.alt} />
                                {index % 2 !== 0 ? 
                                <div>
                                    <p>{photo.info}</p>
                                    <p>{photo.date}</p>
                                </div>: null}
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
                    <button onClick={handleNext} disabled={currentIndex + 4 >= photos.length}>Next</button>
                </div>
            </div>
        </section>
    </>
);
}

export default Bir005_Photogallery;