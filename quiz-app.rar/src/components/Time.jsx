
import React, { useState, useEffect } from 'react';

const Timer = ({ duration, handleTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
    } else {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, handleTimeout]);

  return (
    <div>
      <p>Time Left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
