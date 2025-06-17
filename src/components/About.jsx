import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const FloatingImage = ({ src, className, duration = 20, delay = 0 }) => {
  return (
    <motion.img
      src={src}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.3, 0.8, 0.3],
        y: [0, -20, 0],
        x: [0, 20, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      alt=""
    />
  );
};

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.backgroundImages}>
        <FloatingImage 
          src="/images/tech-pattern-1.svg" 
          className={styles.bgImage1}
          duration={25}
        />
        <FloatingImage 
          src="/images/tech-pattern-2.svg" 
          className={styles.bgImage2}
          duration={30}
          delay={2}
        />
        <FloatingImage 
          src="/images/tech-pattern-3.svg" 
          className={styles.bgImage3}
          duration={20}
          delay={1}
        />
      </div>

      <div className={styles.decorativeElements}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.dots}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.subtitle}>
            Building digital excellence with passion and innovation
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.storySection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Our Story</h3>
            <p>
              Founded in 2020, Tekunik has grown from a small tech startup to a leading digital solutions provider. 
              Our journey is marked by continuous innovation, dedication to excellence, and a deep commitment to 
              helping businesses thrive in the digital age.
            </p>
          </motion.div>

          <motion.div 
            className={styles.valuesGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h4>Innovation</h4>
              <p>Pushing boundaries with cutting-edge solutions</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h4>Excellence</h4>
              <p>Delivering outstanding quality in every project</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h4>Partnership</h4>
              <p>Building lasting relationships with our clients</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h4>Efficiency</h4>
              <p>Optimizing processes for better results</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.statsSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Expert Team Members</p>
            </div>
            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.missionSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative digital solutions that drive growth, 
              enhance efficiency, and create lasting value. We're committed to delivering 
              excellence through technology while maintaining the highest standards of 
              quality and customer service.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 