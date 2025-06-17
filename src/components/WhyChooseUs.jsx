import React from 'react';
import styles from './WhyChooseUs.module.css';
import Counter from './Counter';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🔧',
      title: 'Industry-leading expertise in latest technologies'
    },
    {
      icon: '🛠️',
      title: 'Dedicated support and maintenance'
    },
    {
      icon: '⚡',
      title: 'Customized solutions for your specific needs'
    },
    {
      icon: '📊',
      title: 'Transparent communication and reporting'
    }
  ];

  const stats = [
    {
      number: 500,
      suffix: '+',
      label: 'Projects Completed'
    },
    {
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction'
    },
    {
      number: 50,
      suffix: '+',
      label: 'Expert Team Members'
    },
    {
      number: 10,
      suffix: '+',
      label: 'Years Experience'
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.decorativeElements}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.dots}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.subtitle}>Why Choose Tekunik?</span>
            <h2 className={styles.title}>
              We combine innovation with reliability to deliver exceptional technology solutions
            </h2>
            <p className={styles.description}>
              that drive business growth and success.
            </p>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <span className={styles.featureText}>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Team collaboration" 
                className={styles.mainImage}
              />
              <div className={styles.imageDots}></div>
              <div className={styles.imageCircle}></div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>
                <Counter end={stat.number} duration={2000} suffix={stat.suffix} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 