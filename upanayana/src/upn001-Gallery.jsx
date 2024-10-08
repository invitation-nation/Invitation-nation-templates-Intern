// import React from 'react'
// import age1 from './assets/upn001-gallery-section/age-1.jpeg'
// import age2 from './assets/upn001-gallery-section/age-2.jpeg'
// import age3 from './assets/upn001-gallery-section/age-3.jpeg'
// import age4 from './assets/upn001-gallery-section/age-4.jpg'
// import age5 from './assets/upn001-gallery-section/age-5.jpg'
// import age6 from './assets/upn001-gallery-section/age-6.jpg'
// import age7 from './assets/upn001-gallery-section/age-7.jpg'
// import age8 from './assets/upn001-gallery-section/age-8.jpg'
// import age9 from './assets/upn001-gallery-section/age-9.jpg'
// import age10 from './assets/upn001-gallery-section/age-10.jpeg'
// import age11 from './assets/upn001-gallery-section/age-11.jpeg'
// import './upn001-Gallery.css'





// function Gallery() {

//   const slider = document.querySelector(".items");
//   const slides = document.querySelectorAll(".item");
//   const button = document.querySelectorAll(".button");
//   const progressBar = document.querySelector(".progress-bar");
//   const progressText = document.querySelector(".progress-text");
  
//   let current = 0;
  
//   for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
//   }
  
//   slides.forEach((item, index) => {
//     item.addEventListener("click", () => {
//       if (index < current) {
//         gotoPrev();
//       } else if (index > current) {
//         gotoNext();
//       } else {
//         // If the clicked slide is the current slide, do nothing
//         return;
//       }
//     });
//   });
  
//   const updateProgressBar = () => {
//     const progress = ((current + 1) / slides.length) * 100;
//     progressBar.style.width = `${progress}%`;
//     progressText.textContent = `${current + 1} Year Old Amogha`;
//   };
  
//   function gotoPrev() {
//     current = current > 0 ? current - 1 : slides.length - 1;
//     updateClasses();
//   }
  
//   function gotoNext() {
//     current = current < slides.length - 1 ? current + 1 : 0;
//     updateClasses();
//   }
  
//   const updateClasses = () => {
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("active", "prev", "next");
//     }
  
//     slides[current].classList.add("active");
//     const prevIndex = current === 0 ? slides.length - 1 : current - 1;
//     const nextIndex = current === slides.length - 1 ? 0 : current + 1;
//     slides[prevIndex].classList.add("prev");
//     slides[nextIndex].classList.add("next");
  
//     updateProgressBar();
//   };
  
//   // Initial progress bar update
//   updateProgressBar();


//   return (

//     <div id="content">

//     <section id="upn001-gallery-section">
//         <div className="upn001-nimbus-container">
//           <div className="upn001-gallery-container">
            
//             <div className="upn001-items">
//               <div className="upn001-item active">
//                 <img src={age1} />
//               </div>
//               <div className="upn001-item next">
//                 <img src={age2} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age3} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age4} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age5} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age6} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age7} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age8} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age9} />
//               </div>
//               <div className="upn001-item">
//                 <img src={age10} />
//               </div>
//               <div className="upn001-item prev">
//                 <img src={age11} />
//               </div>
//               <div className="upn001-button-container">
//                 <div className="upn001-button"><i className="fas fa-angle-left"></i></div>
//                 <div className="upn001-button"><i className="fas fa-angle-right"></i></div>
//               </div>
//             </div>
//             <div className="upn001-progress-bar-container">
//               <div className="upn001-progress-bar"></div>
//             </div>
//             <div className="upn001-progress-text"></div>
//             <div className="upn001-gallery-caption">
//               <h2 className="upn001-gallerycap">Journey of Amogha</h2>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//   )
// }

// export default Gallery

import React, { useState, useEffect, useRef } from 'react';
import age1 from './assets/upn001-gallery-section/age-1.jpeg';
import age2 from './assets/upn001-gallery-section/age-2.jpeg';
import age3 from './assets/upn001-gallery-section/age-3.jpeg';
import age4 from './assets/upn001-gallery-section/age-4.jpg';
import age5 from './assets/upn001-gallery-section/age-5.jpg';
import age6 from './assets/upn001-gallery-section/age-6.jpg';
import age7 from './assets/upn001-gallery-section/age-7.jpg';
import age8 from './assets/upn001-gallery-section/age-8.jpg';
import age9 from './assets/upn001-gallery-section/age-9.jpg';
import age10 from './assets/upn001-gallery-section/age-10.jpeg';
import age11 from './assets/upn001-gallery-section/age-11.jpeg';
import './upn001-Gallery.css';

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  useEffect(() => {
    const updateProgressBar = () => {
      const progress = ((current + 1) / 11) * 100;
      setProgress(progress);
    };
    updateProgressBar();
  }, [current]);

  const gotoPrev = () => {
    setCurrent(current > 0 ? current - 1 : 10);
  };

  const gotoNext = () => {
    setCurrent(current < 10 ? current + 1 : 0);
  };

  const handleSlideClick = (index) => {
    if (index < current) {
      gotoPrev();
    } else if (index > current) {
      gotoNext();
    }
  };

  return (
    <section id="upn001-gallery-section">
      <div className="upn001-nimbus-container">
        <div className="upn001-gallery-container">
          <div className="upn001-items">
            {Array(11)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`upn001-item ${index === current ? 'active' : ''} ${
                    index === current - 1 ? 'prev' : ''
                  } ${index === current + 1 ? 'next' : ''}`}
                >
                  <img src={eval(`age${index + 1}`)} />
                </div>
              ))}
            <div className="upn001-button-container">
              <div className="upn001-button" onClick={gotoPrev}>
                <i className="fas fa-angle-left"></i>
              </div>
              <div className="upn001-button" onClick={gotoNext}>
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
          <div className="upn001-progress-bar-container">
            <div
              ref={progressBarRef}
              className="upn001-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div ref={progressTextRef} className="upn001-progress-text">
            {`${current + 1} Year Old Amogha`}
          </div>
          <div className="upn001-gallery-caption">
            <h2 className="upn001-gallerycap">Journey of Amogha</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;