import React, { useState, useEffect } from 'react';
import Hero from "./components/Bir005-Hero";
import Mobnav from "./components/Bir005-mobilenavbar";
import Countdown from './components/Bir005-Countdown';
import Banner from "./components/Bir005-Banner";
import Destination from "./components/Bir005-Destination";
import Activity from "./components/Bir005-Activity";
import Wishes from "./components/Bir005-Wishes";
import Gallery from './components/Bir005-Gallery';
import Footer from './components/Bir005-Footer';
import Preloader from './components/Bir005-Preloader';

function Bir005_mainpage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed to match the preloader animation duration

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <Hero />
      <Mobnav />
      <Countdown />
      <Banner />
      <Destination />
      <Activity />
      <Wishes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Bir005_mainpage;