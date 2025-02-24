// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutpage from "./components/AboutPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/resume";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutpage/>
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
