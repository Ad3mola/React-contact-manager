const initState = {
    contacts: [
        {
            id: '1',
            name: "Ademola Madelewi",
            email: "ademola@gmail.com",
            phone: '08130688738'
        },
        {
            id: '2',
            name: "Damilola Madelewi",
            email: "damilola@gmail.com",
            phone: '08130688738'
        }, 
        {
            id: '3',
            name: "Atinuke Madelewi",
            email: "atinuke@gmail.com",
            phone: '08130688738'
        }
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
