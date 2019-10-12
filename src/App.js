import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main>
      <Navbar/>
      <Bio/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
