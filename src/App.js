import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
