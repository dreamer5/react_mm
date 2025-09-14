import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section className="hero-card">
      <div>
        <h1 className="font-playfair">
          Ready to move your <span className="gradient-text-purple">dreams</span> <span className="gradient-text-blue">forward?</span> ✨
        </h1>
        <p>
          Every great dancer started with a single step. Today is your day to grow, shine and connect with your passion. Let's make some magic happen!
        </p>
        <button className="hero-button">
          Explore Challenges
        </button>
      </div>
    </section>
  );
};

export default Hero;