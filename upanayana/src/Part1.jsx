

import React from 'react'
import Navbar from './upn001-Navbar'
import Count from './upn001-Count'
import Info from './upn001-Info'
import Rituals from './upn001-Rituals'
import Contact from './upn001-Contact'
import Gallery from './upn001-Gallery'
import Loader from './upn001-Loader'
/*import gif from './img/hero-section/upanayana-preloader.gif'*/
import './upn001-part1.css'

import Footer from './upn001-Footer'


function Part1() {
  return (
    <div>
       <>
      
  

      <Navbar />

      <Count/>

    <Info/>

    <Gallery/>
    <Rituals/>
    
    <Contact/>

    <Footer/>
    
    </>
    </div>
  )
}

export default Part1
