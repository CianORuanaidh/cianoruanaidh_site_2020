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

    // onMouseLeave = () => {
    //     this.setState(state => ({
    //         isToggleOn: state.isToggleOn,
    //         isMouseOver: false
    //     }));
    //     this.className();
    // }

    // onMouseEnter = () => {
    //     this.setState(state => ({
    //         isToggleOn: state.isToggleOn,
    //         isMouseOver: true
    //     }));
    //     this.className();
    // }

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
                <h4 className="title"><button className="title">{this.props.item.company} - {this.props.item.title}</button>{ this.state.isToggleOn ? <span className='toggle-on-icon'><FontAwesomeIcon icon={faDotCircle} /></span> : ''}</h4>
                <p>{this.props.item.dates}</p>

                {this.props.item.project.map(proj => {
                    return (
                        <div className="project">
                            <h5>{proj.projectName}</h5>
                            <ul>
                                {proj.bullets.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                    )
                })}
                { !this.props.item.keyAchievements ? '' :
                    (<div className="project">
                        <p><strong>Key achievements:</strong></p>
                        <p>{this.props.item.keyAchievements}</p>
                    </div>)
                }
            </div>
        );
    }
}

export default ResumeExperienceTile;
