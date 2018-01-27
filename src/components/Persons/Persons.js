import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

// In this Parents component, we are using two props - props.persons and props.clicked
class Persons extends Component {
  render() {
    return this.props.persons.map((x, index) => {
      return (
        <ErrorBoundary key={x.id}>
          <Person
            key={x.id}
            click={() => this.props.clicked(index)} // a pattern that passes method as a prop that would change state in another component
            name={x.name}
            age={x.age}
            changed={event => this.props.changed(event, x.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
