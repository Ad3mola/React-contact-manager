import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from 'react-router-dom';
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
                                <img src="../../" className="mr-2 rounded" style={{height: "35px", width:"45px"}} alt={`${id}`}/>
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
                                <Link to={`contact/edit/${id}`}>
                                <i
                                className="fa fas fa-pencil float-right text-dark mr-3"
                                style={cursor}
                            ></i>
                                </Link>
                                
                            </h4>
                            {this.state.showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item"> <a className="btn-link" href={`mailto: ${email}`}>{email}</a> </li>
                                    <li className="list-group-item"><a className="btn-link" href={`tel: ${phone}`}>{phone}</a> </li>
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
