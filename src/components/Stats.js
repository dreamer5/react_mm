import React from 'react';
import '../index.css';

const Stats = () => {
  return (
    <section className="stats-grid">
      <div className="stat-item">
        <p>42</p>
        <p>challenges completed</p>
      </div>
      <div className="stat-item">
        <p>120</p>
        <p>hours danced</p>
      </div>
      <div className="stat-item">
        <p>8</p>
        <p>skills unlocked</p>
      </div>
      <div className="stat-item">
        <p>12</p>
        <p>days streak</p>
      </div>
    </section>
  );
};

export default Stats;