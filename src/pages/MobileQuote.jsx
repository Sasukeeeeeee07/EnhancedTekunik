import React, { useState } from 'react';
import styles from './MobileQuote.module.css';

const MobileQuote = () => {
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
    budget: 'under-5k',
    platforms: [],
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
          <h1>Mobile App Questionnaire</h1>
          <p>Help us understand your mobile app needs better</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Basic Information */}
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
              <label>Do you have a logo ready for your app?</label>
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

          {/* Project Objectives */}
          <div className={styles.formSection}>
            <h2>Project Objectives</h2>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="user-engagement"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('user-engagement')}
                />
                Increase user engagement
              </label>
              <label>
                <input
                  type="checkbox"
                  value="revenue-generation"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('revenue-generation')}
                />
                Generate revenue through the app
              </label>
              <label>
                <input
                  type="checkbox"
                  value="brand-awareness"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('brand-awareness')}
                />
                Build brand awareness
              </label>
              <label>
                <input
                  type="checkbox"
                  value="customer-service"
                  onChange={(e) => handleCheckboxChange(e, 'objectives')}
                  checked={formData.objectives.includes('customer-service')}
                />
                Improve customer service
              </label>
            </div>
          </div>

          {/* Platforms */}
          <div className={styles.formSection}>
            <h2>Target Platforms</h2>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="ios"
                  onChange={(e) => handleCheckboxChange(e, 'platforms')}
                  checked={formData.platforms.includes('ios')}
                />
                iOS (iPhone/iPad)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="android"
                  onChange={(e) => handleCheckboxChange(e, 'platforms')}
                  checked={formData.platforms.includes('android')}
                />
                Android
              </label>
              <label>
                <input
                  type="checkbox"
                  value="cross-platform"
                  onChange={(e) => handleCheckboxChange(e, 'platforms')}
                  checked={formData.platforms.includes('cross-platform')}
                />
                Cross-platform (React Native/Flutter)
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
                    value="under-5k"
                    checked={formData.budget === 'under-5k'}
                    onChange={handleInputChange}
                  />
                  Under $5K
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
                    value="10k-25k"
                    checked={formData.budget === '10k-25k'}
                    onChange={handleInputChange}
                  />
                  $10K - $25K
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="over-25k"
                    checked={formData.budget === 'over-25k'}
                    onChange={handleInputChange}
                  />
                  Over $25K
                </label>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={styles.formSection}>
            <h2>App Features</h2>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="user-auth"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('user-auth')}
                />
                User Authentication
              </label>
              <label>
                <input
                  type="checkbox"
                  value="push-notifications"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('push-notifications')}
                />
                Push Notifications
              </label>
              <label>
                <input
                  type="checkbox"
                  value="offline-mode"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('offline-mode')}
                />
                Offline Mode
              </label>
              <label>
                <input
                  type="checkbox"
                  value="in-app-purchase"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('in-app-purchase')}
                />
                In-App Purchases
              </label>
              <label>
                <input
                  type="checkbox"
                  value="social-integration"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('social-integration')}
                />
                Social Media Integration
              </label>
              <label>
                <input
                  type="checkbox"
                  value="analytics"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('analytics')}
                />
                Analytics & Tracking
              </label>
              <label>
                <input
                  type="checkbox"
                  value="maps"
                  onChange={(e) => handleCheckboxChange(e, 'features')}
                  checked={formData.features.includes('maps')}
                />
                Maps & Location Services
              </label>
            </div>
          </div>

          {/* Additional Information */}
          <div className={styles.formSection}>
            <h2>Additional Information</h2>
            <div className={styles.formGroup}>
              <label htmlFor="competitors">List your main competitors' apps:</label>
              <textarea
                id="competitors"
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please provide app names or links"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="references">Apps you like for reference:</label>
              <textarea
                id="references"
                name="references"
                value={formData.references}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please provide app names and what you like about them"
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

export default MobileQuote; 