import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Main pages/Homepage";
import Gallery from "./Main pages/Gallery";
import Preloader from "./Components/Preloader";
import About from "./Main pages/about";
import SchedulePage from "./Main pages/SchedulePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : null}
      <Router>
        <div className={`main-app ${loading ? "hidden" : ""}`}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/nayana-weds-punith/gallery" element={<Gallery />} />
            <Route path="/nayana-weds-punith/about" element={<About />} />
            <Route
              path="/nayana-weds-punith/schedule"
              element={<SchedulePage />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
