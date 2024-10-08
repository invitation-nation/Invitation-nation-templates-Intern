import React from 'react';
import { Link } from 'react-router-dom';
import lf from './assets/upn001-about-section/leaf.svg';
import lfh from './assets/upn001-about-section/leaf-thread.svg';
import rlm from './assets/upn001-ritual-section/ritual-leaf-mobile.svg'
import mobile from './assets/upn001-about-section/mobile-leaf.svg'
import './upn001-More.css';
import naandhi from './assets/upn001-about-section/naandhi.svg';
import uthagashanthi from './assets/upn001-about-section/uthaga shanthi.svg';
import yagnopaveetha from './assets/upn001-about-section/yagnopaveetha.svg';
import kumaara from './assets/upn001-about-section/kumaara.svg';
import brahmopadesha from './assets/upn001-about-section/brahmopadesha.svg';
import suryadarshanam from './assets/upn001-about-section/surya-darshanam.svg';
import aarali from './assets/upn001-about-section/aarali.svg';
import bhikshakaranam from './assets/upn001-about-section/bhikshakaranam.svg';
import abhivanthanam from './assets/upn001-about-section/abhivanthanam.svg';

const rituals = [
  {
    title: 'Naandhi',
    image: naandhi,
    text: 'This ceremony is performed to obtain the blessings of Amogha\'s ancestors prior to the Upanayanam ceremony',
  },
  {
    title: 'Uthaga Shanthi',
    image: uthagashanthi,
    text: 'For the purification of the mind, body and protection of the child, all the deities are invoked in water through chanting of many mantras.',
  },
  {
    title: 'Yagnopaveetha Dhaaranam',
    image: yagnopaveetha,
    text: 'The sacred thread is placed across the child\'s left shoulder by his father. The sacred thread consists of three strands signifying Brahma, Vishnu, and Shiva.',
  },
  {
    title: 'Kumaara Bhojanam',
    image: kumaara,
    text: 'Amogha is served food along with another brahmachari boy, helping him adjust to the life of Brahmacharya.',
  },
  {
    title: 'Brahma Upadesham',
    image: brahmopadesha,
    text: 'The Gayatri Mantra is a supreme prayer that protects those who recite it. The child\'s father, becoming his guru, whispers this powerful Mantra in his ears.',
  },
  {
    title: 'Surya Darshanam',
    image: suryadarshanam,
    text: 'Amogha seeks blessings from the Sun God, by looking at the Sun through a peep hole between his palms.',
  },
  {
    title: 'Arali Dharana',
    image: aarali,
    text: 'A twig from the peepal tree is placed into Amogha\'s right hand, signifying his entry into Brahmacharya. Brahma, Vishnu, and Rudra are considered to reside in the Peepal tree.',
  },
  {
    title: 'Bhiksha Karanam',
    image: bhikshakaranam,
    text: 'The child symbolically asks for alms of rice from his mother and other women, teaching him to be humble and control his ego.',
  },
  {
    title: 'Abhivathanam',
    image: abhivanthanam,
    text: 'Amogha seeks blessings of the elders present by saluting them on their feet with sashtaanga namaskaram.',
  },
];

function RitualLeaf({ ritual, index }) {
  // Determine if the index is odd or even for alternate tilting
  const isEven = index % 2 === 0;
  const tiltClass = isEven ? 'tilt-left' : 'tilt-right';

  // Alternate between the thread classes
  const threadClass1 = isEven ? 'upn001-leaf-thread-1' : 'upn001-leaf-thread-3';
  const threadClass2 = isEven ? 'upn001-leaf-thread-2' : 'upn001-leaf-thread-4';

  return (
    <div className={`upn001-ritual-leaf ${tiltClass}`}>
      <div className="upn001-ritual-page-2">
        <img id="pcleaf" src={lf} alt="" />
        <div class="rituals-box-mobile">
        <img id="mobileleaf" src={mobile} alt="" />

        <div className="upn001-ritual-page-box">
       
          <h3 className="upn001-ritual-page-title">{ritual.title}</h3>
          <div className="upn001-ritual-page-img">
            <div className="upn001-overlay"></div>
            <img src={ritual.image} alt="pic" />
          </div>
          <p className="upn001-ritual-page-text">{ritual.text}</p>
        </div>
        {/* Apply alternate thread classes */}
        <div className={threadClass1}>
          <img src={lfh} alt="" />
        </div>
        <div className={threadClass2}>
          <img src={lfh} alt="" />
        </div>
        </div>
      </div>
      </div>
      
     
  );
}

