//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBBtn,
    MDBIcon,
    MDBAlert,
} from 'mdbreact';

//> Components
// Create tab dialog (modal)
import CreateTab from '../../organisms/Modals/Create/tab';

class CreateTabDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            error: null
        }
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            error: null,
        });
    }

    onSendFormStatus = (tab) => {
        if(!tab.error){
            this.setState({error: null}, () => this.toggle());
        } else {
            this.setState({error: tab.error});
        }
    }

    render(){
        return(
            <div>
                <MDBBtn className="shadow-none btn-add" size="sm" color="success" onClick={this.toggle} outline><MDBIcon icon="plus" /></MDBBtn>
                {this.state.modal &&
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>Add Tab</MDBModalHeader>
                            <MDBModalBody>
                                {this.state.error &&
                                    <MDBAlert color="danger">
                                        {this.state.error}
                                    </MDBAlert>
                                }
                                 <CreateTab onSendForm={this.onSendFormStatus}/>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
                }
            </div>
        )
    }
}

export default CreateTabDialog;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
