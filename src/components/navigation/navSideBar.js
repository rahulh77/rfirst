import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Main from "./../Main";
import Category from "./../Screens/Category";
//import Bootstrap from "bootstrap/dist/css/bootstrap.css";

const NavSideBar = () => {
  return (
    <div>
      <Router>
        <div className="row row-eq-height">
          <div
            className="col col-md-2"
            style={{ padding: "20px", backgroundColor: "gray", font: 14 }}
          >
            <Link to="/">Home</Link>{" "}
            <Link to={{ pathname: "/category" }}>Category</Link>{" "}
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col col-md-10" style={{ padding: "20px" }}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/category" component={Category} />
              <Route path="/contact" render={() => <h1>Contact Us</h1>} />
              <Route
                path="/blog"
                children={({ match }) => (
                  <li className={match ? "active" : ""}>
                    <Link to="/blog">Blog</Link>
                  </li>
                )}
              />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

// const styles = {
//   navSideBar: {
//     font: 14,
//     backgroundColor: "gray",
//     padding: "20px",
//     height: "100%"
//   }
// };

export default NavSideBar;
