import './wishes.css';
import React, { useState } from 'react';
import leftarrow from "../assets/img/hou003-Wishes/hou003-wishes-leftarrow.svg";
import rightarrow from "../assets/img/hou003-Wishes/hou003-wishes-rightarrow.svg";
import flowerImage from "../assets/img/hou003-Wishes/hou003-wishes-flower.svg";
import personphoto from "../assets/img/hou003-Wishes/hou003-wishes-personpicture.svg"
import tree from "../assets/img/hou003-Wishes/hou003-wishes-tree.svg"
import beginflowers1 from "../assets/img/hou003-Wishes/hou003-Wishes-beginflowers1.svg";
import beginflowers2 from "../assets/img/hou003-Wishes/hou003-Wishes-beginflowers2.svg";
import beginflowers3 from "../assets/img/hou003-Wishes/hou003-Wishes-beginflowers2.svg";


function Wishes() {
    const wishesData = [
        { name: "A", message: "Wishing you all the love and happiness!" },
        { name: "B", message: "May your new journey be filled with joy and laughter!" },
        { name: "C", message: "Congratulations on this beautiful day!" },
        { name: "D", message: "Cheers to a lifetime of love and happiness!" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? wishesData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === wishesData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="hou003-Wishes">
            <div className='hou003-Wishes-begin'>
                <img src= {beginflowers1} alt="flowers-1" />
                <img src= {beginflowers2} alt="flowers-2" />
                <img src= {beginflowers3} alt="flowers-3" />
            </div>
            <div className="nimbus-container">
                <div className='hou003-Wishes-content'>
                    <div className='hou003-Wishes-familynamebuttonscontainer'>
                        <div className='hou003-Wishes-tofamily'>
                            <img src= {tree} alt="tree-image" className='hou003-Wishes-tree' />
                            <h5>Warm Wishes for the Mr. <br/>Aryan Singh & Family</h5>
                        </div>
                        <div className="hou003-Wishes-buttonContainer">
                            <button onClick={handlePrev} className="hou003-Wishes-navButton">
                                <img src={leftarrow} alt='left-arrow' className='hou003-Wishes-leftarrow'/>
                            </button>
                            <span className="hou003-Wishes-wishCounter">
                                {currentIndex + 1} of {wishesData.length}
                            </span>
                            <button onClick={handleNext} className="hou003-Wishes-navButton">
                                <img src={rightarrow} alt='right-arrow' className='hou003-Wishes-rightarrow'/>
                            </button>
                        </div>
                    </div>
                    <div className="hou003-Wishes-wishBox">
                      <div className='hou003-Wishes-titlecombo'>
                        <img src= {personphoto} alt='person-photo' className='hou003-Wishes-PersonPhoto'/>
                        <h3>{wishesData[currentIndex].name}</h3>
                      </div>
                      <img src={flowerImage} alt="flower" className="hou003-Wishes-flower" />
                      <p>{wishesData[currentIndex].message}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Wishes;
