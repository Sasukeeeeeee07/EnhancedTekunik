import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Tekunik Logo" />
        </Link>
        
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? styles.active : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? styles.active : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname.includes('/services') ? styles.active : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? styles.active : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className={styles.requestQuote}>
          Request Quote
          <span className={styles.arrow}>↓</span>
        </Link>
      </div>
    </header>
  );
};

export default Header; 