import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Clean Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
