//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Components
// NavItems when signed in
import SignedInNavItems from './SignedIn';
// NavItems when signed out
import SignedOutNavItems from './SignedOut';

//> Redux
import { connect } from 'react-redux';

class Nav extends React.Component {
  render() {
    const { auth } = this.props;

    // Check if user is logged in (when auth.uid exists)
    if(auth.uid){
      return (
        <SignedInNavItems/>
      );
    } else {
      return (
        <SignedOutNavItems/>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Nav);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
