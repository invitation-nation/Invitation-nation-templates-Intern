import React, { useEffect, useState } from 'react';
import spinner from '../assets/preloader/spinner.gif'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the duration as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      {isLoading ? (
        <div id="preloader" style={{ textAlign: 'center', padding: '50px' }}>
          <img src={spinner} alt="Loading..." />
        </div>
      ) : (
        <div id="content">
          {/* Replace with your actual main content */}
        </div>
      )}
    </div>
  );
};

export default Preloader;