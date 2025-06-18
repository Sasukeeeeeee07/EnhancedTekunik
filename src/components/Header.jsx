import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Tekunik Logo" />
        </Link>

        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.open : ''}`}>
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

          <div className={styles.quoteContainer}>
            <button 
              className={styles.requestQuote}
              onClick={toggleDropdown}
            >
              Request Quote
              <span className={`${styles.arrow} ${isDropdownOpen ? styles.arrowUp : ''}`}>↓</span>
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <Link 
                  to="/quote/website" 
                  className={styles.dropdownItem}
                  onClick={closeDropdown}
                >
                  <span className={styles.itemIcon}>🌐</span>
                  Website Development
                </Link>
                <Link 
                  to="/quote/mobile" 
                  className={styles.dropdownItem}
                  onClick={closeDropdown}
                >
                  <span className={styles.itemIcon}>📱</span>
                  Mobile Development
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 