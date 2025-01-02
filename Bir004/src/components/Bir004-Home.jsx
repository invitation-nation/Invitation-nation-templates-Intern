import { useState, useEffect } from 'react';
import Hero from './Bir004-hero';
import Monavbar from './Bir004-monavbar';
import Countdown from './Bir004-Countdown';
import Destination from './Bir004-Destination';
import Wishes from './Bir004-Wishes';
import Gallery from './Bir004-Gallery';
import Preloader from './Bir004-Preloader';
import './Bir004-Home.css'; // Import the CSS file for transitions

function Bir004_Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // Adjust the timeout duration to match the total animation time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      document.querySelector('.content').classList.add('loaded');
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="content">
          <Hero />
          <Monavbar />
          <Countdown />
          <Destination />
          <Wishes />
          <Gallery />
        </div>
      )}
    </>
  );
}

export default Bir004_Home;