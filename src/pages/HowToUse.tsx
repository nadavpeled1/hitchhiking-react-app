import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">How to Use the Website</Link>
        </li>
        <li className="nav-item">
          <Link to="/offer-ride">Offer a New Ride</Link>
        </li>
        <li className="nav-item">
          <Link to="/take-ride">Take a Ride</Link>
        </li>
      </ul>
      <h2>
        Welcome! this website will help our country to deal with the high trafic
        and the lack of good public transportation.
      </h2>
    </nav>
  );
};

export default Navbar;
