import React from 'react';
import '../styles/HeroSection.css';
import HeroSocialLinks from './HeroSocialLinks';

const subheadings = [
    'Web developer',
    'Web developer',
    'creative thinker',
    'creative thinker',
    'creative thinker',
    "Problem solver",
    'Problem solver',
    "Problem solver",
    'Web developer',
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
                <div className="hero-banner">
                    <h1>Cian O'Ruanidh</h1>
                    <span className="phonetic">sounds like<em>'Key-in Oh-Rooney'</em></span>
                    <div className="h2-holder">
                        <h2 className={!!(this.state.count % 3) ? 'toggle-true' : 'toggle-false' }>{this.state.subheadings[(this.state.count % 9)]}</h2>
                    </div>                 
                </div>
                <HeroSocialLinks></HeroSocialLinks>
            </div>
        );
    }
}
  
export default HeroSection;