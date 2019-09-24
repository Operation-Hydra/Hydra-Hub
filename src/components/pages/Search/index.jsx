//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Animations
import FadeIn from 'react-fade-in';
// DOM bindings for React Router
import { Link, Redirect } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { 
    MDBRow,
    MDBCol,
    MDBSpinner,
} from 'mdbreact';

//> Redux
// Connect
import { connect } from 'react-redux';
// Compose
import { compose } from 'redux';

//> Firestore
import { firestoreConnect } from 'react-redux-firebase';

//> Images
// logo
import EagleLogo from '../../../assets/logo/op_hydra_eagle.png';

//> CSS
import './search.scss';

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render(){
        // Get records from Regex Reducer
        const { auth, profile } = this.props;

        /* Route Guarding
         * If user is not logged in, redirect him/her to the login page
         */
        if(!auth.uid) return <Redirect to="/login"/>

        if(profile.isLoaded){
            if(profile.level < 1){
                return(
                    <p>This feature is not available for visitors.</p>
                );
            } else {
                const clearance = profile.level;

                return(
                    <div id="search" className="ubuntu white-text">
                        <MDBRow className="w-100 h-100">
                            <MDBCol md="3" className="text-center py-5">
                                <img className="d-block m-auto img-fluid" src={EagleLogo} alt="Hydra Logo"/>
                                <h3 className="font-weight-bold">Search Terminal</h3>
                                <p>Clearance Level { profile.level }</p>
                            </MDBCol>
                            <MDBCol md="6" className="mid">
                                <div className="console-border console-border-left"></div>
                                <div className="console-border console-border-right"></div>
                                <div className="searchbox">
                                    
                                </div>
                            </MDBCol>
                            <MDBCol md="3">
                                
                            </MDBCol>
                        </MDBRow>
                    </div>
                )
            }
            
        } else {
            return (
                <div className="w-100 flex-center">
                    <MDBSpinner />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps)(Dashboard);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
