import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import AnimatedContent from './AnimatedContent';
import { handleFormSubmission, validateField } from '../utils/formUtils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate field on change if it's been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate all fields
    const newErrors = {};
    Object.keys(formState).forEach(key => {
      const error = validateField(key, formState[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const result = await handleFormSubmission(formState, '/api/contact');
    
    if (result.success) {
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTouched({});
      setErrors({});
    } else {
      setSubmitStatus('error');
      setErrors(prev => ({
        ...prev,
        submit: result.error
      }));
    }
    setIsSubmitting(false);
  };

  return (
    <section className={styles.contact}>
      <AnimatedContent>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any questions or inquiries</p>
      </AnimatedContent>

      <div className={styles.contactContainer}>
        <AnimatedContent direction="left" delay={0.2}>
          <div className={styles.contactInfo}>
            <h2>Let's Connect</h2>
            <div className={styles.infoItem}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.iconWrapper}
              >
                <span>📍</span>
              </motion.div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Business Street, Suite 100<br />Tech City, TC 12345</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.iconWrapper}
              >
                <span>📞</span>
              </motion.div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.iconWrapper}
              >
                <span>✉️</span>
              </motion.div>
              <div>
                <h3>Email Us</h3>
                <p>info@tekunik.com</p>
              </div>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent direction="right" delay={0.4}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? styles.error : ''}
                disabled={isSubmitting}
                required
              />
              {errors.name && touched.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? styles.error : ''}
                disabled={isSubmitting}
                required
              />
              {errors.email && touched.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? styles.error : ''}
                disabled={isSubmitting}
              />
              {errors.phone && touched.phone && (
                <span className={styles.errorMessage}>{errors.phone}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message && touched.message ? styles.error : ''}
                rows="5"
                disabled={isSubmitting}
                required
              />
              {errors.message && touched.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                {errors.submit || 'An error occurred. Please try again.'}
              </div>
            )}

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className={styles.loadingSpinner}>Sending...</span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Contact; 