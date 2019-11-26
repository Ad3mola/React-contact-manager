import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Contacts extends Component {
    state = {
        showContactInfo: false
    };

    handleChange = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };
    handleDelete = () =>{
        this.props.deleteContact(this.props.contact.id)
    }
    render() {
        const { name, phone, email } = this.props.contact;
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
                        style={cursor}
                        onClick={this.handleDelete}
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
    }
}

Contacts.propTypes = {
    contact: PropTypes.object.isRequired
};
const cursor = {
    cursor: "pointer"
};

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: id => {
            dispatch({ type: "DELETE_CONTACT", id: id });
        }
    };
};

export default connect(null, mapDispatchToProps)(Contacts);
