import React from 'react';
import HeroSocialLinks from './HeroSocialLinks.js';
import SectionHeader from '../components/_elements/SectionHeader';

import ressuemPfd from '../assets/cian_oruanaidh_resume_2020.pdf';

import '../styles/AboutMe.css';

const AboutMe = () => (
    <section className="about-me" id="about-me">    
        <SectionHeader text="about me" subext="some text"></SectionHeader>
        <div className="content">
            <h3>I'm Cian, a Front-End Developer based in Toronto.</h3>
            <span className="phonetic">sounds like<em>'Key-in Oh-Rooney'</em></span>
            <p className="bio">Currently building industry leading software with TravelEdge. 
                Web development combines my three favourite things, creative thinking, problem solving and continuous learning. 
                With a background in both Science and Fine Art I’m a blend of technical problem solving and strong creative thinking.
                When I'm not coding I love doingthis like this.</p>
        </div>
        <div className="about-me-footer">
            <p><strong>email: </strong> <a href="mailto:oruanaidh.cian@gmail.com">oruanaidh.cian@gmail.com</a></p>
            <HeroSocialLinks></HeroSocialLinks>
        <a href={ressuemPfd} target="_blank" rel="noopener noreferrer" className="download-resume">Resume download</a>
        </div>
    </section>
);
export default AboutMe;