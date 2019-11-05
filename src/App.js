import React from "react";
import { Provider } from "./context";
import Contact from "./components/Contact";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager" />
                    <div className="container">
                        <AddContact />
                        <Contact />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
