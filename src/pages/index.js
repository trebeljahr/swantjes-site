import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Navbar from "../components/Navbar"
import Films from "./Films"
import She from "./films/She"
import Work from "./films/Work"
import Short from "./films/Short"
import Texts from "./Texts"
import Garden from "./texts/Garden"
import Layout from "../components/layout.js"

const Routing = () => {
  return (
    <Layout>
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
            <Garden />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}

export default Routing
