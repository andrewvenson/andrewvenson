import React from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import "./images/profilePic.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
