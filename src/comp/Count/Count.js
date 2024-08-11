import React, { useState, useEffect, useRef } from 'react';
import './aa.css';

const CountUpAnimation = ({ title, target }) => {
  const [count, setCount] = useState(0);
  const [resetCount, setResetCount] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    let currentCount = 0;
    let timer;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (resetCount) {
            setCount(0);
            setResetCount(false);
          }
          timer = setInterval(() => {
            if (currentCount < target) {
              setCount(currentCount + 1);
              currentCount++;
            } else {
              clearInterval(timer);
            }
          }, 10);
        } else {
          setResetCount(true);
          clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      clearInterval(timer);
    };
  }, [target, resetCount]);

  return (
    <div className="text-center mt-4 sm:mt-6" ref={countRef}>
      <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">{title}</h2>
      <div className="text-xl sm:text-3xl font-bold" style={{ color: '#6F85F3' }}>
        {count}+
      </div>
    </div>
  );
};

const CountUpGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly mt-4 sm:mt-8">
      <CountUpAnimation title="COLLEGE AMBASSADORS" target={250} />
      <CountUpAnimation title="COLLEGES" target={75} />
      {/* <CountUpAnimation title="INTERNATIONAL COLLEGES" target={68} /> */}
    </div>
  );
};

export default CountUpGroup;
