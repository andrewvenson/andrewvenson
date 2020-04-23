import React from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import HomeRun from "./components/HomeRun";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <NavComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Portfolio} />
      </Switch>
      <HomeRun />
    </Router>
  );
}

export default App;
