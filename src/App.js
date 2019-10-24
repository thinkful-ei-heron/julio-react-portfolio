import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/bio' component={Bio} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </main>
  );
}
export default App;
