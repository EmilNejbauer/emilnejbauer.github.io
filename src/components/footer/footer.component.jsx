import React from "react";
import './footer.styles.scss';
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";


const Footer = () => (
    <div className="footer">
        <a href="https://github.com/EmilNejbauer" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/emil-nejbauer-77459b157/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
    </div>
);

export default Footer;