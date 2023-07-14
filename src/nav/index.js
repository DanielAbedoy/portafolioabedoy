import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Project from "../pages/projects";
import Game from '../pages/game';

export default function Nav() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/game" component={Game}/>
        <Route path="/inicio" component={Home} />
        <Route path="/sobre-mi" component={About} />
        <Route path="/contacto" component={Contact} />
        <Route path="/proyectos" component={Project} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}