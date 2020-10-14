import React from 'react';
import HeadNavigation from './components/HeadNavigation.js';
import HeroSection from './components/HeroSection.js';
import AboutMe from './components/AboutMe.js';
import MyResume from './components/MyResume.js';
import Contact from './components/Contact.js';

// import vid from './assets/video_1.mp4';
// import vidTwo from './assets/video_2.mp4';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      {/* <video autoPlay muted loop id="myVideo">
        <source src={vid} type="video/mp4" />
      </video> */}

      <Router>
        <HeadNavigation></HeadNavigation>
        <main className="main-body">
          <Route path="/" exact component={HeroSection}></Route>          
          <Route path="/about" component={AboutMe}></Route>
          <Route path="/resume" component={MyResume}></Route>
          <Route path="/contact" component={Contact}></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
