import React from 'react';

import '../styles/HeadNavigation.css';

import { Link, animateScroll as scroll } from "react-scroll";

class HeadNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    onToggle = () => {
        const toggle = !this.state.toggle;
        this.setState({toggle})
    }

    render() {
        return(
            <header>
                <nav className={this.state.toggle ? 'show-overlay' : 'hide-overlay'}>    
                    <button className="hamburger-link menu" onClick={this.onToggle}>
                    <input type="checkbox" checked={this.state.toggle} className="toggler" onChange={this.onToggle}/>
                    <div className="hamburger"><div></div></div>
                    </button>
                    <ul className="link-list" onClick={this.onToggle}>
                        <li><Link activeClass="active" to="about-me"spy={true} smooth={true} offset={-10} duration={500} onClick={this.onToggle}>about</Link></li>
                        <li><Link activeClass="active" to="resume"spy={true} smooth={true} offset={-10} duration={600} onClick={this.onToggle}>resume</Link></li>
                        <li><Link activeClass="active" to="portfolio"spy={true} smooth={true} offset={-10} duration={700} onClick={this.onToggle}>portfolio</Link></li>
                        <li><Link activeClass="active" to="contact"spy={true} smooth={true} offset={-10} duration={800} onClick={this.onToggle}>contact</Link></li>
                    </ul>          
                </nav>
            </header>
        )
    }

}
export default HeadNavigation;