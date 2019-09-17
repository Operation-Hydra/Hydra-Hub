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
    MDBContainer,
    MDBEdgeHeader,
    MDBFreeBird,
    MDBRow,
    MDBCol,
    MDBNavLink,
    MDBIcon,
    MDBNavItem,
    MDBTabContent,
    MDBNav,
    MDBAlert,
    MDBBadge,
    MDBBtn,
    MDBPopover,
    MDBPopoverBody,
    MDBPopoverHeader,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBCard,
    MDBCardBody,
    MDBSpinner,
    MDBProgress,
} from 'mdbreact';

//> Redux
// Connect
import { connect } from 'react-redux';
// Compose
import { compose } from 'redux';
// Actions
import { signOut } from '../../../store/actions/authActions';

//> Firestore
import { firestoreConnect } from 'react-redux-firebase';

//> Components
import {
    WorldMap,
    AustriaMap,
} from '../../molecules';

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

        console.log(profile);

        if(profile.isLoaded){
            if(profile.level < 1){
                return(
                    <p>This feature is not available for visitors.</p>
                );
            } else {
                const clearance = profile.level;

                return(
                    <div id="search">
                        
                    </div>
                )
            }
            
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        records: state.firestore.ordered.records,
        tabs: state.firestore.ordered.tabs,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
