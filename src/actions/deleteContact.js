export const deleteContact = (id) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        dispatch({type: "DELETE_CONTACT", id: id })
    }
}