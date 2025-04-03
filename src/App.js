import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        {/* <section id="experience">
          <Experience />
        </section> */}
        <section id="research">
          <Research />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
