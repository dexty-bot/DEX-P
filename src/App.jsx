import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Particles className="absolute inset-0 -z-10" />
      <Header />
      <Hero />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
