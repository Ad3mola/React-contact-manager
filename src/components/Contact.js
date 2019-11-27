import React, { Component } from "react";
import Contacts from "./Contacts";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class Contact extends Component {
    
    render() {
        return(
                    <>
                {this.props.contacts.map(contact => (
                    <Contacts key={contact.id} contact={contact} />
                ))}
            </>
                )
        
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
        contacts: state.firestore.ordered.contacts || state.contacts.contacts
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'contacts'}
    ])

)(Contact);
