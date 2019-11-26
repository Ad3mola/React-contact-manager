import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
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
                        
                    </div>
                </div>
            </BrowserRouter> 
        );
    }
}

export default App;
