import React, { Component } from "react";
import FormInputGroup from "./FormInputGroup"
import uuid from "uuid"
import { connect } from 'react-redux'
 class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        error: {}
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = ( e)=>{
        e.preventDefault();
        const {name, email, phone} = this.state;

        if(name === ""){
            this.setState({error:{name: "name is required"}});
            return;
        }
        if(email === ""){
            this.setState({error:{email: "email is required"}});
            return;
        }
        if(phone === ""){
            this.setState({error:{phone: "phone is required"}});
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        this.props.addContact(newContact)
        this.setState({
            name: "",
            email:"",
            phone: "",
            error:{}
        })
        
    };

    render() {
        return(
                        <div className="card mb-4" style={{maxWidth:"80%",margin:"0 auto"}}>
                        <h4 className="card-header">Add Contact</h4>
                        <form className="card-body" onSubmit={this.handleSubmit}>
                            <FormInputGroup 
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            id="name"
                            className="form-control"
                            placeholder="Enter Name..." 
                            error = {this.state.error.name}
                            />
                            <FormInputGroup 
                            type="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                           id="email"
                           className="form-control"
                           placeholder="Enter Email..."
                           error = {this.state.error.email}
                            />
                            <FormInputGroup 
                            type="tel"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            id="phone"
                            className="form-control"
                            placeholder="Enter Phone..." 
                            error = {this.state.error.phone}
                            />
                                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                           
                        </form>
                    </div>
                    )}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addContact : newContact =>{
            dispatch({type: 'ADD_CONTACT', newContact: newContact})
        }
    }
}

export default connect(null, mapDispatchToProps)(AddContact);