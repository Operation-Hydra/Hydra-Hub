//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { deleteTab } from '../../../store/actions/tabActions';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBBtn,
} from 'mdbreact';

class DeleteTabDialog extends React.Component{

    state = {
        title: ""
    }

    finishIt = () => {
        this.props.onDeleteTab(this.state);
        this.props.deleteTab(this.state);
    }

    initDelete = () => {
        if(this.props.title !== undefined){
            this.setState({title: this.props.title},() => this.finishIt());
            
        } else {
            this.toggle();
        }
        
    }

    render(){
        return(
            <MDBBtn color="danger" onClick={this.initDelete} disabled={!this.props.active}>Delete <strong>{this.props.title}</strong></MDBBtn>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTab: (tab) => dispatch(deleteTab(tab))
    }
}

export default connect(null, mapDispatchToProps)(DeleteTabDialog);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
