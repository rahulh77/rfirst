//Naming convention for a component is firstCharacter in Caps
// function names starts with smaller case
import React, { Component } from "react";
//import Radium from "radium";
import classes from "./Person.css";
import WithClass from "./../../hoc/WithClass";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <WithClass classes={classes.Person}>
        {/* <div onClick={this.props.click} className={classes.Person}> */}
        <div onClick={this.props.click}>
          I am {this.props.name} and {this.props.age} years old.
        </div>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
        {/* </div> */}
      </WithClass>
    );

    // Below is the way to return adjacent elements (using an array).
    // return [
    //   <p key="1">
    //     I am {this.props.name} and {this.props.age} years old.
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <p key="3">Component is a function that returns JSX</p>
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default Person;

//using es6 function syntax to create a component that doesnt need state (Best practice)
//const person = props => {
// const style = {
//   "@media(min-width: 500px)": { width: "450px" }
// };

//return (
//<div onClick={props.click} className={classes.Person}>
//<p>
//  I am {props.name} and {props.age} years old.
//</p>
//<p>{props.children}</p>
//{/* <p>Hello from Person Component </p>
//<p>Component is a function that returns JSX</p> */}
//</div>
//);
//};

//export default person;
//export default Radium(person);
