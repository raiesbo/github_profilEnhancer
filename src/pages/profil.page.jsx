import React from 'react';

import Presentation from '../components/presentation.component';
import Skills from '../components/skills.component';
import Repos from '../components/repos.component';

import './profil.styles.css';


class Profil extends React.Component{
    constructor() {
        super()

        this.state = {
            
        }
    }
/*
    fetchRepos() {
		fetch(`https://api.github.com/users/${ this.state.username }/repos`)
		.then(response => response.json())
		.then(user => this.setState({ repos: user }));
    }
*/  
    componentDidMount() {
		fetch(`https://api.github.com/users/raiesbo/repos`)
		.then(response => response.json())
		.then(profil => this.setState({ repos: profil }));
	}


    render(){
        return(
            <div>
                <Presentation user={this.props.user}/>
                <Skills repos={this.state.repos}/>
                <Repos repos={this.state.repos}/>
            </div>
        )
        
    }
};

export default Profil;