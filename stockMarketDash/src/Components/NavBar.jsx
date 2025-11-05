import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">📊 MarketView</div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Dashboard</Link>
        </li>
        <li>
          <a href="#search-section" onClick={closeMenu}>Search</a>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
