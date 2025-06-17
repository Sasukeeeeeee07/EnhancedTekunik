import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ServiceDetail.module.css';

const serviceDetails = {
  'web-development': {
    title: 'Web Development',
    hero: {
      title: 'Custom Web Development Solutions',
      description: 'Transform your digital presence with our cutting-edge web development services.',
      icon: '💻'
    },
    overview: 'We create stunning, responsive websites and web applications that drive results. Our web development team combines creative design with technical expertise to deliver solutions that not only look great but also perform exceptionally.',
    expertise: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Content Management Systems',
      'API Development & Integration',
      'Website Maintenance & Support'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'PHP/Laravel',
      'WordPress',
      'MongoDB',
      'MySQL'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We start by understanding your business goals, target audience, and specific requirements.'
      },
      {
        title: 'Planning',
        description: 'Creating a detailed project roadmap, wireframes, and technical specifications.'
      },
      {
        title: 'Design',
        description: 'Developing the visual design and user interface based on your brand.'
      },
      {
        title: 'Development',
        description: 'Building your website with clean, efficient code and modern technologies.'
      },
      {
        title: 'Testing',
        description: 'Rigorous testing across devices and browsers to ensure perfect functionality.'
      },
      {
        title: 'Launch',
        description: 'Deploying your website and providing post-launch support.'
      }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    hero: {
      title: 'Strategic Digital Marketing Solutions',
      description: 'Drive growth and reach your target audience with data-driven digital marketing strategies.',
      icon: '🎯'
    },
    overview: 'Our digital marketing services help you navigate the complex online landscape and achieve measurable results. We create comprehensive strategies that increase visibility, engage your audience, and drive conversions.',
    expertise: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: [
      'Google Analytics',
      'SEMrush',
      'Ahrefs',
      'Facebook Ads Manager',
      'Mailchimp',
      'HubSpot'
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Analyzing your current digital presence and identifying opportunities.'
      },
      {
        title: 'Strategy',
        description: 'Developing a customized marketing strategy aligned with your goals.'
      },
      {
        title: 'Implementation',
        description: 'Executing campaigns across chosen digital channels.'
      },
      {
        title: 'Monitoring',
        description: 'Tracking performance and making data-driven optimizations.'
      },
      {
        title: 'Reporting',
        description: 'Regular reporting on KPIs and campaign performance.'
      },
      {
        title: 'Optimization',
        description: 'Continuous improvement based on results and insights.'
      }
    ]
  },
  'content-writing': {
    title: 'Content Writing',
    hero: {
      title: 'Professional Content Writing Services',
      description: 'Engage your audience with compelling, SEO-optimized content that converts.',
      icon: '✍️'
    },
    overview: 'Our content writing services help you tell your brand story effectively. We create engaging, valuable content that resonates with your audience and drives action.',
    expertise: [
      'Blog & Article Writing',
      'Website Copy',
      'SEO Content',
      'Social Media Content',
      'Email Newsletters',
      'Technical Writing'
    ],
    technologies: [
      'Grammarly Premium',
      'Hemingway Editor',
      'Yoast SEO',
      'CoSchedule',
      'BuzzSumo',
      'Google Keyword Planner'
    ],
    process: [
      {
        title: 'Research',
        description: 'Conducting thorough research on your industry and target audience.'
      },
      {
        title: 'Strategy',
        description: 'Developing a content strategy aligned with your goals.'
      },
      {
        title: 'Creation',
        description: 'Writing engaging, SEO-optimized content.'
      },
      {
        title: 'Review',
        description: 'Editorial review and quality assurance.'
      },
      {
        title: 'Optimization',
        description: 'SEO optimization and formatting.'
      },
      {
        title: 'Publishing',
        description: 'Content publishing and distribution.'
      }
    ]
  },
  'brand-building': {
    title: 'Brand Building',
    hero: {
      title: 'Strategic Brand Building Services',
      description: 'Build a strong, memorable brand that resonates with your audience.',
      icon: '🎨'
    },
    overview: 'We help businesses create and develop strong, memorable brands that stand out in the market. Our brand building services encompass everything from strategy to visual identity.',
    expertise: [
      'Brand Strategy',
      'Visual Identity Design',
      'Brand Guidelines',
      'Brand Messaging',
      'Brand Voice Development',
      'Brand Experience Design'
    ],
    technologies: [
      'Adobe Creative Suite',
      'Figma',
      'Sketch',
      'InVision',
      'Canva Pro',
      'Brand Management Tools'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'Understanding your brand values, vision, and market position.'
      },
      {
        title: 'Strategy',
        description: 'Developing a comprehensive brand strategy.'
      },
      {
        title: 'Design',
        description: 'Creating visual elements that reflect your brand.'
      },
      {
        title: 'Guidelines',
        description: 'Establishing brand guidelines and standards.'
      },
      {
        title: 'Implementation',
        description: 'Rolling out your brand across all touchpoints.'
      },
      {
        title: 'Management',
        description: 'Ongoing brand management and evolution.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div className={styles.notFound}>Service not found</div>;
  }

  return (
    <div className={styles.servicePage}>
      {/* Background Shapes */}
      <div className={styles.backgroundShapes}>
        <div className={`${styles.shape} ${styles.circle1}`} />
        <div className={`${styles.shape} ${styles.circle2}`} />
        <div className={`${styles.shape} ${styles.circle3}`} />
        <div className={`${styles.shape} ${styles.triangle1}`} />
        <div className={`${styles.shape} ${styles.triangle2}`} />
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <span className={styles.heroIcon}>{service.hero.icon}</span>
            <h1>{service.hero.title}</h1>
            <p>{service.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Overview</h2>
            <p>{service.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertise}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Our Expertise</h2>
            <div className={styles.expertiseGrid}>
              {service.expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.expertiseItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <span className={styles.checkmark}>✓</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologies}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Technologies We Use</h2>
            <div className={styles.techGrid}>
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className={styles.techItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>Our Process</h2>
            <div className={styles.processGrid}>
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  className={styles.processStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className={styles.ctaContent}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and create something amazing together.</p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail; 