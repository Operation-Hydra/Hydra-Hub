//> Reducers
// Authentication
import authReducer from './authReducer'
// Adding records (legacy)
import recordReducer from './recordReducer'
// Manage tabs
import tabReducer from './tabReducer'
// Manage fields
import fieldReducer from './fieldReducer'

//> Redux
import { combineReducers } from 'redux'

//> Firestore reducer
import { firestoreReducer } from 'redux-firestore'

//> Firebase reducer
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer,
    tab: tabReducer,
    fields: fieldReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer // Authentication
})

export default rootReducer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
