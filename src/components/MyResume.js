import React from 'react';
import SectionHeader from '../components/_elements/SectionHeader';
import ResumeExperienceTile from '../components/_elements/ResumeExperienceTile';
import ResumeEducationTile from '../components/_elements/ResumeEducationTile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faAngular, faReact, faSass, faWordpress, faShopify, faPython, faGit} from '@fortawesome/free-brands-svg-icons';

import '../styles/MyResume.css';

let skillArray = [
    { label: 'HTML5', icon: faHtml5 }, 
    { label: 'CSS3', icon: faCss3 }, 
    { label: 'JavaScript', icon: faJs }, 
    { label: 'Angular', icon: faAngular }, 
    { label: 'ReactJS', icon: faReact }, 
    { label: 'Sass', icon: faSass }, 
    { label: 'Wordpress', icon: faWordpress }, 
    { label: 'Shopify', icon: faShopify }, 
    { label: 'Python', icon: faPython }, 
    { label: 'Git', icon: faGit }
]

let experience = [{
    position: 'Software Developer',
    roel: '2019-2020',
    bullets: [
        'thing 1',
        'thing 2'
    ]
}]

let education = [
    {
        class: 'Web Development Immersive Bootcamp',
        college: 'Juno College of Technology',
    },
    {
        class: 'BSc Statistics (Honours)',
        college: 'University College Dublin',
    },
    {
        class: 'BFA Fine Art (Honours)',
        college: 'Institute of Art Design & Technology, Dun Laoghaire',
        },
    ]

let arrray = [1,2,3]

class MyResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: experience,
            education: education,
            array: arrray
        };
      }

      
      render() {
          return (
            <section className="my-resume">
                <SectionHeader text="resume" subext="some text"></SectionHeader>
      
                <h3>Experience</h3>                
                {arrray.map((item) => (<ResumeExperienceTile></ResumeExperienceTile>))}
                <h3>Eduction</h3>
                {education.map(item => <ResumeEducationTile item={item}></ResumeEducationTile>)}
                
                <SectionHeader text="stack" subext="some technologies I'm fimilair with"></SectionHeader>
                <div className="skill-list">
                    {skillArray.map(icon => <div className="skill-icon"><label className="icon-label" htmlFor={icon.icon}>{icon.label}</label><FontAwesomeIcon id={icon.icon} icon={icon.icon} title={icon.label}/></div>)}
                </div>
                
            </section>
          );
      }
}

export default MyResume;