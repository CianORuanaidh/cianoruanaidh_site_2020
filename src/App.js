import React from 'react';
// import HeadNavigation from './components/HeadNavigation.js';
import HeroSection from './components/HeroSection.js';
import AboutMe from './components/AboutMe.js';
import MyResume from './components/MyResume.js';
import Contact from './components/Contact.js';
import Portfilio from './components/Portfilio.js';
import BackToHomeLink from './components/BackToHomeLink.js';
// import { Link } from 'react-router-dom';

// import {withRouter} from 'react-router-dom';

// import { createBrowserHistory } from "history";



// import vid from './assets/video_1.mp4';
// import vidTwo from './assets/video_2.mp4';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

// function AppTwo() {
//   return (
//     <div>
//       {/* <video autoPlay muted loop id="myVideo">
//         <source src={vid} type="video/mp4" />
//       </video> */}

//       <Router>
//         {/* <HeadNavigation></HeadNavigation> */}
//         <main className="main-body" onScroll={this.handleScroll}>
//           <Route path="/" exact component={HeroSection}></Route>          
//           <Route path="/about" component={AboutMe}></Route>
//           <Route path="/resume" component={MyResume}></Route>
//           <Route path="/contact" component={Contact}></Route>
//         </main>
//       </Router>
//     </div>
//   );
// }

// const history = createBrowserHistory()


class App extends React.Component {
  constructor() {
      super();
      this.state = {};
    }

  componentDidMount() {
    const height = document.getElementById('main-main').clientHeight;
    this.setState({ height });
    // console.log('history:', history)
  }

  handleScroll = (event) => {
    // console.log('SCROLL')
    // console.log('innerHeight: ', window.innerHeight)
    // console.log('scrollY: ', window.scrollY)
    // console.log('ROOT HEIGHT: ', this.state.height)
    // console.log(window.outerHeight)
    // console.log(event)
    // var heightBound = window.height * 0.8
    // if (heightBound > window.scrollY) {
    //     // Probably you want to load new cards?
    //     this.props.getCards(...);
    // } 
  }

  handleWheel(event) {
    // console.log('WHEEL')
  }

    
  render() {
      // console.log(this.props.location.pathname);

      return (
        <div>
          <Router>
            {/* <HeadNavigation></HeadNavigation> */}
            {/* <Link to="/">***</Link> */}
            <BackToHomeLink></BackToHomeLink>
            <main id="main-main"className="main-body" onScroll={this.handleScroll} onWheel={this.handleScroll}>
              <Route path="/" exact component={HeroSection}></Route>          
              <Route path="/about" component={AboutMe}></Route>
              <Route path="/resume" component={MyResume}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/portfolio" component={Portfilio}></Route>
            </main>
          </Router>
        </div>
      );
  }
}


export default App;
