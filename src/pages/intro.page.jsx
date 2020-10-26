import React from 'react';

// Styles Import
import './intro.styles.css';



class Intro extends React.Component{

    render() {
        return(
            <div className="inputMain">
                    <div className="icon"/>
                    <input
                        className="searchBox"
                        placeholder="GitHub Username"
                        onChange={this.props.onChange}
                        onKeyDown={this.props.onKeyDown}
                    />
            </div>
        )
        
    }
};

export default Intro;