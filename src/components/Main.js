import React, { Component } from "react";
import Radium from "radium";

// eslint-disable-next-line
import logo from "./../logo.svg";

//Below Person starts with CAP. In react components starting with small are reserved for native components (div, p, h1 etc).
//Component fileNames starts with caps
//Persons can be named XYZ
import Persons from "./Persons/Persons";
import Cockpit from "./Cockpit/Cockpit";

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
    let persons = null;
    if (this.state.showPeople) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
        />
      );
    }

    return (
      <div className="App-intro">
        <Cockpit
          appTitle="Rahul" //if passed from parent - then appTitle={this.props.parentProp}
          persons={this.state.persons}
          showPeople={this.state.showPeople}
          switchNameHandler={this.switchNameHandler}
          togglePeopleClicked={this.togglePeople}
          clickHandlerWithParameter={this.clickHandlerWithParameter.bind(
            this,
            "RAHUL"
          )}
        />
        {persons}
      </div>
    );
  }
}

//Higher order component
export default Radium(Main);
