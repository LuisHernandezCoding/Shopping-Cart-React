import './Navbar.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Logo from '../images/Pizza.png';

const Navbar = ({ cartQuantity }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item animate__animated animate__delay animate__lightSpeedInLeft" href="/">
            <div className="is-size-3 has-text-centered has-text-weight-bold has-text-white is-flex is-flex-direction-row is-align-items-center">
              <img src={Logo} alt="Pizza Planet" className="image" />
              <span className="ml-4 has-shadow">Pizza Planet</span>
            </div>
          </a>
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            onKeyDown={() => {}}
            type="button"
            tabIndex={0}
            className={`navbar-burger burger is-rounded has-text-white animate__animated animate__delay animate__slideInRight
              ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu has-background-primary ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start animate__animated animate__delay animate__fadeInDown">
            <NavLink className="navbar-item has-text-white has-text-weight-bold is-size-5 has-shadow no-shadow-hover" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item has-text-white has-text-weight-bold is-size-5 has-shadow no-shadow-hover" to="/menu">
              Menu
            </NavLink>
            <NavLink className="navbar-item has-text-white has-text-weight-bold is-size-5 has-shadow no-shadow-hover" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="navbar-end animate__animated animate__delay animate__fadeInDown">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-white" to="/cart">
                  <strong className="is-size-5">
                    {cartQuantity || 0}
                  </strong>
                  <span className="icon">
                    <i className="fas fa-shopping-cart" />
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
};

export default Navbar;
