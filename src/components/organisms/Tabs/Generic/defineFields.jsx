//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Addon (Update)
import update from 'react-addons-update'; // ES6
// Animations
import FadeIn from 'react-fade-in';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { createFields } from '../../../../store/actions/fieldActions';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

// Components
//import CreateTab from '../../organisms/Modals/Create/tab'

class DefFields extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fielddialogs: [

            ],
        }
    }

    addFieldDialog = () => {
        // Get current fields
        let fielddialogs = this.state.fielddialogs;
        let newfield = { status: 'dialog', field: '', type: 'sel_num',  weight: '50', required: false};
        // Add new field to current fields
        fielddialogs.push(newfield);
        // Add current fields + new field to state
        this.setState({fielddialogs: fielddialogs });
    }

    // Change handler
    handleChange = (e) => {

        let index = e.target.getAttribute('index');
        let name = e.target.name;

        const newFields = this.state.fielddialogs.slice();
        if(newFields !== undefined){
            if(index !== undefined){
                switch(name){
                    case 'field':
                        console.log('field');
                        newFields[index].field = e.target.value;
                        this.setState({ fielddialogs: newFields });
                        break;
                    case 'type':
                        console.log('type');
                        newFields[index].type = e.target.value;
                        this.setState({ fielddialogs: newFields });
                        break;
                    case 'weight':
                        console.log('weight');
                        newFields[index].weight = e.target.value;
                        this.setState({ fielddialogs: newFields });
                        break;
                    case 'required':
                        console.log('required');
                        newFields[index].required = e.target.checked;
                        this.setState({ fielddialogs: newFields });
                        break;
                    default:
                        console.log("not known type of input");
                }    
            }
        }
    }

    // Cancel dialog (remove object from state array)
    cancelDialog = (e) => {
        // Receive field value of dialog
        let value = e.target.getAttribute('data');
        // Remove (splice) at received position from value
        this.state.fielddialogs.splice(this.state.fielddialogs.map(function(e) { return e.field }).indexOf(value), 1);
        // Because we used splice and did not call this.setState() we need to manually update (and call the component's render function)
        this.forceUpdate(); // This is as dirty as it gets! -> Should be avoided if possible!
    }

    // Send fields
    sendField = (pos) => {
        let tabtitle = this.props.title;

        this.props.createFields(tabtitle, {items: [this.state.fielddialogs[pos]]});
    }

    // Add dialog
    addDialog = (e) => {
        // Receive field value of dialog
        let value = e.target.getAttribute('data');
        if(value !== undefined){
            // Get position
            let pos = this.state.fielddialogs.map(function(e) { return e.field }).indexOf(value);
            // Update state
            if(this.state.fielddialogs !== undefined) {
                let dialog = this.state.fielddialogs[pos];
                if(dialog !== undefined){
                    // Check if name is empty
                    if(dialog.field.trim() !== ""){
                        if(dialog.status !== undefined){
                            this.setState({
                                fielddialogs: update(this.state.fielddialogs, {[pos]: {status: {$set: 'set'}}})
                            }, () => this.sendField(pos))
                        }
                    } else {
                        console.log("Title empty");
                    }
                }
            }    
        }
    }
    addAllDialogs = () => {
        // Get current items
        const newFields = this.state.fielddialogs.slice();
        // Set status of all items to "set"
        newFields.map((e, i) => {
            newFields[i].status = 'set';
            return true;
        })
        // Write changes to state (this will also update the page)
        this.setState({
            fielddialogs: newFields
        })
    }

    // Get unsaved items (to determine if "Save all" button should be shown)
    existUnsaved = () => {
        // Get current items
        const newFields = this.state.fielddialogs.slice();
        // Check if any items exist
        if(newFields.length > 0){
            // Number of unsaved
            let unsaved = 0;
            let elem = newFields.map((e, i) => {
                if(e.status === 'dialog'){
                    unsaved++;
                    return {status: 'unsaved', key: i}; // Return key of unsaved items
                } else {
                    return {status: 'saved', key: i}; // Return key of saved items
                }
            })
            if(unsaved > 0){
                return {exists: true, elements: elem, amount: unsaved}; // There are unsaved elements
            } else {
                return {exists: false, elements: elem, amount: unsaved}; // There are no unsaved elements
            }
        } else {
            return {exists: false, elements: null, amount: 0}; // There are no fields
        }
    }

    // Remove dialog
    removeDialog = (e) => {
        // To be added
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <form>
                        {this.state.fielddialogs.map((dialog, index) => {
                            if(dialog.status === 'dialog'){
                                return(
                                    <FadeIn key={index}>
                                        <div className="card p-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3 align-self-center">
                                                    <label>Field</label>
                                                    <input
                                                        type="text"
                                                        name="field"
                                                        value={dialog.field}
                                                        index={index}
                                                        onChange={this.handleChange.bind(this)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 align-self-center">
                                                    <label>Type</label>
                                                    <select name="type" className="browser-default custom-select" index={index} onChange={this.handleChange.bind(this)} >
                                                        <option value="sel_num">Number</option>
                                                        <option value="sel_slider">Slider</option>
                                                        <option value="sel_checkbox">Checkbox</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3 align-self-center">
                                                    <label>Weight</label>
                                                    <input type="range" name="weight" value={dialog.weight} index={index} onChange={this.handleChange.bind(this)} className="custom-range" id="customRange1" />
                                                </div>
                                                <div className="col-md-3 align-self-center">
                                                    <input
                                                        className="form-check-input"
                                                        id={"requiredCheck"+(index+1)}
                                                        type="checkbox"
                                                        name="required"
                                                        index={index}
                                                        value={dialog.required}
                                                        onChange={this.handleChange.bind(this)}
                                                    />
                                                    <label className="form-check-label" htmlFor={"requiredCheck"+(index+1)}>
                                                        Field required?
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 text-left align-self-center">
                                                    <MDBBtn size="md" color="elegant" outline data={dialog.field} onClick={this.cancelDialog.bind(this)}><MDBIcon icon="minus" className="pr-2" />Cancel</MDBBtn>
                                                </div>
                                                {true &&
                                                    <div className="col-md-6 text-right">
                                                        <MDBBtn color="success" data={dialog.field} onClick={this.addDialog.bind(this)}><MDBIcon icon="save" className="pr-2" />Save</MDBBtn>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </FadeIn>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </form>
                    <div className="row">
                        <div className="col-6 text-left">
                            <MDBBtn color="deep-orange" rounded onClick={this.addFieldDialog}><MDBIcon icon="sitemap" className="pr-2" />Add field</MDBBtn>
                        </div>
                        <div className="col-6 text-right">
                            {(this.existUnsaved().exists && this.existUnsaved().amount > 1) &&                               
                                <MDBBtn color="success" onClick={this.addAllDialogs.bind(this)}><MDBIcon icon="save" className="pr-2" />Save all</MDBBtn>                                
                            }
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createFields: (tabtitle, fields) => dispatch(createFields(tabtitle, fields))
    }
}

export default connect(null, mapDispatchToProps)(DefFields);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
