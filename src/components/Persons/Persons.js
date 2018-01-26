import React from "react";
//import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

// In this Parents component, we are using two props - props.persons and props.clicked
const persons = props =>
  props.persons.map((x, index) => {
    return (
      //   <ErrorBoundary key={x.id}>
      <Person
        key={x.id}
        click={() => props.clicked(index)} // a pattern that passes method as a prop that would change state in another component
        name={x.name}
        age={x.age}
      />
      //   </ErrorBoundary>
    );
  });

export default persons;
