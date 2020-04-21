import React from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // console.log(window.location.pathname);
  return (
    <Router>
      <Switch>
        <NavComponent />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
