import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Tekunik
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming ideas into digital excellence with innovative solutions tailored to your
            unique business needs.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <motion.div 
              className={styles.storyText}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                TekUnik is a believer of embracing change! We are one of the fastest
                growing digital marketing agencies based out of Mumbai serving globally.
              </p>
              <p>
                We offer the most effective multi-channel and multi-platform Internet
                marketing services that will help your brand, products and services reach
                their full marketing reach and potential.
              </p>
            </motion.div>

            <motion.div 
              className={styles.statsContainer}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.statsImage}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team collaboration" 
                />
                <div className={styles.experienceBadge}>
                  <span>10+ Years</span>
                  <span>of Excellence</span>
                </div>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Team Members</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>

          <div className={styles.valuesGrid}>
            {[
              {
                icon: '💡',
                title: 'Innovation',
                description: 'At the core of everything we do'
              },
              {
                icon: '🎯',
                title: 'Client Success',
                description: 'Our primary measure of achievement'
              },
              {
                icon: '📚',
                title: 'Continuous Learning',
                description: 'Adaptation and growth mindset'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                description: 'Ethical and sustainable practices'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.teamContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Team</h2>
            <p>
              We're a diverse team of thinkers, creators, and problem-solvers, united by our passion
              for innovation and excellence.
            </p>
          </motion.div>

          <div className={styles.teamGrid}>
            <motion.div 
              className={styles.joinTeam}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Join Our Team</h3>
              <p>
                We're always looking for talented individuals who share our passion for
                innovation and excellence. If you're interested in joining our team, we'd
                love to hear from you.
              </p>
              <motion.button
                className={styles.applyButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>

            <motion.div 
              className={styles.teamImage}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Team working together" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 