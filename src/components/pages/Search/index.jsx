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
            return(
                <div id="dashboard">
                    
                </div>
            );
        } else {
            return (
                <div id="dashboard">
                    <MDBEdgeHeader color="green lighten-3" />
                    <MDBFreeBird>
                        <MDBRow>
                            <MDBCol
                            md="10"
                            className="mx-auto float-none white z-depth-1 py-2 px-2"
                            >
                                <MDBCardBody className="text-center">
                                <MDBProgress material preloader />
                                    <MDBAlert color="success">
                                    <h2 
                                    className="font-weight-bold"
                                    >
                                    Authorized.
                                    </h2>
                                    <p className="lead">Your dashboard is being loaded.</p>
                                    </MDBAlert>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBFreeBird>
                </div>
            )
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
