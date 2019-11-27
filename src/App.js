import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header branding="Contact Manager" />
                    <div className="container">
                        <Route exact path='/' component={Contact} />
                        <Route path='/contacts/add' component={AddContact} />
                        <Route path='/contacts/edit' component={EditContact} />
                        <Route path='/signin' component={SignInForm} />
                        <Route path='/signup' component={SignUpForm} />
                        
                    </div>
                </div>
            </BrowserRouter> 
        );
    }
}

export default App;
