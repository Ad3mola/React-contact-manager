import React, { Component } from "react";
import {Consumer} from '../context';
import Contacts from "./Contacts";

class Contact extends Component {
    
    render() {
        return(
            <Consumer>
            {value => {
                const {contacts} = value;
                return(
                    <>
                    <h1 className="display-4 mb-5"> <span className="text-danger"> Contact </span>List</h1>
                 {contacts.map(contact => (
                    <Contacts key={contact.id} contact={contact} />
                ))}
                    </>
                )
            }}
            </Consumer>
        )
        
    }
}

export default Contact;
