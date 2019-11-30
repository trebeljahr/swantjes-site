import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './app.css'
import Home from './pages/Home'
import Films from './pages/Films'
import FilmsShe from './pages/FilmsShe'
import FilmsHatting from './pages/FilmsHatting'
import Texts from './pages/Texts'
import TextsGarden from './pages/TextsGarden'
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
          <FilmsShe />
        </Route>
        <Route exact path="/films/hatting">
          <FilmsHatting />
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
