import React from 'react';
import SectionHeader from '../components/_elements/SectionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import '../styles/Contact.css';





const Contact = () => (
    <section className="contact">    
        <SectionHeader text="get in touch" subext="Let's collaborate"></SectionHeader>
        <div className="content">
            <h3>Contact</h3>
            <p>If you like my work, want to share some ideas, or just want to say hi, I'd love to hear from you.</p>
            <ul className="contact-list">
                <li className="contact-list-element">
                    <span className="contact-icon"><FontAwesomeIcon icon={faPaperPlane} title="email link icon"/></span> 
                    <div className="contact-list-element-content">
                        <a href="mailto:oruanaidh.cian@gmail.com" target="_blank" rel="noopener noreferrer">oruanaidh.cian@gmail.com</a>
                    </div>
                </li>
                <li className="contact-list-element">
                    <span className="contact-icon"><FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn link icon" /></span>
                    <div className="contact-list-element-content">    
                        <a href="mailto:oruanaidh.cian@gmail.com" target="_blank" rel="noopener noreferrer">linkedIn</a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
);
export default Contact;