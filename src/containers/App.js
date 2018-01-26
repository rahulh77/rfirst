import React, { Component } from "react";
//import Radium, { StyleRoot } from "radium";

// eslint-disable-next-line
import logo from "./../logo.svg";
import classes from "./App.css";
import NavSideBar from "./../components/navigation/navSideBar";
class App extends Component {
  render() {
    return (
      //React.createElement('div', {className: 'App'}, React.createElement('h4', {className: 'App-title'}, 'JSX code gets transformed to React.createElement() code'))

      <div className={classes.App}>
        <div className={classes.AppNav}>
          <NavSideBar />
        </div>
      </div>
    );
  }
}

export default App;
//export default Radium(App);
