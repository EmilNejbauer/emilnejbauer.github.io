import React from "react";
import './header.styles.scss';
import {Link} from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="home">
        <Link to='/'>Home</Link>
        </div>
        <div className="links">
            <Link to='/about'>About me</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
);

export default Header;