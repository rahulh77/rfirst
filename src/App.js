import React, { Component } from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
//Below Person starts with CAP. In react components starting with small are reserved for native components (div, p, h1 etc).
//Person can be named XYZ
import Person from "./Person/Person";

class App extends Component {
  //state is reserved property of custom component.
  state = {
    abc: {},
    people: [
      { name: "Max", age: 20 },
      { name: "Rick", age: 26 },
      { name: "David", age: 27 }
    ]
  };

  render() {
    return (
      //React.createElement('div', {className: 'App'}, React.createElement('h4', {className: 'App-title'}, 'JSX code gets transformed to React.createElement() code'))
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Shopping List for {this.props.name}</h1>
          <p>JSX code gets transformed to React.createElement() code</p>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
          />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
          >
            My hobby is running
          </Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}
          />
        </p>
      </div>
    );
  }
}

export default App;
