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
} from "mdbreact";

class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
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

         /* Redirect to Dashboard
         * If user is already logged in, redirect to Dashboard
         * This doubles as a neat way to redirect the user directly after login
         */
        if(auth.uid !== undefined) return <Redirect to="/dashboard"/> 

        return (
        <div>
            <MDBEdgeHeader color="green lighten-3" />
            <MDBFreeBird>
                <MDBRow>
                    <MDBCol
                    md="10"
                    className="mx-auto float-none white z-depth-1 py-2 px-2"
                    >
                        <MDBCardBody>
                            <MDBRow className="justify-content-center">
                                <MDBCol md="6">
                                    <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
                                        <p className="h4 text-center mb-4">Sign in</p>
                                        {
                                            authError && 
                                                <MDBAlert color="danger" >
                                                    {authError}
                                                </MDBAlert>
                                        }
                                        
                                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Your email
                                        </label>
                                        <input
                                        type="email"
                                        id="defaultFormLoginEmailEx"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter an E-Mail
                                        </div>
                                        <br />
                                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Your password
                                        </label>
                                        <input
                                        type="password"
                                        id="defaultFormLoginPasswordEx"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter a password
                                        </div>
                                        <div className="text-center mt-4">
                                            <MDBBtn color="success" type="submit"><i className="fas fa-key pr-2"></i>Login</MDBBtn>
                                        </div>
                                        <p className="text-muted text-center mt-3">Not a member yet? No problem, just <Link to="/join"><strong>join us</strong></Link>!</p>
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
