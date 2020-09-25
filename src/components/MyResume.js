import React from 'react';

import SectionHeader from '../components/_elements/SectionHeader';
import ResumeExperienceTile from '../components/_elements/ResumeExperienceTile';
import ResumeEducationTile from '../components/_elements/ResumeEducationTile';

import '../styles/MyResume.css';
// import { render } from '@testing-library/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faAngular, faReact, faSass, faWordpress, faShopify, faPython, faGit} from '@fortawesome/free-brands-svg-icons';

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
                <SectionHeader text="resume"></SectionHeader>
      
                <h3>Experience</h3>                
                {arrray.map((item) => (<ResumeExperienceTile></ResumeExperienceTile>))}
                <h3>Eduction</h3>
                {education.map(item => <ResumeEducationTile item={item}></ResumeEducationTile>)}
                
                {/* <h3>My Skills</h3> */}
                <SectionHeader text="my skills" alignLeft="true" subext="some of my favourites"></SectionHeader>

                <div className="skill-list">
                    {skillArray.map(icon => <div className="skill-icon"><label className="icon-label" htmlFor={icon.icon}>{icon.label}</label><FontAwesomeIcon id={icon.icon} icon={icon.icon} title={icon.label}/></div>)}
                </div>
      
                {/* <div className="exp-edu-holder">
                    <div className="tile-col">
                    </div>
                    <div>
                    </div>
                </div> */}
            </section>
          );
      }
}

// const MyResume = () => (
//     <section className="my-resume">
//         <SectionHeader text="resume"></SectionHeader>

//         <h3>Experience</h3>
//         <div>
//             <h4>Software Developer</h4>
//             <p>2019 - present day</p>
//             <p></p>
//         </div>

//         <h3>Eduction</h3>

//     </section>
// );
export default MyResume;