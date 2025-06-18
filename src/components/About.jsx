import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });

      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          resume: null,
          message: ''
        });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div 
        className={styles.successMessage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          ✅
        </motion.div>
        <h3>Application Submitted Successfully!</h3>
        <p>Thank you for your interest. We'll review your application and get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.applicationForm}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="position">Position You're Applying For *</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Select a position</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="ui">UI/UX Designer</option>
            <option value="project">Project Manager</option>
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="experience">Years of Experience *</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Select experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="resume">Upload Resume (PDF) *</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            onChange={handleFileChange}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Cover Letter</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us why you'd be a great fit..."
          disabled={isSubmitting}
        />
      </div>

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Something went wrong. Please try again.
        </div>
      )}

      <motion.button
        type="submit"
        className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className={styles.loadingSpinner}>Submitting...</span>
        ) : (
          'Submit Application'
        )}
      </motion.button>
    </form>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const [hoveredValue, setHoveredValue] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions and creative thinking.',
      color: '#FF6B6B'
    },
    {
      icon: '🎯',
      title: 'Client Success',
      description: 'Your success is our success. We go above and beyond to deliver results.',
      color: '#4ECDC4'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Staying ahead through constant growth and adaptation.',
      color: '#45B7D1'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Building solutions that last while caring for our environment.',
      color: '#96CEB4'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', prefix: '' },
    { number: '50+', label: 'Team Members', prefix: '' },
    { number: '10+', label: 'Years Experience', prefix: '' },
    { number: '98%', label: 'Client Satisfaction', prefix: '' }
  ];

  return (
    <div className={styles.about}>
      <motion.div 
        className={styles.hero}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Innovating the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We're not just a technology company. We're your partner in digital transformation,
            crafting solutions that define the future of business.
          </motion.p>
          {/* <motion.div 
            className={styles.scrollIndicator}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll to explore</span>
            <div className={styles.scrollArrow}>↓</div>
          </motion.div> */}
        </div>
      </motion.div>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <motion.div 
              className={styles.storyText}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Journey</h2>
              <p>
                Founded with a vision to revolutionize digital solutions, TekUnik has grown
                into a global force in technology innovation. We believe in the power of
                digital transformation to reshape businesses and create unprecedented opportunities.
              </p>
              <p>
                Our journey is marked by continuous evolution, learning, and adaptation to
                emerging technologies. We don't just follow trends – we set them.
              </p>
              <motion.button 
                className={styles.learnMoreButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>

            <motion.div 
              className={styles.statsContainer}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={styles.statCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 30px rgba(0, 166, 81, 0.2)'
                    }}
                  >
                    <span className={styles.statNumber}>
                      {stat.prefix}{stat.number}
                    </span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredValue(index)}
                onHoverEnd={() => setHoveredValue(null)}
                style={{
                  backgroundColor: hoveredValue === index ? `${value.color}15` : 'white'
                }}
              >
                <motion.span 
                  className={styles.valueIcon}
                  animate={{
                    scale: hoveredValue === index ? 1.2 : 1,
                    rotate: hoveredValue === index ? [0, -10, 10, -10, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <motion.div 
                  className={styles.valueCardBackground}
                  initial={false}
                  animate={{
                    opacity: hoveredValue === index ? 1 : 0
                  }}
                  style={{ backgroundColor: value.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.teamContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Our Team</h2>
            <p>
              We're always looking for passionate individuals who share our vision and values.
              Join us in shaping the future of technology.
            </p>
          </motion.div>

          <div className={styles.teamGrid}>
            <motion.div 
              className={styles.joinTeam}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.joinContent}>
                <h3>Ready to Make an Impact?</h3>
                <p>
                  At TekUnik, you'll work with cutting-edge technologies and collaborate
                  with some of the brightest minds in the industry. We offer competitive
                  benefits, flexible work arrangements, and endless opportunities for growth.
                </p>
                <motion.button
                  className={styles.applyButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? 'Hide Application Form' : 'Apply Now'}
                </motion.button>
              </div>
              <div className={styles.benefitsList}>
                <div className={styles.benefit}>
                  <span>🌟</span>
                  <p>Competitive Salary</p>
                </div>
                <div className={styles.benefit}>
                  <span>💻</span>
                  <p>Remote Work Options</p>
                </div>
                <div className={styles.benefit}>
                  <span>📚</span>
                  <p>Learning & Development</p>
                </div>
                <div className={styles.benefit}>
                  <span>🏥</span>
                  <p>Health Benefits</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.teamImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Team working together" 
              />
              <motion.div 
                className={styles.imageOverlay}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <p>Join our diverse team of innovators</p>
              </motion.div>
            </motion.div>
          </div>

          {showForm && (
            <motion.div 
              className={styles.applicationFormContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <JobApplicationForm />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About; 