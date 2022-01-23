import React from "react";
import './about-me.styles.scss';
import profile from "../../assets/profile.jpg";

const AboutMe = () => (
    <div className="about-me">
        <div className="container">
            <img src={profile} alt="profile" />
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti reprehenderit maiores ad corporis quod deserunt incidunt alias mollitia neque rerum eveniet, exercitationem porro libero dolorum consectetur facilis ratione obcaecati illum?</p>
        </div>
      </div>
);

export default AboutMe;