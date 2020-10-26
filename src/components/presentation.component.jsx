import React from 'react';


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
							@{this.props.user.login}
						</h4>

						<h4 className="city">
							Location: {this.props.user.location} Joined: {this.props.user.created_at}
						</h4>

						<div className="miniWrapper">
							<div className="box">
								<span>{this.props.user.public_repos}</span> Repositories
							</div>
							<div className="box">
								<span>{this.props.user.followers}</span> Followers
							</div>
							<div className="box">
								<span>{this.props.user.following}</span> Following
							</div>
						</div>
						
					</div>
				</header>
    		</div>
        )
        
    }
}


export default Presentation;