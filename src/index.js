import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss";
import "./assets/demo/demo.css";

// import indexRoutes from "./routes/index";
import Login from "./layouts/Login";
import Dashboard from "./layouts/Dashboard";
import { isAuthenticated } from "./api";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route
        path="/login"
        render={props =>
          isAuthenticated() ? (
            <Redirect to={{ pathname: "/" }} />
          ) : (
            <Login {...props} />
          )
        }
      />

      <Route
        render={props =>
          isAuthenticated() ? (
            <Dashboard {...props} />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
