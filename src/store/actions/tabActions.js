export const createTab = (tab) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB

        // Get userId (to know where to store the new tab)
        const userId = getState().firebase.auth.uid;
        // Get user tabSlots to decide how many tabs the user may have
        const userTabSlots = getState().firebase.profile.tabSlots;
        // Get current tabs (to not overwrite)
        const currentTabs = getState().firebase.profile.tabs;

        // Check if already exists
        let exists = currentTabs.map((ctab, i) => {
            if(ctab.title === tab.title){
                dispatch({ type: 'CREATE_TAB_ERROR_DUPLICATE', err: "Duplicate" });
                return true;
            } else {
                return false;
            }
        });

        // Check if the user can make new tabs dependent on the tier
        let canCreate = true;
        if(currentTabs.length === userTabSlots){
            dispatch({ type: 'CREATE_TAB_ERROR_LIMIT', err: "Tab limit reached" });
            canCreate = false;
        }

        // If it does not already exists and user can create new tabs
        if(!exists.includes(true) && canCreate){
            const firestore = getFirestore();
            firestore.collection('users').doc(userId).update({
                tabs: [
                    ...currentTabs,
                    {...tab, createdAt: new Date(), fields: []} 
                ]
            }).then(() => {
                dispatch({ type: 'CREATE_TAB', tab });
            }).catch((err) => {
                dispatch({ type: 'CREATE_TAB_ERROR', err });
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
