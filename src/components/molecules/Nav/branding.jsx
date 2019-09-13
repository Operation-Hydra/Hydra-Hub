//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Images
// Logo
import { ReactComponent as Logo } from "../../../assets/logo.svg";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBNavbarBrand,
} from 'mdbreact';

class SignedInNavItems extends React.Component{
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render(){
        return(
            <MDBNavbarBrand href="/">
                <Logo style={{ height: "2.5rem", width: "5rem" }} />
            </MDBNavbarBrand>
        )
    }
}

export default SignedInNavItems;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
