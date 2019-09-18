//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { Link } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdbreact';

//> Images
// Logo
import { ReactComponent as Logo } from "../../../assets/logo.svg";

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="success-color" className="font-small pt-4 mt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                    <MDBCol md="6">
                        <Logo style={{ height: "2.5rem", width: "6rem" }} />
                        <p>
                        Moody is your easy-to-use mood and health tracking software
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/press">Press</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/faq">Referral program</Link>
                            </li>
                        </ul>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <p className="footer-copyright mb-0 py-3 text-center">
                &copy; 2017-{new Date().getFullYear()} Copyright: <a 
                href="https://www.aichner-christian.com" 
                target="_blank" 
                rel="noopener noreferrer"> Werbeagentur Christian Aichner </a>
                </p>
            </MDBFooter>
        )
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
