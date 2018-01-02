import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Main from "./../Main";
// const Home = () => <h1>Home</h1>;

const NavSideBar = () => {
  return (
    <div className="navSideBar" style={styles.navSideBar}>
      <Router>
        <div styles={{ width: "100px" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to={{ pathname: "/about" }}>About</Link>{" "}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={() => <h1>About</h1>} />
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

const styles = {
  navSideBar: {
    font: 14
  }
};

export default NavSideBar;
