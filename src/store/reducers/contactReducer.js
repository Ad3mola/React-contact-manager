const initState = {
    contacts: [
    ]
}

const contactReducer = (state = initState, action) => {
    if(action.type === 'DELETE_CONTACT'){
        return{
            
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
        }
    } else if(action.type === 'ADD_CONTACT'){
        return{
            ...state,
            contacts: [action.newContact, ...state.contacts]
        }
    } else if(action.type === 'ERROR_MSG'){
        console.log(action.err)
    }
    return state
}

export default contactReducer;
