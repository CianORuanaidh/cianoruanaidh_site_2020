import React from 'react';

import '../../styles/ResumeExperienceTile.css';

const ResumeEducationTile = (props) => (
    <div className="experience-tile education">
        <h4 className="title">{props.item.class}</h4>
        <p>{props.item.college}</p>
    </div>    
);
export default ResumeEducationTile;
