import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ServiceDetail.module.css';

const services = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Creating powerful, scalable, and beautiful web solutions that drive business growth',
    description: 'We specialize in creating custom web solutions that combine stunning design with powerful functionality. Our team of experienced developers works with the latest technologies to deliver websites and applications that exceed expectations.',
    expertise: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Web Application Development',
      'CMS Development',
      'API Integration'
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PHP', icon: '🔷' }
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We analyze your requirements and create a comprehensive development strategy.',
        icon: '🎯'
      },
      {
        title: 'Design & Prototyping',
        description: 'Creating intuitive interfaces and user experiences that engage.',
        icon: '🎨'
      },
      {
        title: 'Development',
        description: 'Building robust, scalable solutions using cutting-edge technologies.',
        icon: '💻'
      },
      {
        title: 'Testing & Launch',
        description: 'Rigorous testing and smooth deployment of your web solution.',
        icon: '🚀'
      }
    ],
    bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    accentColor: '#4361EE'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Strategic digital marketing solutions to boost your online presence and drive growth',
    description: 'We help businesses thrive in the digital landscape through comprehensive marketing strategies that deliver measurable results.',
    expertise: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Pay-Per-Click Advertising',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: [
      { name: 'Google Analytics', icon: '📊' },
      { name: 'SEO Tools', icon: '🔍' },
      { name: 'Social Media', icon: '📱' },
      { name: 'Email Platforms', icon: '📧' }
    ],
    process: [
      {
        title: 'Strategy Development',
        description: 'Creating a customized digital marketing plan aligned with your goals.',
        icon: '📝'
      },
      {
        title: 'Implementation',
        description: 'Executing campaigns across various digital channels.',
        icon: '🎯'
      },
      {
        title: 'Monitoring',
        description: 'Tracking performance and making data-driven optimizations.',
        icon: '📈'
      },
      {
        title: 'Reporting',
        description: 'Detailed analysis and insights on campaign performance.',
        icon: '📊'
      }
    ],
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    accentColor: '#00A651'
  },
  'content-writing': {
    title: 'Content Writing',
    subtitle: 'Engaging content that tells your story and converts visitors into customers',
    description: 'Our expert content team crafts compelling narratives that engage your audience and drive conversions while maintaining your brand voice.',
    expertise: [
      'Website Content',
      'Blog Posts',
      'Social Media Content',
      'Technical Writing',
      'Copywriting',
      'Content Strategy'
    ],
    technologies: [
      { name: 'SEO Writing', icon: '📝' },
      { name: 'Content Management', icon: '📚' },
      { name: 'Analytics', icon: '📊' },
      { name: 'Research Tools', icon: '🔍' }
    ],
    process: [
      {
        title: 'Research',
        description: 'Understanding your industry, audience, and objectives.',
        icon: '🔍'
      },
      {
        title: 'Strategy',
        description: 'Developing a content plan that aligns with your goals.',
        icon: '📋'
      },
      {
        title: 'Creation',
        description: 'Writing and optimizing content for your audience.',
        icon: '✍️'
      },
      {
        title: 'Review & Publish',
        description: 'Quality checks and strategic content distribution.',
        icon: '📢'
      }
    ],
    bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
    accentColor: '#9C27B0'
  },
  'brand-building': {
    title: 'Brand Building',
    subtitle: 'Create a strong, memorable brand identity that stands out in the market',
    description: 'We help businesses develop powerful brand identities that resonate with their audience and create lasting impressions.',
    expertise: [
      'Brand Strategy',
      'Visual Identity',
      'Brand Guidelines',
      'Logo Design',
      'Brand Messaging',
      'Brand Experience'
    ],
    technologies: [
      { name: 'Design Tools', icon: '🎨' },
      { name: 'Brand Analytics', icon: '📊' },
      { name: 'Style Guides', icon: '📚' },
      { name: 'Digital Assets', icon: '🖼️' }
    ],
    process: [
      {
        title: 'Discovery',
        description: 'Understanding your vision, values, and market position.',
        icon: '🔍'
      },
      {
        title: 'Strategy',
        description: 'Developing a comprehensive brand strategy.',
        icon: '🎯'
      },
      {
        title: 'Design',
        description: 'Creating visual elements that represent your brand.',
        icon: '🎨'
      },
      {
        title: 'Implementation',
        description: 'Rolling out your brand across all touchpoints.',
        icon: '🚀'
      }
    ],
    bgImage: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200',
    accentColor: '#FF5722'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.servicePage}>
      <div className={styles.decorativeElements}>
        <motion.div 
          className={styles.circle1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.circle2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className={styles.triangle1}
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className={styles.triangle2}
          animate={{
            rotate: [360, 0],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className={styles.hero} style={{ backgroundImage: `url(${service.bgImage})` }}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {service.subtitle}
          </motion.p>
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.overview}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {service.description}
          </motion.p>
        </section>

        <section className={styles.expertise}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise
          </motion.h2>
          <div className={styles.expertiseGrid}>
            {service.expertise.map((item, index) => (
              <motion.div
                key={index}
                className={styles.expertiseItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.checkmark}>✓</span>
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.technologies}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technologies We Use
          </motion.h2>
          <div className={styles.techGrid}>
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={styles.techItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.process}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </motion.h2>
          <div className={styles.processGrid}>
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className={styles.processStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.stepIcon}>{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help bring your vision to life.</p>
            <motion.button
              className={styles.ctaButton}
              style={{ background: service.accentColor }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail; 