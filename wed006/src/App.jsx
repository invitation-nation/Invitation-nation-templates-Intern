import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Main pages/Homepage";
import Gallery from "./Main pages/Gallery";
import Preloader from "./Components/Preloader";

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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
