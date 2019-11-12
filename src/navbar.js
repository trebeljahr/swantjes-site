import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
  
          <hr />
          
        </div>
      </Router>
    );
  }