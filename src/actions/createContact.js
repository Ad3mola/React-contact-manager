export const createContact = newContact => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("contacts")
            .add({
                ...newContact,
                createDate: new Date()
            })
            .then(()=>{dispatch({type:'ADD_CONTACT', newContact})}).catch((err)=>{
                dispatch({type:'ERROR_MSG', err})
            });
    };
};
