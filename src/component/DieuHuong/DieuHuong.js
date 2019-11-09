import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";

class DieuHuong extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default DieuHuong;
