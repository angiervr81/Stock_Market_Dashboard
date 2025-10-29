import React from "react";

function NavBar(){
    return (
        <nav className="navbar">
            <h2 className="logo">📈 Stock Dashboard</h2>
            <ul className="nav-links">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;