import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero
        name="Dasuni De Silva"
        description="A passionate CS undergraduate crafting modern web experiences, efficient backend systems, and creative digital solutions."
        roles={["Software Developer", "CS Undergraduate", "Full-Stack Web Dev"]}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;