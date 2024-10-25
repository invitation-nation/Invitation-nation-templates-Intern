import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BackgroundMusic from "/src/assets/krishnaflu-pa2luqdy-37180.mp3";

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
          <Link to="/">
            <a href="">About</a>
          </Link>
        </li>
        <li>
          <Link to="/nayana-weds-punith/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/">
            <a href="">Schedule</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
