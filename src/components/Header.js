// Contains my name and the Navigation component.

import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    const [color, setColor] = useState('#003459');
  
    useEffect(() => {
        const colors = ['#003459', '#007EA7', '#FF5E00', '#E5097F', '#00D4DB', '#3A52D6', '#9E20C8', '#F1C232', '#00A572', '#F22F46'];
  
      const handleScroll = () => {
        const index = Math.floor(window.scrollY / 75) % colors.length; // Change the value of 200 to adjust the frequency
        setColor(colors[index]);
      }
  
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header className="header" style={{ backgroundColor: color }}>
        <h1>Hi, I'm Zach Berger.</h1> {/* Updated title */}
        <Navigation />
      </header>
    );
  }

export default Header;