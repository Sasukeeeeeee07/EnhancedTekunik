import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      text: "Working with Tekunik has been transformative for our business. Their expertise in web development and digital marketing has helped us achieve remarkable growth."
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director, InnovateCo",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      text: "The team at Tekunik consistently delivers outstanding results. Their attention to detail and innovative solutions have exceeded our expectations."
    },
    {
      name: "Michael Chen",
      position: "Founder, StartupX",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      text: "Exceptional service and remarkable expertise. Tekunik has been instrumental in establishing our online presence and driving our digital success."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => 
      (current + 1) % testimonials.length
    );
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.decorativeElements}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.dots}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What Our <span className={styles.highlight}>Clients</span> Say
          </h2>
          <p className={styles.subtitle}>
            Discover why businesses trust us with their digital success
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className={styles.slider}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ''}`}
                style={{
                  transform: `translateX(${100 * (index - activeIndex)}%)`
                }}
              >
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className={styles.clientImage}
                      />
                    </div>
                    <div className={styles.textContent}>
                      <p className={styles.quote}>{testimonial.text}</p>
                      <div className={styles.clientInfo}>
                        <h4 className={styles.name}>{testimonial.name}</h4>
                        <p className={styles.position}>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 