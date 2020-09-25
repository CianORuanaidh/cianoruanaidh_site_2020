import React from 'react';
import HeadNavigation from './components/HeadNavigation.js';
import HeroSection from './components/HeroSection.js';
import AboutMe from './components/AboutMe.js';
import MyResume from './components/MyResume.js';
import Contact from './components/Contact.js';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';

import './App.css';

const ContactTwo = (props) => {
  return(
    <h2>Contact</h2>
  )
}
const AboutTwo = () =>{
  return(
    <h2> About me </h2>
  )
}

function App() {
  return (
    <div>
      <Router>
        <HeadNavigation></HeadNavigation>

        <Route path="/" exact component={HeroSection}></Route>          
        <Route path="/about" component={AboutMe}></Route>
        <Route path="/resume" component={MyResume}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    </div>
  );
}

export default App;
