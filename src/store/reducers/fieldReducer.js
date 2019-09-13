// Have initial state for when state is not ready to be passed
const initState = {}

const fieldReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_FIELDS":
            console.log('created field', action.fields);
            return state;
        case "CREATE_FIELDS_ERROR":
            console.log('create field error', action.err);
            return state;
        default:
            return state;
    }
}

export default fieldReducer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
