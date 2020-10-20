import React from 'react';
import '../styles/HeroSocialLinks.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

const HeroSocialLinks = () => (
    <nav>    
        <ul className="social-links">                
            <li><a href="githib.com"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="githib.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href="githib.com"><FontAwesomeIcon icon={faHandPeace} /></a></li>
        </ul>          
    </nav>
);
export default HeroSocialLinks;