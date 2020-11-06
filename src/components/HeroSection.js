import React from 'react';
import HeroSocialLinks from './HeroSocialLinks';
import HeadNavigation from './HeadNavigation';

import '../styles/HeroSection.css';

const subheadings = [
    { text: 'Web developer', class: 'alt-color-one'},
    { text: 'Web developer', class: 'alt-color-one'},
    { text: 'creative thinker', class: 'alt-color-two'},
    { text: 'creative thinker', class: 'alt-color-two'},
    { text: 'creative thinker', class: 'alt-color-two'},
    { text: 'Problem solver', class: ''},
    { text: 'Problem solver', class: ''},
    { text: 'Problem solver', class: ''},
    { text: 'Web developer', class: 'alt-color-one'},
];

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, subheadings: subheadings };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1500
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    render() {
        return (
            <div className="hero">
                <HeadNavigation></HeadNavigation>
                <div className="hero-banner">
                    <h1>Cian O' Ruanidh</h1>
                    <span className="phonetic">sounds like<em>'Key-in Oh-Rooney'</em></span>
                    <div className="h2-holder">
                        <h2 className={!!(this.state.count % 3) ? 'toggle-true ' + this.state.subheadings[(this.state.count % 9)].class : 'toggle-false ' + this.state.subheadings[(this.state.count % 9)].class }>{this.state.subheadings[(this.state.count % 9)].text}</h2>                        
                    </div>                 
                </div>
                <HeroSocialLinks></HeroSocialLinks>
            </div>
        );
    }
}
  
export default HeroSection;