import React, { Component } from "react";

// eslint-disable-next-line
import logo from "./../logo.svg";
// import "./App.css";
// import NavSideBar from "./navigation/navSideBar";
//Below Person starts with CAP. In react components starting with small are reserved for native components (div, p, h1 etc).
//Person can be named XYZ
import Person from "./../Person/Person";

class Main extends Component {
  //state is reserved property of custom component.
  state = {
    abc: {},
    showPeople: true,
    people: [
      { name: "Max", age: 20 },
      { name: "Rick", age: 26 },
      { name: "David", age: 27 }
    ]
  };

  switchNameHandler = () => {
    //console.log("hiiii");
    //wont work - instead use setState()
    //this.state.people[0].name = "Rahul";
    //setState will merge new state with old state. i.e. overwrite new people instead of old and keep abc as is
    this.setState({
      people: [
        { name: "Rahul", age: 20 },
        { name: "Ben", age: 26 },
        { name: "David", age: 27 }
      ]
    });
  };

  clickHandlerWithParameter = myinput => {
    console.log(myinput);
  };

  togglePeople = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  render() {
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
        <button onClick={this.togglePeople}>Toggle People</button>
        {this.state.showPeople ? (
          <div>
            <Person
              name={this.state.people[0].name}
              age={this.state.people[0].age}
            />
            <Person
              myclick={this.switchNameHandler} // a pattern that passes method as a prop that would change state in another component
              name={this.state.people[1].name}
              age={this.state.people[1].age}
            >
              My hobby is running
            </Person>
            <Person
              name={this.state.people[2].name}
              age={this.state.people[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Main;
