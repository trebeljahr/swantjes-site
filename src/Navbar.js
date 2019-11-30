import React, {useState} from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
      setMenu((oldMenu)=>!oldMenu)
    }
    return (
      
                   <div className="navbar topLeft">
            <div onClick={toggleMenu} id='toggleMenu' className='center'><h2>Menu</h2></div> <div className='verticalLine'/>  
            {
              menu?     <> 
              <h2>
              <Link to="/">Home</Link>
            </h2>
            <h2>
              <Link to="/about">About</Link>
            </h2>
            <h2>
              <Link to="/texts">Texts</Link>
            </h2>
            <h2>
              <Link to="/films">Films</Link>
</h2></>:<h2>Swantje Furtak</h2>}</div>
             
            
        
    );
  }