//Naming convention for a component is firstCharacter in Caps
// function names starts with smaller case
import React from "react";
import Radium from "radium";
import "./Person.css";

//using es6 function syntax to create a component (Best practice)
const person = props => {
  const style = {
    "@media(min-width: 500px)": { width: "450px" }
  };

  return (
    <div onClick={props.myclick} className="Person" style={style}>
      <p>
        I am {props.name} and {props.age} years old.
      </p>
      <p>{props.children}</p>
      {/* <p>Hello from Person Component </p>
      <p>Component is a function that returns JSX</p> */}
    </div>
  );
};

export default Radium(person);

// class Person extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }
