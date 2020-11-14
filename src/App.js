import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HeroSection from './components/HeroSection.js';
import AboutMe from './components/AboutMe.js';
import MyResume from './components/MyResume.js';
import Contact from './components/Contact.js';
import Portfilio from './components/Portfilio.js';
import BackToHomeLink from './components/BackToHomeLink.js';
import MiscellaneousFun from './components/MiscellaneousFun.js';

import './App.css';

class App extends React.Component {

  onNavToTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
      return (
        <div>
          <Router>
            <main id="main-main" className="main-body">
            <HeroSection/>
            <AboutMe/>
            <MyResume/>
            <Portfilio/>
            <Contact/>
            <MiscellaneousFun/>



              {/* <BackToHomeLink></BackToHomeLink>
              <Route path="/" exact render={() => { 
                        this.onNavToTop();
                        return <HeroSection/>;
                    }} />
              <Route path="/about" exact render={() => { 
                        this.onNavToTop();
                        return <AboutMe/>;
                    }} />
              <Route path="/resume" exact render={() => { 
                        this.onNavToTop();
                        return <MyResume/>;
                    }} />
              <Route path="/contact" exact render={() => { 
                        this.onNavToTop();
                        return <Contact/>;
                    }} />
              <Route path="/portfolio" exact render={() => { 
                        this.onNavToTop();
                        return <Portfilio/>;
                    }} />
              <Route path="/misc_fun" exact render={() => { 
                        this.onNavToTop();
                        return <MiscellaneousFun/>;
                    }} /> */}
            </main>
            <footer>
              <nav className="foot-nav">
                <ul className="foot-links">
                    <li className="link"><Link to="/about">about</Link></li>
                    <li className="link"><Link to="/resume">resume</Link></li>
                    <li className="link"><Link to="/portfolio">portfolio</Link></li>
                    <li className="link"><Link to="/contact">contact</Link></li>
                </ul>     
              </nav>              
              <p>&#169; Cian O'Ruanaidh 2020</p>
            </footer>         
          </Router>
        </div>
      );
  }
}

export default App;
