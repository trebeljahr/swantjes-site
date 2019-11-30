import React, {useState} from 'react'
import {
    NavLink, Route
  } from "react-router-dom";

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
      setMenu((oldMenu)=>!oldMenu)
    }

    return (
          <div className="navbar topLeft">
            <div onClick={toggleMenu} id='toggleMenu' className='center'>
              <h2>Menu</h2>
            </div> 
            <div className='verticalLine'/>  
            {
              menu?
              <> 
                <h2>
                  <NavLink activeStyle={{color: 'blue'}} exact to="/">Home</NavLink>
                </h2>
                <h2>
                  <NavLink  activeStyle={{color: 'blue'}} to="/about">About</NavLink>
                </h2>
                <h2>
                  <NavLink  activeStyle={{color: 'blue'}} to="/texts">Texts</NavLink>
                </h2>
                <Route path="/texts">
                      <NavLink  activeStyle={{color: 'blue'}} to="/texts/garden">Garden</NavLink>
                </Route>
                <h2>
                  <NavLink  activeStyle={{color: 'blue'}} to="/films">Films</NavLink>
                </h2>
                <Route path="/films">
                      <NavLink  activeStyle={{color: 'blue'}} to="/films/she">She</NavLink>
                      <NavLink  activeStyle={{color: 'blue'}} to="/films/work">Work</NavLink>
                      <NavLink  activeStyle={{color: 'blue'}} to="/films/short">Short</NavLink>
                </Route>
              </>
              :
              <h2>Swantje Furtak</h2>
            }
          </div>
    );
  }