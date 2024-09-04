import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css"; // Import custom CSS

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/how-to-use">
              How to Use the Website
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/offer-ride">
              Offer a New Ride
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/take-ride">
              Take a Ride
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
