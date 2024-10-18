


import React, { useState, useEffect } from 'react';
import gif from './assets/upn001-hero-section/upanayana-preloader.gif';
import './upn001-Loader.css'; // CSS for preloader and content


export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

   
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
 
    document.documentElement.style.overflowY = 'hidden';

   
    const timer = setTimeout(() => {
        document.documentElement.style.overflowY = 'auto';
    }, 4000); 

    
    return () => {
        clearTimeout(timer);
        document.documentElement.style.overflowY = 'auto'; 
    };
}, []);

  return (
    <>
      {loading && (
        <div id="preloader">
          
          <div className="spinner">
            <img src={gif} alt="Loading..." />
          </div>
          <span className="loader-msg">Loading template</span>
        </div>
      )}
  
      
    </>
  );
}

