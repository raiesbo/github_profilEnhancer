import React from 'react';

import './repo.styles.css';

/*
<h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
*/

class Repo extends React.Component{
    render() {
        return(
            <div className="repo">
                <div className="repoTitle">
                    <p>{ this.props.repo.name }</p>
                </div>

                <div className="repoDescription">
                    <p>{ this.props.repo.description }</p> 
                </div>

                <div className="repoInfo">
                    <div className="bottom">
                        { this.props.repo.language }{" "}
                        { this.props.repo.stargazers_count }{" "}
                        { this.props.repo.forks }{" "}
                        <span className="b">{ this.props.repo.size }KB</span>
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}

export default Repo;