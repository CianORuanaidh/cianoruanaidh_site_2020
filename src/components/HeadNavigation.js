import React from 'react';

import '../styles/HeadNavigation.css';

import { Link } from 'react-router-dom';

const HeadNavigation = () => (
    <header>
        <nav>    
            <ul>
                {/* <li>
                    <button className="hamburger-link">
                        <input type="checkbox" className="toggler" />
                        <div className="hamburger"><div></div></div>
                    </button>
                </li> */}
                <li><Link to="/about">about</Link></li>
                <li><Link to="/resume">resume</Link></li>
                <li><Link to="/portfolio">portfolio</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>          
        </nav>
    </header>
);
export default HeadNavigation;