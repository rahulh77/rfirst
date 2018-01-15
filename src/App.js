import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
//import Radium, { StyleRoot } from "radium";

// eslint-disable-next-line
import logo from "./logo.svg";
import classes from "./App.css";
import NavSideBar from "./components/navigation/navSideBar";
class App extends Component {
  render() {
    return (
      //React.createElement('div', {className: 'App'}, React.createElement('h4', {className: 'App-title'}, 'JSX code gets transformed to React.createElement() code'))
      //
      //      <StyleRoot>
      <BrowserRouter>
        <div className={classes.App}>
          {/* <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <h1 className={classes.AppTitle}>Welcome to React</h1>
          </header> */}
          <div>
            <div className={classes.AppNav}>
              <NavSideBar />
            </div>
          </div>
        </div>
      </BrowserRouter>
      //      </StyleRoot>
    );
  }
}

export default App;
//export default Radium(App);
