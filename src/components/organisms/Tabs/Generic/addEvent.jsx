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
import { createFields } from '../../../../../store/actions/fieldActions';

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

        }
    }

    render(){
        return(
            <div className="row">
                {tab.fields.length > 0 &&
                    <div>
                        {tab.fields.map((field, index) => {
                            return(
                                <FadeIn key={index}>
                                    <div>
                                        {field.field}
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                }
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
