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

/*
	componentDidMount() {
		fetch(`https://api.github.com/users/raiesbo`)
		.then(response => response.json())
		.then(profil => this.setState({ user: profil }));
	}

*/
	fetchUser() {
		fetch(`https://api.github.com/users/${ this.state.username }`)
		.then(response => response.json())
		.then(profil => this.setState({ user: profil }));
	}


	handleInput = (e) => {
		this.setState({ username: e.target.value }, () => {
			this.fetchUser();
		});
	}

	handleEnter = (e) => {
		console.log(this.state.username)
		if(this.state.username === this.state.user.login){
			if (e.key === 'Enter') {
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
