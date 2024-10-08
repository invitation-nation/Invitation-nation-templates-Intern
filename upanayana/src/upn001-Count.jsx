// import React from 'react'
// import './upn001-Count.css'




// function Count() {

//   var countdownTo = new Date("Sep 28,2024 12:00:00").getTime();
//   var int = setInterval(countdown);
//   function countdown() {
  
//     var curTime = new Date().getTime();
//     var timeDiff = countdownTo - curTime;
//     var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//     var hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//     var secs = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hrs;
//     document.getElementById("mins").innerHTML = mins;
//     document.getElementById("secs").innerHTML = secs;
//     if (timeDiff < 0) {
//       clearInterval(int);
//       document.getElementById("cd-time").innerHTML = "Its Partyyy Timeee!!!";
//     }
//   }
  


//   return (
//     <div id="content">

//     <section id="upn001-count-down-section">
//         <div className="upn001-nimbus-container">
//           <div className="upn001-count-down-container">
//             <div className="upn001-count-down-title">The event starts in</div>

//             <div className="upn001-count-down-elements">
//               <div className="upn001-count-down-element">
//                 <span id="days" className="upn001-count-down-number">00</span>
//                 <span className="upn001-count-down-text">Days</span>
//               </div>
//               <div className="upn001-count-down-element">
//                 <span id="hours" className="upn001-count-down-number">00</span>
//                 <span className="upn001-count-down-text">Hours</span>
//               </div>
//               <div className="upn001-count-down-element">
//                 <span id="mins" className="upn001-count-down-number">00</span>
//                 <span className="upn001-count-down-text">Mins</span>
//               </div>
//               <div className="upn001-count-down-element">
//                 <span id="secs" className="upn001-count-down-number">00</span>
//                 <span className="upn001-count-down-text">Secs</span>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>
//       </div>

//   )
// }

// export default Count

import React, { useState, useEffect } from 'react';
import './upn001-Count.css';

function Count() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [countdownTo, setCountdownTo] = useState(new Date("Sep 28, 2025 12:00:00").getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const curTime = new Date().getTime();
      const timeDiff = countdownTo - curTime;
      if (timeDiff < 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMins(0);
        setSecs(0);
      } else {
        setDays(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMins(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
        setSecs(Math.floor((timeDiff % (1000 * 60)) / 1000));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTo]);

  return (
    <div id="content">
      <section id="upn001-count-down-section">
        <div className="upn001-nimbus-container">
          <div className="upn001-count-down-container">
            <div className="upn001-count-down-title">The event starts in</div>
            <div className="upn001-count-down-elements">
              <div className="upn001-count-down-element">
                <span className="upn001-count-down-number">{days}</span>
                <span className="upn001-count-down-text">Days</span>
              </div>
              <div className="upn001-count-down-element">
                <span className="upn001-count-down-number">{hours}</span>
                <span className="upn001-count-down-text">Hours</span>
              </div>
              <div className="upn001-count-down-element">
                <span className="upn001-count-down-number">{mins}</span>
                <span className="upn001-count-down-text">Mins</span>
              </div>
              <div className="upn001-count-down-element">
                <span className="upn001-count-down-number">{secs}</span>
                <span className="upn001-count-down-text">Secs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {countdownTo < new Date().getTime() && (
        <div id="cd-time">Its Partyyy Timeee!!!</div>
      )}
    </div>
  );
}

export default Count;