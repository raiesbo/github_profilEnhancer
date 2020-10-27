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
                        Languages:
                    </div>

                    <div className="skills box2">
                        Latest constributions:
                    </div>

                    <div className="skills box3">
                        ?
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;