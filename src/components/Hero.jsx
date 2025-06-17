import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            We believe in a
            <span className={styles.highlight}> unique approach to</span>
            <br className={styles.desktopBreak} />
            <span className={styles.gradientText}>each business.</span>
          </h1>
          
          <p className={styles.description}>
            Transforming ideas into digital excellence with innovative solutions
            tailored to your unique business needs.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>GET STARTED</button>
            <button className={styles.secondaryButton}>Discuss Your Project</button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support Available</span>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.decorativeElements}>
            <div className={styles.pieChart}></div>
            <div className={styles.codeBlock}></div>
            <div className={styles.triangle}></div>
            <div className={styles.plus}>+</div>
            <div className={styles.circle}></div>
            <div className={styles.dots}></div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBorder}>
              <motion.img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Modern business architecture"
                className={styles.heroImage}
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <motion.div 
              className={styles.floatingCard}
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={styles.cardIcon}>📈</div>
              <div className={styles.cardText}>Digital Excellence</div>
            </motion.div>

            <motion.div 
              className={`${styles.floatingCard} ${styles.floatingCard2}`}
              initial={{ y: 0 }}
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className={styles.cardIcon}>🚀</div>
              <div className={styles.cardText}>Fast Development</div>
            </motion.div>

            <motion.div 
              className={`${styles.floatingCard} ${styles.floatingCard3}`}
              initial={{ y: 0 }}
              animate={{ y: [-15, 5, -15] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className={styles.cardIcon}>🎯</div>
              <div className={styles.cardText}>Custom Solutions</div>
            </motion.div>

            <motion.div 
              className={`${styles.floatingCard} ${styles.floatingCard4}`}
              initial={{ y: 0 }}
              animate={{ y: [5, -15, 5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <div className={styles.cardIcon}>💡</div>
              <div className={styles.cardText}>Innovative Ideas</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 