import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./views/Main/";
import Login from "./views/Login/";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}