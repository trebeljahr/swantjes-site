import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './app.css'
import Home from './pages/Home'
import Films from './pages/films/Films'
import She from './pages/films/She'
import Work from './pages/films/Work'
import Short from './pages/films/Short'
import Texts from './pages/texts/Texts'
import TextsGarden from './pages/texts/Garden'
import About from './pages/About'
import Navbar from './Navbar'

const Routing = () => {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/films/she">
          <She />
        </Route>
        <Route exact path="/films/work">
          <Work />
        </Route>
        <Route exact path="/films/short">
          <Short />
        </Route>
        <Route exact path="/texts">
          <Texts />
        </Route>
        <Route exact path="/texts/garden">
          <TextsGarden />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing
