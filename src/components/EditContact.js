import React, { Component } from "react";
import { Consumer } from "../context"
import FormInputGroup from "./FormInputGroup"
import {Context} from "../context"

export default class EditContact extends Component {
    static contextType = Context;
   
    state = {
        
        name: "",
        email:"",
        phone: "",
        error: {}
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    componentDidMount() {
        const {id} = this.props.match.params;
        const {name, email, phone} = this.context.contacts[id - 1];
        this.setState({
            name,
            email,
            phone
        })
    }

    handleSubmit = (dispatch, e)=>{
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
        const {id} = this.props.match.params;
        const newContact = {
            id,
            name,
            email,
            phone
        };
        dispatch({type: 'EDIT_CONTACT', payload:newContact});
        

        this.setState({
            name: "",
            email:"",
            phone: "",
            error:{}
        })
        this.props.history.push("/");
        
    };

    render() {
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    const {name, email, phone} = this.state;
                    return(
                        <div className="card mb-4" style={{maxWidth:"80%",margin:"0 auto"}}>
                        <h4 className="card-header">Edit Contact</h4>
                        <form className="card-body" onSubmit={this.handleSubmit.bind(this, dispatch)}>
                            <FormInputGroup 
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            id="name"
                            className="form-control"
                            placeholder="Enter Name..." 
                            error = {this.state.error.name}
                            />
                            <FormInputGroup 
                            type="email"
                           name="email"
                           value={email}
                           onChange={this.handleChange}
                           id="email"
                           className="form-control"
                           placeholder="Enter Email..."
                           error = {this.state.error.email}
                            />
                            <FormInputGroup 
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                            id="phone"
                            className="form-control"
                            placeholder="Enter Phone..." 
                            error = {this.state.error.phone}
                            />
                                <input type="submit" value="Edit Contact" className="btn btn-light btn-block"/>
                           
                        </form>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
