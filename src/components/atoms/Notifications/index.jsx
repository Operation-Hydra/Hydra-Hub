//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { 
  MDBNotification
} from "mdbreact";

class Notification extends React.Component {
  render() {
    return (
      <MDBNotification
        show={this.props.show}
        fade
        iconClassName={this.props.icon}
        title={this.props.title}
        message={this.props.message}
        text={this.props.subhead}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
      />
    );
  }
}

export default Notification;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
