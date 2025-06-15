import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
 
          

         
      

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Tekunik. All rights reserved.
          </p>
        </div>
      
    </footer>
  );
};

export default Footer; 