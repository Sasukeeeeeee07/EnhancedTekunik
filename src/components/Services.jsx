import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web solutions that combine stunning design with powerful functionality.',
      features: [
        'Responsive website design',
        'E-commerce development',
        'Custom web applications',
        'Website maintenance & support'
      ]
    },
    {
      icon: '🎯',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to boost your online presence and drive growth.',
      features: [
        'SEO optimization',
        'Social media marketing',
        'PPC advertising',
        'Email marketing campaigns'
      ]
    },
    {
      icon: '✍️',
      title: 'Content Writing',
      description: 'Compelling content that engages your audience and tells your brand story.',
      features: [
        'Blog & article writing',
        'Website content',
        'SEO copywriting',
        'Social media content'
      ]
    },
    {
      icon: '🎨',
      title: 'Brand Building',
      description: 'Comprehensive brand development to establish a strong market presence.',
      features: [
        'Brand strategy',
        'Visual identity design',
        'Brand guidelines',
        'Brand messaging'
      ]
    }
  ];

  const extras = [
    {
      icon: '🖥️',
      title: 'Web Hosting',
      description: 'Shared Hosting to Private Server whatever you demand.'
    },
    {
      icon: '🌐',
      title: 'Domain Buying',
      description: 'Guide you in procurement of right domain name for you.'
    },
    {
      icon: '🛡️',
      title: 'SSL Certificate',
      description: 'Let your user know, that there identity is safe on your website.'
    },
    {
      icon: '🔧',
      title: 'Website Management',
      description: 'Everything to keep your site up and running.'
    }
  ];

  return (
    <>
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Our Services</h2>
            <p className={styles.subtitle}>
              We offer comprehensive digital solutions to help your business thrive in the modern
              digital landscape.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{service.icon}</span>
                    <div className={styles.iconBackground}></div>
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardDecoration}>
                  <div className={styles.dots}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.triangle}></div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.decorativeElements}>
            <div className={styles.bigCircle}></div>
            <div className={styles.smallDots}></div>
            <div className={styles.bigTriangle}></div>
          </div>
        </div>
      </section>

      <section className={styles.extras}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Few <span className={styles.highlight}>Extras</span>
            </h2>
            <p className={styles.subtitle}>
              Apart from the various digital service, we also take care of the basics so that everything is under one roof.
            </p>
          </div>

          <div className={styles.extrasGrid}>
            {extras.map((extra, index) => (
              <div key={index} className={styles.extraCard}>
                <div className={styles.extraIconWrapper}>
                  <span className={styles.extraIcon}>{extra.icon}</span>
                </div>
                <h3 className={styles.extraTitle}>{extra.title}</h3>
                <p className={styles.extraDescription}>{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 