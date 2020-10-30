import React from "react";

import Repo from './repo.component';

import "./reposList.styles.css";



class ReposList extends React.Component{


    render() {
        return(
            <div className="reposContainer">

                <div className="reposTitleWrappe">
                    <h3 className="sectionTitle">
                        Top Repositories {" "}
                        <select id="filteredRepo" name="filteredRepo" onChange={(e) => this.props.inputHandler(e)}>

                        <option value="stargazers_count">by Stars</option>
                        <option value="forks">by Forks</option>
                        <option value="size">by Bytes</option>

                    </select>
                    {" "}:
                    </h3> 
                </div>
                
                <div className="reposWrapper">

                    {
                        (this.props.repos? this.props.repos.slice(0, 6).map(repo => (
                            <Repo id={repo.id} repo={repo}/>
                        )) : null)
                    }


                </div>

            </div>
        )
    }
}

export default ReposList;