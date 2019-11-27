import React, { Component } from "react";
import FormInputGroup from "./FormInputGroup";

class SignInForm extends Component {
    state = {
        email: "",
        password: "",
        error: {}
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        if (email === "") {
            this.setState({ error: { email: "email is required" } });
            return;
        }
        if (password === "") {
            this.setState({ error: { password: "password is required" } });
            return;
        }
        this.setState({
            email: "",
            password: "",
            error: {}
        });
    };

    render() {
        return (
            <div
                className="card mb-4"
                style={{ maxWidth: "80%", margin: "0 auto" }}
            >
                <h4 className="card-header">Sign In</h4>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <FormInputGroup
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        id="Email"
                        className="form-control"
                        placeholder="Enter Email..."
                        error={this.state.error.email}
                    />
                    <FormInputGroup
                        type="password"
                        name="password"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id="Password"
                        className="form-control"
                        placeholder="Enter password..."
                        error={this.state.error.password}
                    />
                    <input
                        type="submit"
                        value="Sign In"
                        className="btn btn-light btn-block"
                    />
                </form>
            </div>
        );
    }
}

export default SignInForm;
