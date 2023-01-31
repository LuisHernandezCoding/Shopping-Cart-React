import './Navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar has-background-info" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            onKeyDown={() => {}}
            type="button"
            tabIndex={0}
            className={`navbar-burger burger is-rounded has-text-white ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu has-background-info ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item has-text-white" href="/">
              Home
            </a>
            <a className="navbar-item has-text-white" href="/store">
              Store
            </a>
            <a className="navbar-item has-text-white" href="/contact">
              Contact
            </a>
            <a className="navbar-item has-text-white" href="/about">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
