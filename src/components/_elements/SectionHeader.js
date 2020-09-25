import React from 'react';

import '../../styles/SectionHeader.css';

const SectionHeader = (props) => (
    <div className={`section-header ${ props.alignLeft ? 'align-left' : ''}`}>    
        {!!props.subext && <span>{props.subext}</span>}
        <h2>{props.text}</h2>         
        <div className="animated-bar"></div>
    </div>
);
export default SectionHeader;