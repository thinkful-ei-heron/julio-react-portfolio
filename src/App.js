import React from 'react'
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
      <main>
        <Navbar/>
        <Bio/>
        <Projects/>
        <Contact/>
        <Footer />
      </main>
  );
}

export default App;
