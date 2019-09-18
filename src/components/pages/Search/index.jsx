//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Animations
import FadeIn from 'react-fade-in';
// DOM bindings for React Router
import { Link, Redirect } from 'react-router-dom';

//> Additional
// Typewriter effect
import Typing from 'react-typing-animation';

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
                                    <Typing speed={0} hideCursor={true}>
                                        <p className="title">DET [CONNECT] IDENT LOOKUP ></p>
                                    </Typing>
                                </div>
                            </MDBCol>
                            <MDBCol md="3">
                                <Typing speed={0} hideCursor={true}>
                                    <p className="code my-3">
                                        INIT DB WRT300N_HYDRA:<span>LINUX</span><br/>
                                        >>>><br/>
                                        REQUIRE[AUTHENTICION].IMMINANT -> EXECUTE SEARCH PROTOCOL 
                                        <span>OCTA-9-FIVE</span>.<br/><br/>
                                        INCLUDE(INSIGHT).IMMINANT -> EXECUTE INSIGHT PROTOCOL 
                                        <span>TETRA-9-ALPHA</span> <br/>
                                        SECURITY LEVEL ACCEPTED. INSIGHT ALGORITHM REQUIRED.<br/><br/>
                                        REQUIRE_ONCE<span>(INSIGHT["ZOOLA"])</span> -> EXECUTE TABLE INSIGHT 
                                        WHERE <span>FA_MEMBERS</span> = <span>?</span>
                                        <br/>
                                        LOADING INSIGHT..............<br/>
                                        INSIGHT ALGORYTHM INSTALLED.<br/><br/>
                                        CLIENT IP: <span>212.152.179.113</span><br/>
                                        ALL RESOURCES LOADED.<br/>
                                        HYDRA PROTOCOL READY FOR USAGE.
                                    </p>
                                </Typing>
                            </MDBCol>
                        </MDBRow>
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
