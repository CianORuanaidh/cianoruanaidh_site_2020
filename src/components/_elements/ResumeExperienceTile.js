import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

import '../../styles/ResumeExperienceTile.css';

class ResumeExperienceTile extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false, 
            isMouseOver: false
        };
    }

    handleClick = () => {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
          isMouseOver: state.isMouseOver
        }));
        this.className();
    }

    onMouseLeave = () => {
        this.setState(state => ({
            isToggleOn: state.isToggleOn,
            isMouseOver: false
        }));
        this.className();
    }

    onMouseEnter = () => {
        this.setState(state => ({
            isToggleOn: state.isToggleOn,
            isMouseOver: true
        }));
        this.className();
    }

    className = () => {
        let classString = 'experience-tile';
        if (this.state.isToggleOn || this.state.isMouseOver) {
            classString += ' show-more'
        }
        return classString;
    }

    render() {
        return (
            <div className={this.className()} onClick={this.handleClick} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                <h4 className="title"><button className="title">Software Developer</button>{ this.state.isToggleOn ? <span className='toggle-on-icon'><FontAwesomeIcon icon={faDotCircle} /></span> : ''}</h4>
                <p>June 2019 - 2020</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex sed ab sequi omnis laborum eius quae a labore architecto? Temporibus distinctio expedita sequi libero asperiores veritatis similique at corrupti.</p>
            </div>
        );
    }
}

export default ResumeExperienceTile;
