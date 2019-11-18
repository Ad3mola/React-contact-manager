import React from "react";
import { Provider } from "./context";
import Contact from "./components/Contact";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import About from "./components/pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

class App extends React.Component {
    render() {
        return (
            <Provider>
            <Router>
                <div className="App">
                    <Header branding="Contact Manager" />
                    <div className="container">
                   
                    <Switch>
                        <Route exact path="/" component={Contact} />
                        <Route exact path="/contact/add" component={AddContact} />
                        <Route exact path="/contact/edit/:id" component={EditContact} />
                        <Route exact path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>    
                    </div>
                </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
