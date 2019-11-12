import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/texts">Texts</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
          </ul>
  
          <hr />
          
        </div>
    );
  }