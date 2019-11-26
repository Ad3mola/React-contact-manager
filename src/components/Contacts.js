import React, { Component } from "react";
import { Consumer } from "../context";
import PropTypes from "prop-types";

class Contacts extends Component {
    state = {
        showContactInfo: false
    };

    deleteContact = (id, dispatch) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
    };

    handleChange = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };
    render() {
        const { name, phone, email, id } = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                <i
                                    style={cursor}
                                    className="fa fas fa-sort-down"
                                    onClick={this.handleChange}
                                ></i>{" "}
                                <i
                                    className="fa fas fa-times float-right text-danger"
                                    onClick={this.deleteContact.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                    style={cursor}
                                ></i>{" "}
                            </h4>
                            {this.state.showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contacts.propTypes = {
    contact: PropTypes.object.isRequired
};
const cursor = {
    cursor: "pointer"
};
export default Contacts;
