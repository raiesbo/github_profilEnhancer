import React from 'react';

import Presentation from '../components/presentation.component';
//import Skills from '../components/skills.component';
import ReposList from '../components/reposList.component';

import './profil.styles.css';


class Profil extends React.Component{
    constructor() {
        super()

        this.state = {
            repos: null,
            sortedList: null,
            key: "stargazers_count"
        }
    }

    componentDidMount() {
		fetch(`https://api.github.com/users/${ this.props.user.login }/repos`)
		.then(response => response.json())
		.then(user => this.setState({ repos: user }));
    }
/*  
    componentDidMount() {
		fetch(`https://api.github.com/users/pereman2/repos`)
        .then(response => response.json())
        .then(profil => this.setState({ repos: profil }));
        
    }
*/
    componentDidUpdate(prevProps, prevState) {

        if (this.state.key !== prevState.key) {
            let newArr = [...this.state.repos]
            this.setState({ sortedList: this.sortingRepos(newArr, this.state.key) })
        };

        if (this.state.repos !== prevState.repos) {
            let newArr = [...this.state.repos]
            this.setState({ sortedList: this.sortingRepos(newArr, this.state.key) })
        };

      }

    //SORTING ALGORITHM
    biggestRepo = (arr, key) => {
        let biggestValue = arr[0][key];
        let biggest = arr[0]
        let biggestIndex = 0;
        for (let i = 0; i < arr.length; i = i + 1) {
            if (arr[i][key] >= biggestValue) {
                biggestValue = arr[i][key];
                biggest = arr[i]
                biggestIndex = i;
            }
        }
        console.log(biggest)
        return biggestIndex
    };

    sortingRepos = (arr, key) => {   
        let newArr = [];
        for (let i = 0; i < arr.length; i = i + 1) {
            let biggest = this.biggestRepo(arr, key);
            newArr.push(arr[biggest])
            arr.splice(biggest, 1)
        }
        console.log("newArray", newArr)
        return newArr
    }

    // DROPDOWN KEY STATE UPDATE
    inputHandler = (e) => {
        this.setState({
            key: e.target.value
        }, () => {
			console.log(this.state.key);
		});
        
    }

    render(){
        return(
            <div>
                <Presentation user={this.props.user}/>
                {/*<Skills repos={this.state.repos}/>*/}
                <ReposList repos={this.state.sortedList} inputHandler={this.inputHandler}/>

                {
                    console.log("sorted:",this.state.sortedList),
                    console.log("repos:",this.state.repos)
                }
            </div>
        )
        
    }
};

export default Profil;