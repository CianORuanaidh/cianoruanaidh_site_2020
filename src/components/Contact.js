import React from 'react';
import SectionHeader from '../components/_elements/SectionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import BackToHomeLink from './BackToHomeLink.js';




import '../styles/Contact.css';

const Contact = () => (
    <section className="contact">    
        {/* <BackToHomeLink></BackToHomeLink> */}
        <SectionHeader text="get in touch" subext="Let's collaborate"></SectionHeader>
        <div className="content">
            <h3>Contact</h3>
            <p>If you like my work, want to share some ideas, or just want to say hi, I'd love to hear from you.</p>
            <ul className="contact-list">
                <li className="contact-list-element">
                    <span className="contact-icon"><FontAwesomeIcon icon={faPaperPlane} /></span> 
                    <div className="contact-list-element-content">
                        <label>email</label>
                        <p>oruanaidh.cian@gmail.com</p>
                    </div>
                </li>
                <li className="contact-list-element">
                    <span className="contact-icon"><FontAwesomeIcon icon={faLinkedinIn} /></span>
                    <div className="contact-list-element-content">    
                        <label>linkedIn</label>
                        <p>https://ca.linkedin.com/in/cian-o-ruanaidh-151b3455</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
);
export default Contact;