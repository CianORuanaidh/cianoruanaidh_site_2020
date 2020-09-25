import React from 'react';
import '../styles/HeroSocialLinks.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const HeroSocialLinks = () => (
    <nav>    
        <ul className="social-links">
                
            <li><a ><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a ><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a ><FontAwesomeIcon icon={faHandPeace} /></a></li>

            {/* <li><a ><FontAwesomeIcon icon={faGithubSquare} /></a></li>
            <li><a ><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a ><i className="devicon-linkedin-plain"></i></a></li>
            <li><a >...</a></li> */}
        </ul>          
    </nav>
);
export default HeroSocialLinks;