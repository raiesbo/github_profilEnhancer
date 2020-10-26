import React from 'react';

import Presentation from '../components/presentation.component';

import './profil.styles.css';


class Profil extends React.Component{
    render(){
        return(
            <div>
                <Presentation user={this.props.user}/>
            </div>
        )
        
    }
};

export default Profil;