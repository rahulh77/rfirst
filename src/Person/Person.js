//Naming convention for a component is firstCharacter in Caps
// function names starts with smaller case
import React from "react";

//using es6 function syntax to create a component (Best practice)
const person = props => {
  return (
    <div onClick={props.myclick} style={{ background: "pink" }}>
      <p>
        I am {props.name} and {props.age} years old.
      </p>
      <p>{props.children}</p>
      {/* <p>Hello from Person Component </p>
      <p>Component is a function that returns JSX</p> */}
    </div>
  );
};

export default person;

// class Person extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }
