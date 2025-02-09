import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const NavBar = () => {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/" className="home-link">
            <i className="fa-solid fa-house home-icon"></i>
            Home</Link>
          </li>
          <li className="report-link">
            <Link to="/report" >
            <i className="fa-regular fa-clock timer-icon"></i>
            Report</Link>
          </li>
        </ul>
  
        </nav>
    )
}

export default NavBar;