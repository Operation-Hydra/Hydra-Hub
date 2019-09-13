//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Redirect and Link from Router
import { Redirect,  Link } from 'react-router-dom';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { signUp } from '../../../store/actions/authActions';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBBtn, MDBEdgeHeader, MDBFreeBird, MDBCardBody, MDBAlert, } from 'mdbreact';

class SignUp extends React.Component{

   state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        // Prevent page from reloading
        e.preventDefault();
        // Validation
        e.target.className = "needs-validation was-validated";
        // Check content
        if(this.state.name !== "" && this.state.email !== "" && this.state.password !== "" && this.state.password2 !== ""){
            if(this.state.password === this.state.password2){
                // Create user
                this.props.signUp(this.state)
            }else {
                console.log("Passwords do not match");
            }
        } else {
            console.log("Fields empty");
        }
    }

    render(){
        const { authError, auth } = this.props;
         /* Redirect to Dashboard
         * If user is already logged in, redirect to Dashboard
         */
        if(auth.uid !== undefined) return <Redirect to="/dashboard"/> 
        return(
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
                                            <p className="h4 text-center mb-4">Start your journey</p>
                                            {
                                                authError && 
                                                    <MDBAlert color="danger" >
                                                        {authError}
                                                    </MDBAlert>
                                            }
                                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Your name
                                            </label>
                                            <input
                                            type="text"
                                            name="name"
                                            id="defaultFormRegisterNameEx"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            required
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your full name
                                            </div>
                                            <div className="valid-feedback">
                                                Wow! You've got a beautiful name ;)
                                            </div>
                                            <br />
                                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                            Your email
                                            </label>
                                            <input
                                            type="email"
                                            name="email"
                                            id="defaultFormRegisterEmailEx"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            required
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your email
                                            </div>
                                            <br />
                                            <label
                                            htmlFor="defaultFormRegisterPasswordEx"
                                            className="grey-text"
                                            >
                                            Your password
                                            </label>
                                            <input
                                            type="password"
                                            name="password"
                                            id="defaultFormRegisterPasswordEx"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.password}
                                            minLength="6"
                                            required
                                            />
                                            <br />
                                            <label
                                            htmlFor="defaultFormRegisterPasswordEx2"
                                            className="grey-text"
                                            >
                                            Repeat your password
                                            </label>
                                            <input
                                            type="password"
                                            name="password2"
                                            id="defaultFormRegisterPasswordEx2"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.password2}
                                            minLength="6"
                                            required
                                            />
                                            <div className="text-center mt-4">
                                                <MDBBtn color="success" type="submit">
                                                    <i className="fas fa-chevron-right pr-2"></i>Start your journey
                                                </MDBBtn>
                                            </div>
                                            <p className="text-muted text-center mt-3">Already a member? <Link to="/login" ><strong>Login</strong></Link></p>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
            </div>
        )
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
