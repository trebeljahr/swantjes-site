import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Navbar from "../components/Navbar"
import Films from "./Films"
import She from "./films/She"
import Work from "./films/Work"
import Short from "./films/Short"
import Texts from "./Texts"
import Garden from "./texts/Garden"
import Layout from "../components/layout.js"
import About from "./About"

const Routing = () => {
  const [color, setColor] = useState("white")
  return (
    <Layout color={color}>
      <Router>
        <Route path="/:id">
          <Navbar setColor={setColor} />
        </Route>
        <Switch>
          <Route exact path="/">
            <Home setColor={setColor} />
          </Route>
          <Route exact path="/films">
            <Films setColor={setColor} />
          </Route>
          <Route exact path="/films/she">
            <She setColor={setColor} />
          </Route>
          <Route exact path="/films/work">
            <Work setColor={setColor} />
          </Route>
          <Route exact path="/films/short">
            <Short setColor={setColor} />
          </Route>
          <Route exact path="/texts">
            <Texts setColor={setColor} />
          </Route>
          <Route exact path="/texts/garden">
            <Garden setColor={setColor} />
          </Route>
          <Route exact path="/about">
            <About setColor={setColor} />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}

export default Routing
