import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/FirstSection/FirstSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from './components/SkillsSection/SkillsSection'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSection/>
      <AboutSection/>
      <SkillsSection/>
    </div>
  );
}



export default App;
