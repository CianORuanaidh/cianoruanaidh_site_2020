import React from 'react';

import '../styles/HeadNavigation.css';

import { Link } from 'react-router-dom';



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
                    {/* <button className="menu" onClick={this.onToggle}><Link to="/">{!this.state.toggle ? 'show' : 'close'}</Link></button> */}
                    <button className="hamburger-link menu" onClick={this.onToggle}>
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    </button>
                    <ul className="link-list">
                        <li className="link"><Link to="/about">about</Link></li>
                        <li className="link"><Link to="/resume">resume</Link></li>
                        <li className="link"><Link to="/portfolio">portfolio</Link></li>
                        <li className="link"><Link to="/contact">contact</Link></li>
                    </ul>          
                </nav>
            </header>
        )
    }

}
export default HeadNavigation;