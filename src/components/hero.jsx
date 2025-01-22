import React from 'react';
import '../App.css';
import '../components/hero.css';
import ganeshaidol from "../assets/img/hou003-Hero/ganesha-idol.svg";
import houseimage from "../assets/img/hou003-Hero/hero-house.svg";
import bananatree from "../assets/img/hou003-Hero/hero-banana-tree.svg";
import leafbegin from "../assets/img/hou003-Hero/hero-leaves-begin.png"
import leaf from "../assets/img/hou003-Hero/hero-leaf-single.png"
import leafend from "../assets/img/hou003-Hero/hero-leaves-end.png"
import butterfly from "../assets/img/hou003-Hero/hero-butterflies.svg"

function Hero() {
  return (
   <>
   <section id='hou003-Hero'>
      <div className="nimbus-container">
      <div className='hou003-hero-butterfly'>
          <img src= {butterfly} alt="butterflies" />
        </div>
          <div className='hou003-hero-leaves'>
            <img src= {leafbegin} alt="leaves" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leaf} alt="single leaf" />
            <img src= {leafend} alt="leaves end" />
          </div>
          <div className='hou003-hero-content'>
            <div className="hou003-hero-ganeshaidol">
              <img src = {ganeshaidol} alt="ganesha" />
            </div>
            <div className='hou003-hero-text'>
              <h4>Inviting you to Grihpravesh Ceremony & Pooja</h4>
              <h1>SAGAR VILLA</h1>
              <p>Invited By</p>
              <h3>Mr. Aryan Singh & Family</h3>
              <h5>Jan | 25 | 2025</h5>
            </div>
          </div>
        <img src = {bananatree} alt="bananatreeright" className='hou003-right-banana-tree-image' style={{ transform: 'scaleX(-1)' }} />
        <div>
          <img src = {houseimage} alt="house" className='hou003-house-kalasha-image'/>
        </div>
        <img src = {bananatree} alt="bananatreeleft" className='hou003-left-banana-tree-image' />
      </div>
   </section>
   </>
  );
}

export default Hero;
