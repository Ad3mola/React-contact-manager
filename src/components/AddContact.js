import React, { Component } from "react";
import { Consumer } from "../context"
import uuid from "uuid"

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (dispatch, e)=>{
        const {name, email, phone} = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({type: 'ADD_CONTACT', payload:newContact});

        this.setState({
            name: "",
            email:"",
            phone: ""
        })
        e.preventDefault();
    };

    render() {
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card mb-4" style={{maxWidth:"80%",margin:"0 auto"}}>
                        <h4 className="card-header">Add Contact</h4>
                        <form className="card-body" onSubmit={this.handleSubmit.bind(this, dispatch)}>
                            <div className="form-group">
                            <label htmlFor="#name">Name</label>
                            <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            id="name"
                            className="form-control"
                            placeholder="Enter Name..."
                        />
                            </div>
                           <div className="form-group">
                           <label htmlFor="#email">Email</label>
                           <input
                           type="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                           id="email"
                           className="form-control"
                           placeholder="Enter Email..."
                       />
                           </div>
                            <div className="form-group">
                            <label htmlFor="#phone">Phone</label>
                            <input
                            type="tel"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            id="phone"
                            className="form-control"
                            placeholder="Enter Phone..."
                        />
                            </div>
                                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                           
                        </form>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
