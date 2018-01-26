import React, { Component } from "react";
import Radium from "radium";

// eslint-disable-next-line
import logo from "./../logo.svg";

//Below Person starts with CAP. In react components starting with small are reserved for native components (div, p, h1 etc).
//Person can be named XYZ
import Persons from "./Persons/Persons";

class Main extends Component {
  //state is reserved property of custom component.
  state = {
    abc: {},
    showPeople: true,
    persons: [
      { id: 1, name: "Max", age: 20 },
      { id: 2, name: "Rick", age: 26 },
      { id: 3, name: "David", age: 27 }
    ]
  };

  switchNameHandler = () => {
    //wont work - instead use setState()
    //this.state.people[0].name = "Rahul";
    //setState will merge new state with old state. i.e. overwrite new people instead of old and keep abc as is
    this.setState({
      persons: [
        { id: 1, name: "Rahul", age: 20 },
        { id: 2, name: "Ben", age: 26 },
        { id: 3, name: "David", age: 27 }
      ]
    });
  };

  clickHandlerWithParameter = myinput => {
    console.log(myinput);
  };

  togglePeople = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const styles = {
      backgroundColor: "red",
      ":hover": { backgroundColor: "lightgreen", color: "black" } //pseudo-selector works with Radium
    };

    let persons = null;
    if (this.state.showPeople) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
        />
      );
      styles.backgroundColor = "green";
      styles[":hover"] = { backgroundColor: "salmon", color: "gray" };
    }

    return (
      <div className="App-intro">
        <h1>Shopping List for {this.props.name}</h1>
        <h4>JSX code gets transformed to React.createElement() code</h4>
        <button onClick={this.switchNameHandler}>State Change</button>
        <div>
          <button onClick={this.clickHandlerWithParameter.bind(this, "RAHUL")}>
            Handler with parameter
          </button>
          {/*  convinient but inefficient syntax, as react can rerender certain things too often
      so dont use it if bind is sufficient */}
          <button onClick={() => this.clickHandlerWithParameter("RAHUL2")}>
            Handler with parameter method 2
          </button>
        </div>
        <br />
        <br />
        <button style={styles} onClick={this.togglePeople}>
          Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

//Higher order component
export default Radium(Main);
