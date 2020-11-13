import React from "react";

import './skills.styles.css';

class Skills extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            languages: {},
        }
    }

    componentDidUpdate () {
        const repos = this.props.repos
        for(let repo in repos) {
            fetch(`https://api.github.com/repos/${this.props.user}/${repo}/languages`)
            .then(response => response.json())
            .then(language => this.setState({ languages: language }));
        }
    }

    lenguageSorting = (arr) => {
        for(let el in arr){
            if(this.state.languages[el]){
                // sum the new value to existing key
            } else {
                // create a new key(language) and value
            }
        }
    }


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
                    {console.log(this.state.languages)}
                </div>
            </div>
        )
    }
}

export default Skills;