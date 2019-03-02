import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Main from './components/Main';
import Resume from './components/Resume';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
            <Navbar />
            <Home />
            <Main />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
      </div>
    );
  }
}

export default App;
