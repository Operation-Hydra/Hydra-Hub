export const createFields = (tabtitle, fields) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB

        // Get userId (to know where to store the new tab)
        const userId = getState().firebase.auth.uid;
        console.log("User id", userId);

        // Get current tabs to grab ID from
        const currentTabs = getState().firebase.profile.tabs;
        console.log("Current tabs", currentTabs);

        // Get id of tab
        let key = currentTabs.map(function(e) { return e.title }).indexOf(tabtitle)
        console.log("key", key);

        // Get user fields to not overwrite them
        const currentFields = getState().firebase.profile.tabs[key].fields;
        
        
        // Check if already exists
        let exists = [false];
        if(currentFields !== undefined){
            exists = currentFields.map((cfield, i) => {
                let titles = fields.items.map((citem, i) => {
                    return citem.field;
                });
                if(titles.includes(cfield.field.trim().toString())){
                    return true;
                } else {
                    return false;
                }
            });
        }

        // If it does not already exists
        if(!exists.includes(true)){
            let test = [];
            if(currentFields !== undefined){
                test = currentFields.concat(fields.items);
            } else {
                test = fields.items;
            }

            currentTabs[key].fields = test;

            const firestore = getFirestore();
            firestore.collection('users').doc(userId).update({
                tabs: currentTabs
            }).then(() => {
                dispatch({ type: 'CREATE_FIELDS', fields });
            }).catch((err) => {
                dispatch({ type: 'CREATE_FIELDS_ERROR', err });
            })
        }
    }
}

export const deleteTab = (tab) => {
     return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB

        // Get userId (to know where to add the new slot)
        const userId = getState().firebase.auth.uid;
        // Get current tabs
        const currentTabs = getState().firebase.profile.tabs;

        // Tabs without the deleted tab (will be replaced with old array)
        let newArr = currentTabs.filter(obj => obj.title !== tab.title);

        const firestore = getFirestore();
        firestore.collection('users').doc(userId).update({
            tabs: newArr
        }).then(() => {
            dispatch({ type: 'REMOVE_TAB', tab });
        }).catch((err) => {
            dispatch({ type: 'REMOVE_TAB_ERROR', err });
        })
    }
}

export const addTabSlot = (tab) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB

        // Get userId (to know where to add the new slot)
        const userId = getState().firebase.auth.uid;
        // Get user tab slots (how many slots he can make)
        const userTabSlots = getState().firebase.profile.tabSlots;
        // Create the new value
        let newTabSlotsValue = userTabSlots + 1;

        const firestore = getFirestore();
        firestore.collection('users').doc(userId).update({
            tabSlots: newTabSlotsValue
        }).then(() => {
            dispatch({ type: 'ADD_TABSLOT', tab });
        }).catch((err) => {
            dispatch({ type: 'ADD_TABSLOT_ERROR', err });
        })
    }
}

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
