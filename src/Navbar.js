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
      <div>
        {
         <div className="navbar-vertical topLeft">
         <div onClick={toggleMenu} id='toggleMenu' className='center'>
           <h2>Menu</h2>
         </div> 
         <Route exact path="/">
          <div className='verticalLine' style={{backgroundColor: 'grey'}}/>  
         </Route>
         <Route exact path="/about">
          <div className='verticalLine' style={{backgroundColor: 'grey'}}/>  
         </Route>
         <Route exact path="/films">
          <div className='verticalLine' style={{backgroundColor: 'grey'}}/>  
         </Route>
         <Route exact path="/texts">
          <div className='verticalLine' style={{backgroundColor: 'grey'}}/>  
         </Route>
         <Route path="/films/work">
          <div className='verticalLine work-color'/>  
         </Route>
         <Route path="/films/short">
          <div className='verticalLine short-color'/>  
         </Route>
         <Route path="/films/she">
          <div className='verticalLine she-color' style={{}}/>  
         </Route>
         <Route path="/texts/garden">
          <div className='verticalLine garden-color' style={{}}/>  
         </Route>
         {
           menu?
           <> 
             <h2>
               <NavLink activeStyle={{color: 'red'}}  className="navbarLinks" exact to="/">Home</NavLink>
             </h2>
             <h2>
               <NavLink  activeStyle={{color: 'red'}}  className="navbarLinks" to="/about">About</NavLink>
             </h2>
             <h2>
               <NavLink  activeStyle={{color: 'red'}}  className="navbarLinks" to="/texts">Texts</NavLink>
             </h2>
             <Route path="/texts">
                   <NavLink  activeStyle={{color: 'red'}} className="navbarLinks" to="/texts/garden">Garden</NavLink>
             </Route>
             <h2>
               <NavLink  activeStyle={{color: 'red'}} className="navbarLinks" to="/films">Films</NavLink>
             </h2>
             <Route path="/films">
                   <NavLink  activeStyle={{color: 'red'}} className="navbarLinks" to="/films/she">She</NavLink>
                   <NavLink  activeStyle={{color: 'red'}} className="navbarLinks" to="/films/work">Work</NavLink>
                   <NavLink  activeStyle={{color: 'red'}} className="navbarLinks" to="/films/short">Short</NavLink>
             </Route>
           </>
           :''
         } 
         <h2 style={{marginLeft: "auto", marginRight: 0}}>Swantje Furtak</h2>
       </div>
        }
      </div>
     
          
    );
  }