import React, { useState, useEffect } from 'react';
import Nav from './wed007-Nav'
import Count from './Wed007_count'
import About from './wed007-about'
import Family from './wed007-family'  
import Celebration from './wed007-celebration'
import Wish from './wed007-wishes'
import Gallery from './wed007-gallery'
import Details from './wed007-details'
import Footer from './wed007-footer'
import Mobnavbar from './wed007-mobnavbar'
import Preloader from './wed007-preloader'

function Wed007_Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      setLoading(false);
      // Enable scrolling
      document.body.classList.remove('no-scroll');
    }, 6000); // Adjust the timeout duration to match the total animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <Nav />
          <Mobnavbar />
          <Count />
          <Family />
          <About />
          <Celebration />
          <Wish />
          <Gallery />
          <Details />
          <Footer />
        </>
      )}
    </>
  );
}

export default Wed007_Home