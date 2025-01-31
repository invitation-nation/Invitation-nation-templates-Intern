import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/nayana-weds-punith/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/nayana-weds-punith/gallery"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/nayana-weds-punith/schedule"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
