import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bir004-Milestone.css';
import mileel1 from '../assets/img/Bir004-Milestone/mileel1.svg';
import mileel2 from '../assets/img/Bir004-Milestone/mileel2.svg';
import mileel3 from '../assets/img/Bir004-Milestone/mileel3.svg';
import milestonepc1 from '../assets/img/Bir004-Milestone/milestonepc1.png';
import milestonepc2 from '../assets/img/Bir004-Milestone/milestonepc2.png';
import milestonepc3 from '../assets/img/Bir004-Milestone/milestonepc3.png';
import milestonepc4 from '../assets/img/Bir004-Milestone/milestonepc4.png';

const circlePositionsArray = [
  {
    circle1: 'translate(-50%, -175%)',
    circle2: 'translate(140%, -225%)',
    circle3: 'translate(60%, -10%)',
  },
  {
    circle1: 'translate(140%, -225%)',
    circle2: 'translate(240%, -115%)',
    circle3: 'translate(-50%, -175%)',
  },
  {
    circle1: 'translate(240%, -115%)',
    circle2: 'translate(110%, -15%)',
    circle3: 'translate(100%, -210%)',
  },
  {
    circle1: 'translate(60%, -10%))',
    circle2: 'translate(-50%, -175%)',
    circle3: 'translate(140%, -225%)',
  },
];

function Bir004_Milestone() {
  const [selectedPicture, setSelectedPicture] = useState('picture1');
  const [animating, setAnimating] = useState(false);
  const [circlePositions, setCirclePositions] = useState(circlePositionsArray[0]);

  const handleSelection = (picture, index) => {
    if (selectedPicture !== picture) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedPicture(picture);
        setAnimating(false);
        setCirclePositions(circlePositionsArray[index]);
      }, 500);
    }
  };

  return (
    <>
      <section id='bir004-milestone'>
        <div className='nimbus-container'>
          <div className="bir004-navmain">
            <div className='bir004-navbar'>
              <Link to='/'>HOME</Link>
              <Link to='/'>ABOUT</Link>
              <Link to='/'>GALLERY</Link>
              <Link to='/'>SCHEDULE</Link>
            </div>
          </div>
          <div className="bir004-milestone-main">
            <div id="bir004-milestone-hedding">
              <h1>Milestone</h1>
              <h2>Jenny's</h2>
            </div>
            <div id='ref' className="bir004-selection-main">
                <div  className="bir004-selections">
                <button 
                    onClick={() => handleSelection('picture1', 0)} 
                    className={selectedPicture === 'picture1' ? 'selected' : ''}
                >
                    3 years old jenny
                </button>
                <button 
                    onClick={() => handleSelection('picture2', 1)} 
                    className={selectedPicture === 'picture2' ? 'selected' : ''}
                >
                    5 years Birthday party
                </button>
                <button 
                    onClick={() => handleSelection('picture3', 2)} 
                    className={selectedPicture === 'picture3' ? 'selected' : ''}
                >
                    Teenage jenny
                </button>
                <button 
                    onClick={() => handleSelection('picture4', 3)} 
                    className={selectedPicture === 'picture4' ? 'selected' : ''}
                >
                    When she turned 20
                </button>
                </div>
                <div id='pics' className="bir004-pictures">
                {selectedPicture === 'picture1' && <img src={milestonepc1} alt="Picture 1" className={animating ? 'fade-out' : 'fade-in'} />}
                {selectedPicture === 'picture2' && <img src={milestonepc2} alt="Picture 2" className={animating ? 'fade-out' : 'fade-in'} />}
                {selectedPicture === 'picture3' && <img src={milestonepc3} alt="Picture 3" className={animating ? 'fade-out' : 'fade-in'} />}
                {selectedPicture === 'picture4' && <img src={milestonepc4} alt="Picture 4" className={animating ? 'fade-out' : 'fade-in'} />}
                </div>
            </div>
          </div>
        </div>
        <img src={mileel1} alt="" id='bir004-milestone-circle1' style={{ transform: circlePositions.circle1 }} />
        <img src={mileel2} alt="" id='bir004-milestone-circle2' style={{ transform: circlePositions.circle2 }} />
        <img src={mileel3} alt="" id='bir004-milestone-circle3' style={{ transform: circlePositions.circle3 }} />
      </section>
    </>
  );
}

export default Bir004_Milestone;