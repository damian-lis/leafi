import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Leafi logo" />
          </Link>
        </div>

        <nav className="mainMenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            <li key={'cart'}>
              <Link to="/cart">
                Your Cart <i className="fas fa-shopping-basket"></i>
              </Link>
            </li>
            <li key={'register'} className="hideOnMobile">
              <Link to="/registration">Register</Link>
            </li>
            <li key={'login'}>
              <Link to="/login">
                Login
                <i className="fas fa-user-circle"></i>
              </Link>
            </li>
            <li key={'mobileMenu'} className="mobileMenu">
              <span>
                <i className="fas fa-bars"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
