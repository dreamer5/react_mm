
import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo font-playfair">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#logoGradient)"/>
            <path d="M2 17l10 5 10-5" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M2 12l10 5 10-5" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <defs>
                <linearGradient id="logoGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A374FF"/>
                    <stop offset="1" stopColor="#6373FF"/>
                </linearGradient>
            </defs>
        </svg>
        <span>MotionMentor</span>
      </a>
      {/* Navigation links can be added here */}
    </header>
  );
};

export default Header;