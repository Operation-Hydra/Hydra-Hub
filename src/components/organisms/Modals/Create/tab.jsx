//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { createTab } from '../../../../store/actions/tabActions';

//> Libraries
// Color Picker
import { CirclePicker } from 'react-color';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

class CreateTab extends React.Component {
    state = {
        title: "",
        icon: "file-alt",
        color: '#ffffff',
        editable: true,
        error: null,
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    word_iconallySetIcon = () => {
        let icons = [];
        // Get title of the tab and serialize it
        const title = this.state.title.toLowerCase().trim();
        // Split the title in all words
        let words = title.split(" ");
        words.map((word, i) => {
            switch(word){
                case 'work':
                    icons.push("briefcase");
                    break;
                case 'sleep':
                    icons.push("bed");
                    break;
                case 'food': 
                case 'breakfast':
                case 'lunch':
                case 'dinner':
                    icons.push("utensils");
                    break;
                case 'sex':
                    icons.push("heart");
                    break;
                case 'sports':
                case 'activities':
                    icons.push("running");
                    break;
                case 'workout':
                    icons.push("dumbbell");
                    break;
                case 'money':
                case 'money spent':
                    icons.push("hand-holding-usd");
                    break;
                case 'meditation':
                    icons.push("leaf");
                    break;
                case 'school':
                case 'education':
                case 'university':
                case 'college':
                    icons.push("graduation-cap");
                    break;
                case 'car':
                    icons.push("car");
                    break;
                case 'hiking':
                case 'walk':
                case 'walking':
                    icons.push("hiking");
                    break;
                case 'transportation':
                case 'transport':
                    icons.push("bus");
                    break;
                case 'shower':
                    icons.push("shower");
                    break;
                case 'water':
                    icons.push("water");
                    break;
                case 'shit':
                case 'toilet':
                case 'poo':
                case 'poop':
                    icons.push("poo-storm");
                    break;
                case 'coffee':
                    icons.push("coffee");
                    break;
                case 'tee':
                    icons.push("mug-hot");
                    break;
                case 'sweets':
                case 'cookies':
                case 'chocolate':
                    icons.push("coookie");
                    break;
                case 'reading':
                case 'books':
                case 'read':
                case 'book':
                    icons.push("book-open");
                    break;
                case 'audible':
                    icons.push("audible");
                    break;
                case 'cat':
                case 'meow':
                case 'mau':
                case 'miau':
                case 'maua':
                    icons.push('cat');
                    break;
                case 'dog':
                case 'wouf':
                case 'wuff':
                case 'wau':
                case 'wow':
                    icons.push('dog');
                    break;
                default:
                    break;
            }
            return true;
        })

        console.log(icons);
        if(icons.length === 0){
            icons.push('file-alt');
        }

        // Set icon and send form
        this.setState({icon: icons[icons.length-1]}, () => this.sendForm())
    }

    sendForm = () => {
        if(this.state.title.trim() !== ""){
            // Remove overhead (this.state.error) that otherwise would end up in the DB
            let cleaned = {
                title: this.state.title,
                icon: this.state.icon,
                color: this.state.color,
                editable: this.state.editable
            }
            // Call action
            this.props.createTab(cleaned);
            // Provide callback to parent
            this.setState({error: null}, () => this.props.onSendForm(this.state))
        } else {
            this.setState({error: "Please enter a name for your tab."}, () => this.props.onSendForm(this.state))
        }
    }

    handleSubmit = (e) => {
        // Prevent site from refreshing
        e.preventDefault();
        // Set icon (if tite is a switch case)
        this.word_iconallySetIcon();
    }

    // Color picker
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <label htmlFor="defaultFormTabTitle" className="grey-text">
                Your tab name <span className="red-text">*</span>
                </label>
                <input
                type="text"
                name="title"
                id="defaultFormTabTitle"
                className="form-control"
                maxLength="20"
                tabIndex="0"
                value={this.state.title}
                onChange={this.handleChange}
                required
                />
                <small className="form-text text-muted">Such as: Sleep, Work, School, ...</small>
                <br />
                <label htmlFor="defaultFormTabTitle" className="grey-text">
                Your tab color (optional)
                </label>
                <CirclePicker
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeComplete }
                    className="mb-1 w-100"
                    circleSize={40}
                    circleSpacing={20}
                />
                <small className="form-text blue-text"><MDBIcon icon="info" className="pr-2" />Default color: White</small>
                <small className="form-text blue-text"><MDBIcon icon="info" className="pr-2" />Click on a circle to select your individual color</small>
                <br />
                <small className="form-text"><span className="red-text">*</span> = Required</small>
                <div className="text-center mt-4">
                    <MDBBtn color="dark-green" type="submit"><MDBIcon icon="plus-circle" className="pr-2" />Create Tab</MDBBtn>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTab: (tab) => dispatch(createTab(tab))
    }
}

// No state, so null for first param
export default connect(null, mapDispatchToProps)(CreateTab);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
