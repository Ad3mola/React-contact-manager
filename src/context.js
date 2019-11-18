import React from "react";

 export const Context = React.createContext();
 
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                ),
                 list : localStorage.setItem("contacts", JSON.stringify(state.contacts.filter(
                    contact => contact.id !== action.payload
                )))
            };
            case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                list : localStorage.setItem("contacts", JSON.stringify([...state.contacts, action.payload]))
            };
            case "EDIT_CONTACT":
                return{
                    ...state.contacts[action.payload.id - 1] = action.payload
                    
                };
        default:
            return state;
    }
};

export class Provider extends React.Component {
    state = {
        contacts: [],
        list: [],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        let list = localStorage.getItem("contacts")
        list ? this.setState({
            contacts: JSON.parse(list)
        }) : localStorage.setItem("contacts", JSON.stringify(this.state.list))   
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
