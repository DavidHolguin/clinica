// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5">
      <Navbar />
      <Hero />
      
    </div>
  );
}

export default App;