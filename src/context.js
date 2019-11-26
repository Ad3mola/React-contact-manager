import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
            case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends React.Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Damilola",
                email: "damilola@gmail.com",
                phone: "08130688738"
            },
            {
                id: 2,
                name: "Ademola Madelewi",
                email: "ademola@gmail.com",
                phone: "08130688738"
            },
            {
                id: 3,
                name: "Tinuke",
                email: "Tinuke@gmail.com",
                phone: "08130688738"
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