function More() {
  return (
    
    <div className="upn001-morediv">
      <header className='header'>
      <nav className="upn001-main-nav">
        <ul className="upn001-main-nav-list">
          <li>
            <Link to="/" className="upn001-main-nav-link">Home</Link>
          </li>
        </ul>
        <a
          href="https://maps.app.goo.gl/1JVS9soKK1UZvSCq6"
          className="upn001-hero-btn"
        >
          Event Location
        </a>
      </nav>
      </header>
      <div id="upn001-hero-section">
        <div className="upn001-nimbus-container">
          <div className="upn001-hero-container">
            <h2 className="upn001-hero-title">Explore the true meaning of each ritual</h2>
            <div className="upn001-rituals-box">
              <div className="upn001-ritual-page-1">
                <div className="upn001-ritual-leaf ">
                  <img id="pcleaf" src={lf} alt="" />
                </div>
                <div class="rituals-box-mobile">
                <img id="mobileleaf" src={mobile} alt="" />
                </div>
                <p className="upn001-ritual-heading">
                  Explore the steps in the ceremony that lead to Amogha being welcomed into the fold of knowledge and Brahmacharya
                </p>
                <div className="upn001-leaf-thread-3">
                  <img src={lfh} alt="" />
                </div>
                <div className="upn001-leaf-thread-4">
                  <img src={lfh} alt="" />
                </div>
              </div>
              {/* Map through the rituals and pass the index */}
              {rituals.map((ritual, index) => (
                <RitualLeaf key={index} ritual={ritual} index={index} />
              ))}
              <div className="upn001-ritual-leaf">
                <img id="pcleaf" src={lf} alt="" />
                <div class="rituals-box-mobile">
                <img id="mobileleaf" src={mobile} alt="" />
                <div className="upn001-ritual-page-box-last">
                  <Link to="/" className="button">Go Back Home</Link>
                </div>
                
              </div>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        
    
  );
}

export default More;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import lf from './assets/upn001-about-section/leaf.svg';
// import lfh from './assets/upn001-about-section/leaf-thread.svg';
// import './upn001-More.css';
// import naandhi from './assets/upn001-about-section/naandhi.svg';
// import uthagashanthi from "./assets/upn001-about-section/uthaga shanthi.svg";
// import yagnopaveetha from "./assets/upn001-about-section/yagnopaveetha.svg";
// import kumaara from "./assets/upn001-about-section/kumaara.svg";
// import brahmopadesha from "./assets/upn001-about-section/brahmopadesha.svg";
// import suryadarshanam from "./assets/upn001-about-section/surya-darshanam.svg";
// import aarali from "./assets/upn001-about-section/aarali.svg";
// import bhikshakaranam from "./assets/upn001-about-section/bhikshakaranam.svg";
// import abhivanthanam from "./assets/upn001-about-section/abhivanthanam.svg";

// const rituals = [
  
