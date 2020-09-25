import React from 'react';
import '../styles/HeadNavigation.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';


const HeadNavigation = () => (
    <header>
        <nav>    
            <ul>
                <li>
                    <a className="hamburger-link" href="#">
                        <input type="checkbox" className="toggler" />
                        <div className="hamburger"><div></div></div>
                    </a>
                </li>
                {/* <li><a href="#">about</a></li> */}
                {/* <li><a href="#">resume</a></li> */}
                {/* <li><a href="#">portfolio</a></li> */}
                {/* <li><a href="#">contact</a></li> */}
                <li><Link to="/about">about</Link></li>
                <li><Link to="/resume">resume</Link></li>
                <li><Link to="/portfolio">portfolio</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>          
        </nav>
    </header>
);
export default HeadNavigation;