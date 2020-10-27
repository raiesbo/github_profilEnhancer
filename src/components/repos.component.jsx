import React from "react";

import "./repos.styles.css";

class Repos extends React.Component{
    render() {
        return(
            <div className="reposContainer">
                <div className="reposTitleWrappe">
                <h3 className="sectionTitle">Repositories:</h3>
                </div>
                
                <div className="reposWrapper">
                    <div className="repos box1">
                        Languages:
                    </div>

                    <div className="repos box2">
                        Latest constributions:
                    </div>

                    <div className="repos box3">
                        ?
                    </div>

                    <div className="repos box3">
                        ?
                    </div>

                    <div className="repos box3">
                        ?
                    </div>

                    <div className="repos box3">
                        ?
                    </div>



                </div>
                {console.log(this.props.repos)}
            </div>
        )
    }
}

export default Repos;