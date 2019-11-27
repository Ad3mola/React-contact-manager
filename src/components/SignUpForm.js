import React, { Component } from "react";
import FormInputGroup from "./FormInputGroup"


 class SignUpForm extends Component {
    state = {
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        error: {}
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = ( e)=>{
        e.preventDefault();
        const {firstName, secondName, email, password} = this.state;

        if(firstName === ""){
            this.setState({error:{firstName: "first name is required"}});
            return;
        }
        if(secondName === ""){
            this.setState({error:{secondName: "second name is required"}});
            return;
        }
        if(email === ""){
            this.setState({error:{email: "email is required"}});
            return;
        }
        if(password === ""){
            this.setState({error:{password: "password is required"}});
            return;
        }
        this.setState({
            firstName: "",
            secondName: "",
            email:"",
            password: "",
            error:{}
        })
        
    };

    render() {
        return(
                        <div className="card mb-4" style={{maxWidth:"80%",margin:"0 auto"}}>
                        <h4 className="card-header">Sign Up</h4>
                        <form className="card-body" onSubmit={this.handleSubmit}>
                            <FormInputGroup 
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            id="Second Name"
                            className="form-control"
                            placeholder="Enter First Name..." 
                            error = {this.state.error.firstName}
                            />
                            <FormInputGroup 
                            type="text"
                            name="secondName"
                            value={this.state.secondName}
                            onChange={this.handleChange}
                            id="First Name"
                            className="form-control"
                            placeholder="Enter Second Name..." 
                            error = {this.state.error.secondName}
                            />
                            <FormInputGroup 
                            type="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                           id="Email"
                           className="form-control"
                           placeholder="Enter Email..."
                           error = {this.state.error.email}
                            />
                            <FormInputGroup 
                            type="password"
                           name="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           id="Password"
                           className="form-control"
                           placeholder="Enter Password..."
                           error = {this.state.error.password}
                            />
                                <input type="submit" value="Sign Up" className="btn btn-light btn-block"/>
                           
                        </form>
                    </div>
                    )}
}

export default SignUpForm;