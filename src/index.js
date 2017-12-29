import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Router, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
//import registerServiceWorker from './registerServiceWorker';
// class Car extends Component {
//   render() {
//     return <h1>Cars page</h1>;
//   }
// }
// class Home extends Component {
//   render() {
//     return <h1>Home Page</h1>;
//   }
// }
// class About extends Component {
//   render() {
//     return <h1>About page</h1>;
//   }
// }

ReactDOM.render(<App name="Rahul" />, document.getElementById("root"));
//registerServiceWorker();
// render(
//   <Router>
//     <Route exact path="/" component={Home} />
//     <Route path="/cars" component={Car} />
//     <Route path="/about" component={About} />
//   </Router>,
//   document.getElementById("root")
// );
