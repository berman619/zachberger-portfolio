import React, { useState } from 'react';
import '../styles/Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <button className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </button>
      <ul className={`nav-list${isOpen ? " open" : ""}`}>
        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`} onClick={handleLinkClick}>
          <Link to="/" className="nav-link">
            About Me
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === "/portfolio" ? "active" : ""}`} onClick={handleLinkClick}>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`} onClick={handleLinkClick}>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className={`nav-item ${location.pathname === "/resume" ? "active" : ""}`} onClick={handleLinkClick}>
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
