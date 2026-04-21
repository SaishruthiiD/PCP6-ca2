import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Dashboard" },
    { path: "/favorites", label: "Bookmarked Goals" },
  ];

  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          {/* Fitness themed icon */}
          <span className="logo-icon">💪</span>
          <span className="logo-text">FitTrack Pro</span>
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
