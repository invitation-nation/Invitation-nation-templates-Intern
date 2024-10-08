


import React, { useState, useEffect } from 'react';
import gif from './assets/upn001-hero-section/upanayana-preloader.gif';
import './upn001-Loader.css'; // CSS for preloader and content


export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (replace with actual loading logic if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds (you can adjust the delay)
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div id="preloader">
          {/* Preloader graphic - replace this with your GIF */}
          <div className="spinner">
            <img src={gif} alt="Loading..." />
          </div>
          <span className="loader-msg">Loading template</span>
        </div>
      )}
  
      
    </>
  );
}
// import React, { useState, useEffect } from 'react';
// import gif from './assets/upn001-hero-section/upanayana-preloader.gif';
// import './upn001-Loader.css'; // CSS for preloader and content
// import Part1 from './Part1';

// export default function Preloader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay (replace with actual loading logic if needed)
//     const timer = setTimeout(() => {
//       setLoading(false); // Hide preloader after 3 seconds (you can adjust the delay)
//     }, 2000);

//     // Cleanup the timer if the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && (
//         <div id="preloader">
//           {/* Preloader graphic */}
//           <div className="spinner">
//             <img src={gif} alt="Loading..." />
//           </div>
//           <span className="loader-msg">Loading template...</span>
//         </div>
//       )}

//       {/* Only render Part1 when loading is complete */}
//       {!loading && <Part1 />}
//     </>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import gif from './assets/upn001-hero-section/upanayana-preloader.gif';
// import './upn001-Loader.css'; // CSS for preloader and content
// import Part1 from './Part1';

// export default function Preloader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay (replace with actual loading logic if needed)
//     const timer = setTimeout(() => {
//       setLoading(false); // Hide preloader after 3 seconds (you can adjust the delay)
//     }, 3000);

//     // Cleanup the timer if the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* Display the preloader while loading */}
//       {loading && (
//         <div id="preloader">
//           <div className="spinner">
//             <img src={gif} alt="Loading..." />
//           </div>
//           <span className="loader-msg">Loading template...</span>
//         </div>
//       )}

//       {/* Render content immediately after loading completes */}
//       {!loading && (
//         <div className="content">
//           <Part1 />
//         </div>
//       )}
//     </>
//   );
// }
