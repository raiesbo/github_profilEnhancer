import React from 'react';

import Intro from './pages/intro.page';
import Profil from './pages/profil.page';

import './App.css';


class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			user: "",
			data: "data",
			username: "",
			menu: true
		};
	}

	fetchUser() {
		fetch(`https://api.github.com/users/${ this.state.username }`)
		.then(response => response.json())
		.then(profil => this.setState({ user: profil }));

	}

	handleInput = (e) => {
        this.setState({
			username: e.target.value
		})
	}
	
	handleEnter = (e) => {
		this.fetchUser()
		if (e.key === 'Enter') {
			if(this.state.username === this.state.user.login){
				this.setState({
					menu: false
				})
			}
		}
	}

	render() {
		return(
			<div className="main">
				{this.state.menu? <Intro onChange={this.handleInput} username={this.state.username}  onKeyDown={this.handleEnter} /> : <Profil user={this.state.user}/>}
    		</div>
		)
	};
}

export default App;
