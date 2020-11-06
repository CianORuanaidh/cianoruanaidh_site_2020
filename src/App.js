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
  // constructor() {
  //     super();
  //     this.state = {};
  //   }

  // componentDidMount() {
  //   const height = document.getElementById('main-main').clientHeight;
  //   this.setState({ height });
  //   // console.log('history:', history)
  // }
    
  render() {
      return (
        <div>
          <Router>
            <main id="main-main" className="main-body">
              <BackToHomeLink></BackToHomeLink>
              <Route path="/" exact component={HeroSection}></Route>          
              <Route path="/about" component={AboutMe}></Route>
              <Route path="/resume" component={MyResume}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/portfolio" component={Portfilio}></Route>
              <Route path="/misc_fun" component={MiscellaneousFun}></Route>   

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
            </footer>         
          </Router>
        </div>
      );
  }
}

export default App;
