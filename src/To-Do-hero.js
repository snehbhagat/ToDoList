import React from 'react';
import './Hero.css';

function Hero({ completed, total }) {
  return (
    <div className="hero">
      <h1>Todo Tracker</h1>
      <p>
        You have completed {completed} out of {total} tasks.
      </p>
    </div>
  );
}

export default Hero;