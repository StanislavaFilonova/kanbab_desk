import React from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello, TS!</p>
                <a
                    className="App-link"
                    href="https://create-react-app.dev/docs/adding-typescript/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    How to install TS to your JS project
                </a>
            </header>
        </div>
    );
}

export default App;
