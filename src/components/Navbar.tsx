import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/how-to-use">How to Use the Website</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/offer-ride">Offer a New Ride</Link>
        </li>
        <li className="nav-item">
          <Link to="/take-ride">Take a Ride</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
