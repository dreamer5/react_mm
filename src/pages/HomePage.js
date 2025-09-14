import React from 'react';
import '../index.css';

import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Goals from '../components/Goals.js';
import Stats from '../components/Stats.js';
import Footer from '../components/Footer.js';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main className="home-page-grid">
        <div className="main-content">
          <Hero />
          {/* You can add the "Featured Challenges" section here */}
        </div>
        <aside className="sidebar">
          <Goals />
          {/* You can add the "Quick Actions" and "Quote" sections here */}
        </aside>
        <div className="stats-section">
          <Stats />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;