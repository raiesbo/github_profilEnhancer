import React from "react";

import './skills.styles.css';

class Skills extends React.Component{
    render() {
        return(  
            <div className="skillsContainer">
                <div className="skillsTitleWrappe">
                    <h3 className="sectionTitle">Skills:</h3>
                </div>
                <div className="skillsWrapper">
                    <div className="skills box1">
                        Top Languages:
                    </div>

                    <div className="skills box2">
                        Languages by stars:
                    </div>

                    <div className="skills box3">
                        Latest constributions:
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;