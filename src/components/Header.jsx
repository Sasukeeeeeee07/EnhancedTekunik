import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Tekunik Logo" />
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li><a href="/" className={styles.active}>Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <button className={styles.requestQuote}>
          Request Quote
          <span className={styles.arrow}>↓</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 