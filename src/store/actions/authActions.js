export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        let sec_s = credentials.secure_key;
        let password = credentials.password;
        let da_s = credentials.dynamic_access;

        if(sec_s && password && da_s){
            if(sec_s.trim().length === 3 && da_s.trim().length === 7 && password.trim() !== ""){

                let sec = parseInt(sec_s, 10);
                let da = parseInt(da_s, 10);

                if(Number.isInteger(sec) && Number.isInteger(da)){

                    // Check if there is an email for the entered DA Key
                    firestore.collection('users')
                    .doc(da_s)
                    .get()
                    .then(doc => {
                        const data = doc.data();

                        // Check if security key is correct
                        if(data.sec === sec){
                             // Check if data is not empty
                            if(data){
                                let email = data.email;

                                // Check if password is valid
                                firebase.auth().signInWithEmailAndPassword(
                                    email,
                                    password
                                ).then(() => {
                                    dispatch({
                                        type: 'LOGIN_SUCCESS',
                                        level: data.level
                                    });
                                }).catch((err) => {
                                    dispatch({
                                        type: 'LOGIN_ERROR',
                                        code: 1,
                                        err: 'You must provide valid credentials.',
                                        errDetails: err
                                    });
                                });
                            } else {
                                dispatch({
                                    type: 'LOGIN_ERROR',
                                    code: 2,
                                    err: 'You must provide valid credentials.',
                                    errDetails: undefined
                                });
                            }
                        } else {
                            dispatch({
                            type: 'LOGIN_ERROR',
                            code: 3,
                            err: 'You must provide valid credentials.',
                            errDetails: undefined
                        });
                        }
                    }).catch((err) => {
                        dispatch({
                            type: 'LOGIN_ERROR',
                            code: 4,
                            err: 'The service is currently not available due to technical difficulties.',
                            errDetails: err
                        });
                    });
                } else {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        code: 5,
                        err: 'You must provide valid credentials.',
                        errDetails: undefined
                    });
                }
            } else {
                dispatch({
                    type: 'LOGIN_ERROR',
                    code: 6,
                    err: 'You must provide valid credentials.',
                    errDetails: undefined
                });
            }
        } else {
            dispatch({
                type: 'LOGIN_ERROR',
                code: 7,
                err: 'You must provide valid credentials.',
                errDetails: undefined
            });
        }
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESS'
            })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // Create new user to firebase
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            // Create data for user we just created
            let split_name = newUser.name.split(" ");
            return firestore.collection('users').doc(response.user.uid).set({
                first_name: split_name[0],
                last_name: split_name[split_name.length - 1],
                full_name: newUser.name,
                initials: split_name[0].charAt(0) + split_name[split_name.length - 1].charAt(0),
                tier: 0, // 0: Basic, 1: Personal, 2: Family,
                tabSlots: 4, // 3 tabs for basic program (+ Dashboard)
                tabs: [
                    {editable: false, icon: "columns", title: "Dashboard", color: "#ffffff", createdAt: new Date()} // Initial Dashboard tab
                ]
            })
        }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            })
        })
    }
}

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