//   {
//     title: 'Naandhi',
//     image: naandhi,
//     text: 'This ceremony is performed to obtain the blessings of Amogha\'s ancestors prior to the Upanayanam ceremony',
//   },
//   {
//     title: 'Uthaga Shanthi',
//     image: uthagashanthi,
//     text: 'For the purification of the mind, body and protection of the child, all the deities are invoked in water through chanting of many mantras.',
//   },
//   {
//     title: 'Yagnopaveetha Dhaaranam',
//     image: yagnopaveetha,
//     text: 'The sacred thread is placed across the child\'s left shoulder by his father. The sacred thread consists of three strands signifying Brahma, Vishnu, and Shiva.',
//   },
//   {
//     title: 'Kumaara Bhojanam',
//     image: kumaara,
//     text: 'Amogha is served food along with another brahmachari boy, helping him adjust to the life of Brahmacharya.',
//   },
//   {
//     title: 'Brahma Upadesham',
//     image: brahmopadesha,
//     text: 'The Gayatri Mantra is a supreme prayer that protects those who recite it. The child\'s father, becoming his guru, whispers this powerful Mantra in his ears.',
//   },
//   {
//     title: 'Surya Darshanam',
//     image: suryadarshanam,
//     text: 'Amogha seeks blessings from the Sun God, by looking at the Sun through a peep hole between his palms.',
//   },
//   {
//     title: 'Arali Dharana',
//     image: aarali,
//     text: 'A twig from the peepal tree is placed into Amogha\'s right hand, signifying his entry into Brahmacharya. Brahma, Vishnu, and Rudra are considered to reside in the Peepal tree.',
//   },
//   {
//     title: 'Bhiksha Karanam',
//     image: bhikshakaranam,
//     text: 'The child symbolically asks for alms of rice from his mother and other women, teaching him to be humble and control his ego.',
//   },
//   {
//     title: 'Abhivathanam',
//     image: abhivanthanam,
//     text: 'Amogha seeks blessings of the elders present by saluting them on their feet with sashtaanga namaskaram.',
//   },
// ];

// function RitualLeaf({ ritual }) {
//   return (
//     <div className="upn001-ritual-leaf">
        

//       <div className="upn001-ritual-page-2">
//         <img src={lf} alt="" />
//         <div className="upn001-ritual-page-box">
//           <h3 className="upn001-ritual-page-title">{ritual.title}</h3>
//           <div className="upn001-ritual-page-img">
//             <div className="upn001-overlay"></div>
//             <img src={ritual.image} alt="pic" />
//           </div>
//           <p className="upn001-ritual-page-text">{ritual.text}</p>
//         </div>
//         <div className="upn001-leaf-thread-3">
//           <img src={lfh} alt="" />
//         </div>
//         <div className="upn001-leaf-thread-4">
//           <img src={lfh} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function More() {
//   return (
//     <div className="upn001-morediv">
//       <nav className="upn001-main-nav">
//         <ul className="upn001-main-nav-list">
//           <li>
//             <Link to="/" className="upn001-main-nav-link">Home</Link>
//           </li>
//         </ul>
//         <a
//           href="https://maps.app.goo.gl/1JVS9soKK1UZvSCq6"
//           className="upn001-hero-btn"
//         >
//           Event Location
//         </a>
//       </nav>

//       <div id="upn001-hero-section">
//         <div className="upn001-nimbus-container">
//           <div className="upn001-hero-container">
//             <h2 className="upn001-hero-title">Explore the true meaning of each ritual</h2>
//             <div className="upn001-rituals-box">
//             <div className="upn001-ritual-page-1">
//         <div className="upn001-ritual-leaf ritual-element-1">
//           <img src={lf} alt="" />
//         </div>
//         <p className="upn001-ritual-heading">
//           Explore the steps in the ceremony that lead to Amogha being welcomed into the fold of knowledge and Brahmacharya
//         </p>
//         <div className="upn001-leaf-thread-1">
//           <img src={lfh} alt="" />
//         </div>
//         <div className="upn001-leaf-thread-2">
//           <img src={lfh} alt="" />
//         </div> 
//       </div> 
//               {rituals.map((ritual, index) => (
//                 <RitualLeaf key={index} ritual={ritual} />
//               ))}
//               <div id='upn001-leaf'>
//               <img src={lf} alt="" />
//               <div className="upn001-ritual-page-box-last">
              
//                 <Link to="/" className="button"> Go Back Home </Link>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default More;


