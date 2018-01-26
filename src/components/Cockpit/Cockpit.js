import React from "react";

//this is a functional component as it does not need to manage its own state
const cockpit = props => {
  const styles = {
    backgroundColor: "red",
    ":hover": { backgroundColor: "lightgreen", color: "black" } //pseudo-selector works with Radium
  };

  if (props.showPeople) {
    styles.backgroundColor = "green";
    styles[":hover"] = { backgroundColor: "salmon", color: "gray" };
  }

  return (
    <div>
      <h1>Shopping List for {props.appTitle}</h1>
      <h4>JSX code gets transformed to React.createElement() code</h4>
      <button onClick={props.switchNameHandler}>State Change</button>
      <div>
        <button onClick={props.clickHandlerWithParameter}>
          Handler with parameter
        </button>

        {/* <button onClick={this.clickHandlerWithParameter.bind(this, "RAHUL")}>
          Handler with parameter
        </button> */}
        {/*  convinient but inefficient syntax, as react can rerender certain things too often
      so dont use it if bind is sufficient */}
        {/* <button onClick={() => this.clickHandlerWithParameter("RAHUL2")}>
          Handler with parameter method 2
        </button> */}
      </div>
      <br />
      <br />
      <button style={styles} onClick={props.togglePeopleClicked}>
        Toggle People
      </button>
    </div>
  );
};

export default cockpit;
