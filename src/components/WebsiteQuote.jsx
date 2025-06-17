import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './WebsiteQuote.module.css';

const WebsiteQuote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    address: '',
    companyInfo: '',
    hasLogo: 'no',
    hasBranding: 'no',
    hasContent: 'no',
    objectives: [],
    budget: 'under-2k',
    competitors: '',
    features: [],
    timeline: '',
    references: '',
    ssl: '',
    hosting: '',
    domain: '',
    additionalInfo: ''
  });

  const objectives = [
    { id: 'brand-awareness', label: 'I need to build awareness for my brand' },
    { id: 'sell-products', label: 'I need to sell my products/services online' },
    { id: 'generate-leads', label: 'I need to generate more leads/enquiries' },
    { id: 'improve-service', label: 'I need to provide better service to my customers' },
    { id: 'reduce-costs', label: 'I need to cut my costs/customer support' },
    { id: 'social-presence', label: 'I need to improve my social media presence' },
    { id: 'other', label: 'I have my own reasons' }
  ];

  const features = [
    { id: 'basic-info', label: 'Basic Website' },
    { id: 'cms', label: 'Content Management System (so you update & edit)' },
    { id: 'wordpress', label: 'WordPress Based CMS' },
    { id: 'php', label: 'PHP / Laravel / API System' },
    { id: 'ecommerce', label: 'E-commerce Features' },
    { id: 'blog', label: 'Online Blog/Writing' },
    { id: 'newsletter', label: 'Newsletter Portal' },
    { id: 'members', label: 'Members Management' },
    { id: 'crm', label: 'CRM Integration' },
    { id: 'seo', label: 'Search Engine Optimization' },
    { id: 'analytics', label: 'Website Analytics Setup' },
    { id: 'mobile', label: 'Mobile responsive website' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, group) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [group]: checked 
        ? [...prev[group], value]
        : prev[group].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className={styles.quotePage}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <h1>Website Questionnaire</h1>
          <p>Help us understand your website needs better</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formSection}>
            <h2>Basic Information</h2>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Your Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
              />
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>About Your Business</h2>
            <div className={styles.formGroup}>
              <label htmlFor="companyInfo">What does your company do?</label>
              <textarea
                id="companyInfo"
                name="companyInfo"
                value={formData.companyInfo}
                onChange={handleInputChange}
                rows="4"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Do you have a logo ready for your website?</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="hasLogo"
                    value="yes"
                    checked={formData.hasLogo === 'yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasLogo"
                    value="no"
                    checked={formData.hasLogo === 'no'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Do you have brand guidelines?</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="hasBranding"
                    value="yes"
                    checked={formData.hasBranding === 'yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasBranding"
                    value="no"
                    checked={formData.hasBranding === 'no'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Project Objectives</h2>
            <div className={styles.checkboxGroup}>
              {objectives.map(objective => (
                <label key={objective.id}>
                  <input
                    type="checkbox"
                    value={objective.id}
                    checked={formData.objectives.includes(objective.id)}
                    onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  />
                  {objective.label}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Budget & Timeline</h2>
            <div className={styles.formGroup}>
              <label htmlFor="budget">My budget (in USD) is in the bracket:</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="under-2k">Under $2,000</option>
                <option value="2k-5k">$2,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="over-10k">Over $10,000</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="timeline">When would you like to launch your website?</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                placeholder="e.g., In 2 months, By December, etc."
              />
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Website Features</h2>
            <div className={styles.checkboxGroup}>
              {features.map(feature => (
                <label key={feature.id}>
                  <input
                    type="checkbox"
                    value={feature.id}
                    checked={formData.features.includes(feature.id)}
                    onChange={(e) => handleCheckboxChange(e, 'features')}
                  />
                  {feature.label}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Additional Information</h2>
            <div className={styles.formGroup}>
              <label htmlFor="competitors">List your main competitors' websites:</label>
              <textarea
                id="competitors"
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please provide URLs"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="references">Website references you like:</label>
              <textarea
                id="references"
                name="references"
                value={formData.references}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please provide URLs and what you like about them"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="additionalInfo">Anything else you'd like to tell us?</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
          </div>

          <div className={styles.formActions}>
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Questionnaire
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default WebsiteQuote; 