// Have initial state for when state is not reay to be passed
const initState = {
    records: [
        {date: '2019-07-18', title: 'help', content: 'lorem ipsm'},
        {date: '2019-07-19', title: 'help1', content: 'lorem ipsm1'},
        {date: '2019-07-20', title: 'help2', content: 'lorem ipsm2'},
    ]
}

const recordReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_RECORD":
            console.log('created record', action.record);
            return state;
        case "CREATE_RECORD_ERROR":
            console.log('create record error', action.err);
            return state;
        default:
            return state;
    }
}

export default recordReducer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
