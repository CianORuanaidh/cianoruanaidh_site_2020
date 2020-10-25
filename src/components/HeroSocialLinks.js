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
            <li><a href="githib.com"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="githib.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><Link to="/misc_fun"><FontAwesomeIcon icon={faHandPeace} /></Link></li>
        </ul>          
    </nav>
);
export default HeroSocialLinks;