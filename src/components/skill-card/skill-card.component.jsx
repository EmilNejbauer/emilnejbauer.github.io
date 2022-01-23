import React from "react";
import './skill-card.styles.scss';

const SkillCard = ({title, level, src}) => (
    <div className="skill-card">
        <img src={src} alt="Avatar" />
        <div className="container">
            <h4><b>{title}</b></h4>
            <div className="bar">
                <div className="level" style={{"width": `${level}%`}}>{level}%&nbsp;</div>
            </div>
        </div>
    </div>
);

export default SkillCard;