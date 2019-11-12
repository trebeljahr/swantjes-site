import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import Films from './Films'
import FilmsShe from './FilmsShe'
import FilmsHatting from './FilmsHatting'
import Texts from './Texts'
import TextsGarden from './TextsGarden'
import About from './About'

const Routing = () => {
  return (
    <Router>
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
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing
