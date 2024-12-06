import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <a href="">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/nayana-weds-punith/about">About</Link>
        </li>
        <li>
          <Link to="/nayana-weds-punith/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/nayana-weds-punith/schedule">
            <a href="">Schedule</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
