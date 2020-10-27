import React from "react";

import Repo from './repo.component';

import "./reposList.styles.css";



class ReposList extends React.Component{
    render() {
        return(
            <div className="reposContainer">

                <div className="reposTitleWrappe">
                <h3 className="sectionTitle">Top Repositories:</h3>
                </div>
                
                <div className="reposWrapper">

                    {
                        (this.props.repos? this.props.repos.slice(0, 6).map(repo => (
                            <Repo id={repo.id} repo={repo}/>
                        )) : null)
                    }


                </div>
                {console.log(this.props.repos)}
            </div>
        )
    }
}

export default ReposList;