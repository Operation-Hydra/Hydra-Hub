//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Animations
import FadeIn from 'react-fade-in';

//> Redux
// Connect
import { connect } from 'react-redux';

//> Components
// Define fields dialog
import DefFields from './defineFields';

// Components
//import CreateTab from '../../organisms/Modals/Create/tab'

class TabGeneric extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        const { tab } = this.props;
        // Check if fields are set
        if(true){
            return(
                <div>
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
                    <DefFields title={tab.title} />
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps)(TabGeneric);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
