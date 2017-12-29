import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import NavSideBar from "./components/navigation/navSideBar";
class App extends Component {
  render() {
    return (
      //React.createElement('div', {className: 'App'}, React.createElement('h4', {className: 'App-title'}, 'JSX code gets transformed to React.createElement() code'))
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <div className="App-Nav">
              <NavSideBar />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
