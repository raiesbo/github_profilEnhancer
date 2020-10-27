import React from "react";

import './skills.styles.css';

class Skills extends React.Component{
    render() {
        return(
            <div className="skillsContainer">

                <div className="skills box1">

                </div>

                <div className="skills box2">

                </div>

                <div className="skills box3">

                </div>

                {console.log(this.props.repos)}
            </div>
        )
    }
}

export default Skills;