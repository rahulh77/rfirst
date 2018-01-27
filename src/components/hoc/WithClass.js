import React from "react";

// A higher order component that wraps children
const withClass = props => (
  <div className={props.classes}>{props.children}</div>
);

export default withClass;
