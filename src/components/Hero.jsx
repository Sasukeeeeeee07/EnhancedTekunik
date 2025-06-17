import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className={styles.title}
            variants={titleVariants}
          >
            <motion.span variants={textVariants}>We believe in a</motion.span>
            <motion.span 
              className={styles.highlight}
              variants={highlightVariants}
            > unique approach to</motion.span>
            <br className={styles.desktopBreak} />
            <motion.span 
              className={styles.gradientText}
              variants={highlightVariants}
            >each business.</motion.span>
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            variants={textVariants}
          >
            Transforming ideas into digital excellence with innovative solutions
            tailored to your unique business needs.
          </motion.p>

          <motion.div 
            className={styles.buttonGroup}
            variants={textVariants}
          >
            <motion.button 
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED
            </motion.button>
            <motion.button 
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Project
            </motion.button>
          </motion.div>

          <motion.div 
            className={styles.stats}
            variants={containerVariants}
          >
            <motion.div 
              className={styles.statItem}
              variants={statVariants}
            >
              <motion.span 
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                500+
              </motion.span>
              <motion.span 
                className={styles.statLabel}
                variants={textVariants}
              >
                Projects Delivered
              </motion.span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              variants={statVariants}
            >
              <motion.span 
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                98%
              </motion.span>
              <motion.span 
                className={styles.statLabel}
                variants={textVariants}
              >
                Client Satisfaction
              </motion.span>
            </motion.div>
            <motion.div 
              className={styles.statItem}
              variants={statVariants}
            >
              <motion.span 
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                24/7
              </motion.span>
              <motion.span 
                className={styles.statLabel}
                variants={textVariants}
              >
                Support Available
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

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