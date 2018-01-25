import React, { Component } from "react";

// Error boundary is a higher order component that wraps a component with a goal of handling any errors it may throw
// Only use them when you know a code might fail and you cant control that instead of wrapping it on all components.
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage} </h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
