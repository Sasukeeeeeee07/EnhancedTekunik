import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.current.observe(countRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCounting = () => {
    const start = 0;
    const step = Math.ceil(end / (duration / 16)); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
  };

  return <span ref={countRef}>{count}{suffix}</span>;
};

export default Counter; 