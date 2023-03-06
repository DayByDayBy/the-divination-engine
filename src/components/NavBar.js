import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return (

    <>
    <header>
         <ul className = "navbar">
          
        <li className="navLink">
          <Link to="/">GET A READING</Link>
        </li>
  
        <li className="navLink">
          <Link to="/archive">READING ARCHIVE</Link>
        </li>

      </ul>
      <img src="../logo.png" alt="Logo" width="80"/> 
    </header>
    </>
    )
}


export default NavBar;
