import React, { useState } from 'react';
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
    features: [],
    competitors: '',
    references: '',
    additionalInfo: ''
  });

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
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className={styles.quotePage}>
      {/* Animated Background Shapes */}
      <div className={styles.backgroundShapes}>
        <div className={`${styles.shape} ${styles.circle1}`} />
        <div className={`${styles.shape} ${styles.circle2}`} />
        <div className={`${styles.shape} ${styles.circle3}`} />
        <div className={`${styles.shape} ${styles.circle4}`} />
        <div className={`${styles.shape} ${styles.circle5}`} />
        <div className={`${styles.shape} ${styles.circle6}`} />
        
        <div className={`${styles.shape} ${styles.triangle1}`} />
        <div className={`${styles.shape} ${styles.triangle2}`} />
        <div className={`${styles.shape} ${styles.triangle3}`} />
        <div className={`${styles.shape} ${styles.triangle4}`} />
        <div className={`${styles.shape} ${styles.triangle5}`} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Website Questionnaire</h1>
          <p>Help us understand your website needs better</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Basic Information */}
          <div className={styles.formSection}>
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

          {/* About Your Business */}
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

            <div className={styles.formGroup}>
              <label>Do you have content ready for your website?</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="hasContent"
                    value="yes"
                    checked={formData.hasContent === 'yes'}
                    onChange={handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasContent"
                    value="no"
                    checked={formData.hasContent === 'no'}
                    onChange={handleInputChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Project Objectives */}
          <div className={styles.formSection}>
            <h2>Project Objectives</h2>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="brand-awareness"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('brand-awareness')}
                />
                I need to build awareness for my brand
              </label>
              <label>
                <input
                  type="checkbox"
                  value="sell-products"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('sell-products')}
                />
                I need to sell my products/services online
              </label>
              <label>
                <input
                  type="checkbox"
                  value="generate-leads"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('generate-leads')}
                />
                I need to generate more leads/enquiries
              </label>
              <label>
                <input
                  type="checkbox"
                  value="improve-service"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('improve-service')}
                />
                I need to provide better service to my customers
              </label>
            </div>
          </div>

          {/* Budget */}
          <div className={styles.formSection}>
            <h2>Budget</h2>
            <div className={styles.formGroup}>
              <label>My budget (in USD) is in the bracket:</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="under-2k"
                    checked={formData.budget === 'under-2k'}
                    onChange={handleInputChange}
                  />
                  Under $2K
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="2k-5k"
                    checked={formData.budget === '2k-5k'}
                    onChange={handleInputChange}
                  />
                  $2K - $5K
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="5k-10k"
                    checked={formData.budget === '5k-10k'}
                    onChange={handleInputChange}
                  />
                  $5K - $10K
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="over-10k"
                    checked={formData.budget === 'over-10k'}
                    onChange={handleInputChange}
                  />
                  Over $10K
                </label>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={styles.formSection}>
            <h2>Features</h2>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="basic-website"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('basic-website')}
                />
                Basic Website
              </label>
              <label>
                <input
                  type="checkbox"
                  value="cms"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('cms')}
                />
                Content Management System
              </label>
              <label>
                <input
                  type="checkbox"
                  value="ecommerce"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('ecommerce')}
                />
                E-commerce Features
              </label>
              <label>
                <input
                  type="checkbox"
                  value="blog"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('blog')}
                />
                Blog
              </label>
              <label>
                <input
                  type="checkbox"
                  value="seo"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('seo')}
                />
                Search Engine Optimization
              </label>
            </div>
          </div>

          {/* Additional Information */}
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
            <button type="submit" className={styles.submitButton}>
              Submit Questionnaire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebsiteQuote; 