//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Link and Redirect from Router
import { Link, Redirect } from 'react-router-dom';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { signIn } from '../../../store/actions/authActions';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBEdgeHeader,
    MDBFreeBird,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBBtn,
    MDBAlert,
    MDBIcon,
} from "mdbreact";

//> Images
// logo
import EagleLogo from '../../../assets/logo/op_hydra_eagle.png';

//> CSS
import './signin.scss';

class SignIn extends React.Component {

    state = {
        email: "",
        password: "",
        dynamic_access: "",
        secure_key: "",
    }

    handleChange = (e) => {
        this.setState({[e.target.type]: e.target.value})
    }

    handleSubmit = (e) => {
        // Prevent page from reloading
        e.preventDefault();
        // Validation
        e.target.className = "needs-validation was-validated";
        // Sign user in
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;

        console.log(this.state);

        /* Redirect to Dashboard
         * If user is already logged in, redirect to Dashboard
         * This doubles as a neat way to redirect the user directly after login
         */
        //if(auth.uid !== undefined) return <Redirect to="/dashboard"/> 

        return (
        <div id="login">
            <MDBEdgeHeader color="green lighten-3" />
            <MDBFreeBird>
                <MDBRow>
                    <MDBCol
                    md="10"
                    className="mx-auto float-none white z-depth-1 py-2 px-2"
                    >
                        <MDBCardBody>
                            <MDBRow className="justify-content-center ubuntu">
                                <MDBCol md="6">
                                    <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
                                        <img className="d-block m-auto img-fluid" src={EagleLogo} alt="Hydra Logo"/>
                                        <h3 className="text-center mb-4 font-weight-bold">HYDRA Secure Access</h3>
                                        {
                                            authError && 
                                                <MDBAlert color="danger" >
                                                    {authError}
                                                </MDBAlert>
                                        }
                                        
                                        <label htmlFor="da" className="grey-text">
                                        DA Access Key
                                        </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon">
                                                <MDBIcon icon="shield" />
                                                </span>
                                            </div>
                                            <input maxLength="7" id="da" type="text" name="dynamic_access" className="form-control" placeholder="XXXXXXX" aria-label="DA" aria-describedby="basic-addon" />
                                            <div className="invalid-feedback">
                                                Please enter your DA key.
                                            </div>
                                        </div>
                                        
                                        <br />
                                        
                                        <MDBRow>
                                            <MDBCol md="6">
                                                <label htmlFor="sec" className="grey-text">
                                                SEC Key
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                        <MDBIcon icon="key" />
                                                        </span>
                                                    </div>
                                                    <input id="sc" minLength="3" maxLength="3" type="password" name="secure_key" className="form-control" placeholder="XXX" aria-label="DA" aria-describedby="basic-addon" />
                                                    <div className="invalid-feedback">
                                                        Please enter your secure key.
                                                    </div>
                                                </div>
                                            </MDBCol>
                                             <MDBCol md="6">
                                                <label htmlFor="psw" className="grey-text">
                                                Password
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                        <MDBIcon icon="lock" />
                                                        </span>
                                                    </div>
                                                    <input maxLength="30" id="psw" type="password" name="password" className="form-control" aria-label="DA" aria-describedby="basic-addon" />
                                                    <div className="invalid-feedback">
                                                        Please enter your password.
                                                    </div>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>

                                        <div className="text-center mt-4">
                                            <MDBBtn color="danger" type="submit"><i className="fas fa-key pr-2"></i>Login</MDBBtn>
                                        </div>
                                        <p className="text-muted text-center mt-3">No access? <Link to="/join"><strong>Join</strong></Link> HYDRA now!</p>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBFreeBird>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authErrorDetails: state.auth.authErrorDetails,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
