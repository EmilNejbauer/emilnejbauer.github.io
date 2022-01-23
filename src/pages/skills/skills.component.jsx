import React from "react";
import './skills.styles.scss';
import SkillCard from "../../components/skill-card/skill-card.component";
import SKILLS_DATA from './skills.data';

class Skills extends React.Component {
    constructor(){
        super();
        this.state = {
            skills: SKILLS_DATA
        }
    }
    render() {
        const skills = this.state.skills;
        console.log(this.state.skills);
        return(<div className="skills">
        <div className="container">
            {
             skills.map(({title, level, src}) => (<SkillCard title={title} level={level} src={src} />))
            }
             {/* <SkillCard title={this.state.skills[0].title} level="80" src={this.state.skills[0].image} />
             <SkillCard /> */}
        </div>
     </div>)
    }
};

export default Skills;