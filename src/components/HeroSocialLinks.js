import React from 'react';
import { Link } from 'react-router-dom';        

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

import '../styles/HeroSocialLinks.css';

const HeroSocialLinks = () => (
    <nav>    
        <ul className="social-links">                
            <li><a href="https://github.com/CianORuanaidh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/cian-o-ruanaidh-151b3455/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><Link to="/misc_fun"><FontAwesomeIcon icon={faHandPeace} /></Link></li>
        </ul>          
    </nav>
);
export default HeroSocialLinks;