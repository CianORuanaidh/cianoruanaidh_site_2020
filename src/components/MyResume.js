import React from 'react';
import SectionHeader from '../components/_elements/SectionHeader';
import ResumeExperienceTile from '../components/_elements/ResumeExperienceTile';
import ResumeEducationTile from '../components/_elements/ResumeEducationTile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faAngular, faReact, faSass, faWordpress, faShopify, faPython, faGit, faNodeJs} from '@fortawesome/free-brands-svg-icons';

import '../styles/MyResume.css';

let skillArray = [
    { label: 'HTML5', icon: faHtml5 }, 
    { label: 'CSS3', icon: faCss3 }, 
    { label: 'JavaScript', icon: faJs }, 
    { label: 'Angular', icon: faAngular }, 
    { label: 'ReactJS', icon: faReact }, 
    { label: 'NodeJS', icon: faNodeJs},
    { label: 'Sass', icon: faSass }, 
    { label: 'Wordpress', icon: faWordpress }, 
    { label: 'Shopify', icon: faShopify }, 
    { label: 'Python', icon: faPython }, 
    { label: 'Git', icon: faGit }
]

let experience = [
    {
        title: 'Software Developer',
        dates: 'June 2019 - Present',
        company: 'TravelEdge',
        project: [
            { 
                projectName: 'Digital Back Office web application',
                bullets : [
                    'Primary Front-End Developer on internal web application used by the TravelEdge finance department',
                    'Developed fully functional UI components using HTML, CSS, JavaScript, Angular8, .NET CORE and InVision Studio',
                    'Collaborated with Data Architect to design and implement UI components to complement lower tier functionality',
                    'Wrote and re-factored existing front-end code to be modular and reusable'
                ]
            },
            { 
                projectName: 'Agent Digital Experience (ADX) web application',
                bullets : [
                    'Contributed to the development of an all-in-one virtual platform for travel agents',
                    'Developed fully functional UI components using JavaScript,Angular8, BackboneJS, HTML, CSS and InVision Studio',
                    'Worked in an Agile environment alongside UX team to understand and design for user needs',
                    'Worked with BE team to optimize new features by implementing API endpoints based on DB architecture'                                    ]
            }
        ],
        keyAchievements: "High Margin feature release; DBO release; Helped get team’s sprint completion rate above target of 85%."
    },
    {
        title: 'Content Lead',
        dates: 'August 2014 - Nov 2018',
        company: 'Loblaw Digital',
        project: [
            { 
                projectName: 'Click & Collect (PC Express)',
                bullets : [
                    'Drove quality and accuracy for all product content across nine Loblaws Click & Collect websites',
                    'Established product content model based off of upstream and downstream dependencies',
                    'Designed and implemented all initial processes for product enrichment as well as best practices and guidelines for product content & photography',
                    'Developed, published and maintained in-house analytic dashboards and reports for Online Store Catalogue data',
                    'Partnered with automation and development teams to develop tools to update and QA Click & Collect website automatically'
                ]
            }
        ],
        keyAchievements: "Part of core team that built Click & Collect business from pre-launch through to status as Canada’s #1 online grocery retailer with over 250 pickup locations nationwide."
    },
    {
        title: 'Mentor',
        dates: 'June 2019 - Present',
        company: 'Juno College',
        project: [
            { 
                projectName: 'Bootcamp/CodeConnect student mentor',
                bullets : [
                    'Drove quality and accuracy for all product content across nine Loblaws Click & Collect websites',
                    'Established product content model based off of upstream and downstream dependencies',
                ]
            }
        ],
    }
]


let education = [
    {
        class: 'Full Stack Master Class',
        college: 'Juno College of Technology',
    },
    {
        class: 'Custom Theme Development (Wordpress & Shopify)',
        college: 'Juno College of Technology',
    },
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

class MyResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: experience,
            education: education,
        };
      }

      
      render() {
          return (
            <section id="resume" className="my-resume">
                <SectionHeader text="resume" subext="some text"></SectionHeader>
      
                <h3>Experience</h3>                
                {experience.map((item, i) => (<ResumeExperienceTile item={item} key={`key-experience-${i}`}></ResumeExperienceTile>))}
                <h3>Eduction</h3>
                {education.map((item, i) => <ResumeEducationTile item={item} key={`key-education-${i}`}></ResumeEducationTile>)}
                
                <SectionHeader text="stack" subext="some technologies I'm fimilair with"></SectionHeader>
                <div className="skill-list">
                    {skillArray.map(icon => <div key={`key-${icon.label}`} className="skill-icon"><label className="icon-label" htmlFor={icon.icon}>{icon.label}</label><FontAwesomeIcon id={icon.icon} icon={icon.icon} title={icon.label}/></div>)}
                </div>
                
            </section>
          );
      }
}

export default MyResume;