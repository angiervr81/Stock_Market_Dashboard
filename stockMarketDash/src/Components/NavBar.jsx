import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">📊 MarketView</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
        </div>


      
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#list">Stocks</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
