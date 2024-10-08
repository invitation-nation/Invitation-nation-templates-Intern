import React from 'react'
import './App.css'
import Loader from './upn001-Loader'

import Navbar from './upn001-Navbar'
import Count from './upn001-Count'
import Info from './upn001-Info'
import Rituals from './upn001-Rituals'
import Contact from './upn001-Contact'
import Gallery from './upn001-Gallery'

/*import gif from './img/hero-section/upanayana-preloader.gif'*/
import More from './upn001-More'
import Footer from './upn001-Footer'

 



function App() {


  return (
    <>

<Loader/>

    <Navbar/>

    <Count/>

    <Info/>

    <Gallery/>
    <Rituals/>
    
    <Contact/>

    <Footer/>
    
  
  
   
    
   
    </>
  )
}

export default App















      


/*
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader
  document.getElementById("preloader").style.display = "none";

  // Show the main content
  document.getElementById("content").style.display = "block";

  // Trigger your animation after showing the content
});

*/