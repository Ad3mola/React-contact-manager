import  authReducer  from './authReducer'
import  contactReducer  from './contactReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore"




const rootReducer = combineReducers ({
    auth: authReducer,
    contacts: contactReducer,
    firestore: firestoreReducer
})

export default rootReducer;
