import React from 'react';

import './presentation.styles.css';

class Presentation extends React.Component{



    render() {
        return(
            <div className="main">
				<header className="wrapper">

					<div className="img-container">
						<div className="backgroundImg"
						style={{
							backgroundImage: `url(${ this.props.user.avatar_url })`
							}}
						/>
					</div>
					
					<div className="userStats">

						<h1 className="name">
							{this.props.user.name}
						</h1>

						<h4 className="login">
							<a href={this.props.user.html_url}>@{this.props.user.login}</a>
						</h4>

						<h4 className="city">
							<div className="plotIcon"/> {this.props.user?  `${this.props.user.location} |` : null} Joined: {(this.props.user? this.props.user.created_at.substring(0,10): null)}
						</h4>

						<div className="miniWrapper">
							<div className="box">
								<span>{this.props.user.public_repos}</span> <p>Repositories</p>
							</div>
							<div className="box">
								<span className="boxNum">{this.props.user.followers}</span> <p>Followers</p>
							</div>
							<div className="box">
								<span>{this.props.user.following}</span> <p>Following</p>
							</div>
						</div>
					</div>
				</header>
    		</div>
        )
        
    }
}


export default Presentation;