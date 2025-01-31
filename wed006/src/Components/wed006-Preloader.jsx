import React, { useEffect } from "react";

import "./wed006-Preloader.css";

const Preloader = () => {
  useEffect(() => {
    const handleLoad = () => {
      
      const hidePreloader = () => {
        const preloader = document.getElementById("preloader");
        if (preloader) preloader.style.display = "none";
      };

      
      const addAnimationClasses = () => {
        const addAnimation = (id, delay) => {
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.classList.add("animation");
          }, delay);
        };

        addAnimation("preloader-blue", 0); 
        addAnimation("preloader-red", 500); 
        addAnimation("preloader-purple", 1000); 
      };

      // Hide preloader and add animation classes with delay
      setTimeout(hidePreloader, 5000); // Hide preloader after 0ms
      addAnimationClasses(); // Add animation classes immediately
    };

    window.addEventListener("load", handleLoad);

    // Handle the case where the load event doesn't fire (e.g., when resources are cached)
    setTimeout(handleLoad, 5000); // Wait 5 seconds

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div>
      <div
        id="preloader"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <img src="" alt="" className="line" />
      <div id="preloader" className="preloader">
        {/* Add your preloader content here */}
      </div>
      <div id="preloader-blue" className="preloader-blue"></div>
      <div id="preloader-red" className="preloader-red"></div>
      <div id="preloader-purple" className="preloader-purple"></div>
    </div>
    </div>
  );
};

export default Preloader;
