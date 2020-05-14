import React from "react";
import "./App.css";

import Navbar from "./componets/navbar/Navbar";
import Main from "./componets/main/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={({ routeProps }) => <Main {...routeProps} title="Home" />}
        />
        <Route
          exact
          path="/products"
          render={({ routeProps }) => <Main {...routeProps} title="Products" />}
        />
        <Route
          exact
          path="/users"
          render={({ routeProps }) => <Main {...routeProps} title="Users" />}
        />
      </Switch>
      <Main />
    </Router>
  );
}

export default App;
