//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Animations
import FadeIn from 'react-fade-in';

//> Redux
// Connect
import { connect } from 'react-redux';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBEdgeHeader,
    MDBFreeBird,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard,
    MDBIcon,
} from 'mdbreact';

//> CSS
import './upgrade.scss';

class Upgrade extends React.Component {
    state = {
        isLogged: false,
    }

    componentDidMount(){
        if(this.props.auth.uid !== undefined) this.setState({isLogged: true});
    }

    render() {
        const { profile } = this.props;

        if(profile.tier !== undefined){
            return (
            <FadeIn>
                <div className="upgrade">
                    <MDBEdgeHeader color="green lighten-3" />
                    <MDBFreeBird>
                        <MDBRow>
                            <MDBCol
                            md="4"
                            className="mx-auto float-none py-2 px-2"
                            >
                                <MDBCard className={"pricing-card" + (profile.tier === 0 ? (" card-active ") : (" ")) + "active-basic"} >
                                    
                                    <div className="price header white-text success-color rounded-top">
                                        <h2 className="number">0</h2>
                                        <div className="version">
                                        <h5 className="mb-0">Basic</h5>
                                        </div>
                                    </div>
                                    <MDBCardBody className="striped">
                                        <ul className="list-unstyled">
                                            <li>
                                                <p className="mt-2"><i className="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Receive <strong>3 tabs</strong></p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-times red-text pr-2"></i>Smart analysis</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-times red-text pr-2"></i>Personal coach</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-times red-text pr-2"></i>Connect your Social Media</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-times red-text pr-2"></i>Family Features</p>
                                            </li>
                                        </ul>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol
                            md="4"
                            className="mx-auto float-none py-2 px-2 mt-sm"
                            >
                                <MDBCard className={"pricing-card" + (profile.tier === 1 ? (" card-active ") : (" ")) + "active-personal"}>
                                    
                                    <div className="price header white-text purple rounded-top">
                                        <h2 className="number">2,97</h2>
                                        <div className="version">
                                        <h5 className="mb-0">Personal</h5>
                                        </div>
                                    </div>
                                    <MDBCardBody className="striped">
                                        <ul className="list-unstyled">
                                            <li>
                                                <p className="mt-2"><i className="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Receive <strong>3 additional tabs</strong></p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Smart analysis</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Personal coach</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Connect your Social Media</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-times red-text pr-2"></i>Family Features</p>
                                            </li>
                                        </ul>
                                        {profile.tier === 0 &&
                                            <button className="btn btn-purple waves-effect waves-light"><i className="far fa-arrow-alt-circle-up pr-2"></i>Upgrade</button>
                                        }
                                        {profile.tier === 1 &&
                                            <button className="btn btn-danger btn-md waves-effect waves-light"><MDBIcon icon="times" className="pr-2" />Cancel</button>
                                        }
                                        
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol
                            md="4"
                            className="mx-auto float-none py-2 px-2 mt-sm"
                            >
                                <MDBCard className={"pricing-card" + (profile.tier === 2 ? (" card-active ") : (" ")) + "active-family"}>
                                    
                                    <div className="price header white-text warning-color rounded-top">
                                        <h2 className="number">9,99</h2>
                                        <div className="version">
                                        <h5 className="mb-0">Family</h5>
                                        <small>Link up to 5 accounts</small>
                                        </div>
                                    </div>
                                    <MDBCardBody className="striped">
                                        <ul className="list-unstyled">
                                            <li>
                                                <p className="mt-2"><i className="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Receive <strong>6 additional tabs</strong></p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Smart analysis</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Personal coach</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Connect your Social Media</p>
                                            </li>
                                            <li>
                                                <p><i className="fa fa-check green-text pr-2"></i>Family Features</p>
                                            </li>
                                        </ul>
                                        {(profile.tier === 0 || profile.tier === 1) &&
                                            <button className="btn btn-warning waves-effect waves-light"><i className="far fa-arrow-alt-circle-up pr-2"></i>Upgrade</button>
                                        }
                                        {profile.tier === 2 &&
                                            <button className="btn btn-danger btn-md waves-effect waves-light"><MDBIcon icon="times" className="pr-2" />Cancel</button>
                                        }
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBFreeBird>
                </div>
            </FadeIn>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Upgrade);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
