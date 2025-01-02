import React, { useEffect, useRef } from 'react';
import './Bir005-Preloader.css';
import preteddy from '../assets/img/Bir005-Preloader/PreTeddy.png';
import tiltimage from '../assets/img/Bir005-Preloader/tiltimage.png';

function Bir005_Preloader() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = (event) => {
      if (event.animationName === 'growImage') {
        imgRef.current.style.opacity = 0;
        setTimeout(() => {
          imgRef.current.src = tiltimage;
          imgRef.current.style.opacity = 1;
        }, 10); // Adjust the delay as needed
      }
    };

    const imgElement = imgRef.current;
    imgElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      imgElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <>
      <section id='bir005-preloader'>
          <div className="nimbus-container1">
            <div id='bir005-container2'>
            <div className="bir005-circle" >
              <img ref={imgRef} src={preteddy} alt="" />
            </div>
            <h1 id='bir005-loading'>HELLO..</h1>
            </div>
          </div>
      </section>
    </>
  )
}

export default Bir005_Preloader;