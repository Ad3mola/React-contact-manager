import React, { Component } from "react";
import Contacts from "./Contacts";
import { connect } from 'react-redux'

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
    return{
        contacts: state.contacts.contacts
    }
}
export default connect(mapStateToProps)(Contact);
