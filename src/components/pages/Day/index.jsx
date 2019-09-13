//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Redirect from Router
import { Redirect } from 'react-router-dom';

//> Redux
// Connect
import { connect } from 'react-redux';

class Day extends React.Component{

    // Get url param
    getDate = () => {
        let date = this.props.match.params.date;

        if(date !== undefined){
            let parsed = Date.parse(date);
            if(!isNaN(parsed)){
                console.log(parsed);
            } else {
                return false;
            }
        } else {
            return false;
        }
        
    }

    render(){
        const { auth } = this.props;

        /* Route Guarding
        * If user is not logged in, redirect him/her to the login page
        */
        if(!auth.uid) return <Redirect to="/login"/> 

        this.getDate()
        return(
            <h1>Day</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Day);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
