//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Link from Router
import { Link } from 'react-router-dom';

//> Libraries
// PayPal
import { PayPalButton } from 'react-paypal-button-v2';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { addTabSlot } from '../../../store/actions/tabActions';

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

class CreateTabDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            error: null,
            name: "",
            success: false
        }
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            error: null,
        });
    }

    render(){
        const { tier } = this.props;
        return(
            <div>
                {tier === 0 ? (
                    <MDBBtn className="shadow-none btn-add" size="sm" color="purple" onClick={this.toggle} outline><MDBIcon icon="plus" /></MDBBtn>
                ) : (
                    <MDBBtn className="shadow-none btn-add" size="sm" color="warning" onClick={this.toggle} outline><MDBIcon icon="plus" /></MDBBtn>
                )
                }
                {this.state.modal &&
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>Unlock more tabs</MDBModalHeader>
                            <MDBModalBody className="text-center">
                            {this.state.success ? (
                                <MDBAlert color="success">
                                    Thank you for purchasing an additional tab, {this.state.name}! You can use it right away!
                                </MDBAlert>
                            ) : (
                                <div>
                                    {(function() {
                                        switch(tier) {
                                        case 0:
                                            return (
                                                <div>
                                                    <div className="price header white-text purple rounded-top">
                                                        <h2 className="number">2,97</h2>
                                                        <div className="version">
                                                            <h5 className="mb-0"><strong>Upgrade</strong> to Personal</h5>
                                                        </div>
                                                        <p>Receive <strong>3</strong> additional tabs and <strong>exclusive features</strong>!</p>
                                                        <Link to="/upgrade"><MDBBtn size="sm" color="white">Details</MDBBtn></Link>
                                                        <br />
                                                        <MDBBtn size="lg" color="success" rounded><MDBIcon icon="arrow-alt-circle-up" className="pr-2" />Upgrade now</MDBBtn>
                                                    </div>
                                                    <div className="w-100"><div className="splitter my-4"><span className="or"><span className="or-text">or</span></span></div></div>
                                                </div>
                                            )
                                        case 1:
                                            return (
                                                <div>
                                                    <div className="price header white-text warning-color rounded-top">
                                                        <h2 className="number">9,99</h2>
                                                        <div className="version">
                                                        <h5 className="mb-0"><strong>Upgrade</strong> to Family</h5>
                                                        
                                                        </div>
                                                        <Link to="/upgrade"><MDBBtn size="sm" color="white" rounded>Details</MDBBtn></Link>
                                                        <br />
                                                        <MDBBtn size="lg" color="success" rounded><MDBIcon icon="arrow-alt-circle-up" className="pr-2" />Upgrade now</MDBBtn>
                                                    </div>
                                                    <div className="w-100"><div className="splitter my-4"><span className="or"><span className="or-text">or</span></span></div></div>
                                                </div>
                                            )
                                        default:
                                            return null;
                                        }
                                    })()}
                            
                                    <div className="price header white-text primary-color rounded-top">
                                        <h2 className="number-onetime">1,99</h2>
                                        <div className="version">
                                        <h5 className="mb-0"><strong>One-time</strong> purchase</h5>
                                        
                                        </div>
                                        <p>Unlock one more tab</p>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8 white">
                                                <PayPalButton
                                                    amount="1.99"
                                                    currency="EUR"
                                                    onSuccess={(details, data) => {
                                                        this.setState({success: true, name: details.payer.name.given_name}, () => this.props.addTabSlot());
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTabSlot: () => dispatch(addTabSlot())
    }
}

export default connect(null, mapDispatchToProps)(CreateTabDialog);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
