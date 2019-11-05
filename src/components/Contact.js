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
