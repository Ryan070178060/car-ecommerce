import React, { useState, useRef } from 'react';
import './Navbar.css'

import logo from  '../Assets/logo.png'
import { Link} from 'react-router-dom'

const Navbar = () => {

  
  const [menu,setMenu]= useState("shop");
  const menuRef = useRef();


  



    return (
      <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
        </div>
    <ul ref={menuRef}  className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("muscle")}}><Link  style={{textDecoration:'none'}}to='/muscle'>Muscle Cars</Link>{menu==="muscle"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sports")}}><Link style={{textDecoration:'none'}} to='/sports'>Sports Cars</Link>{menu==="sports"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("electric")}}><Link style={{textDecoration:'none'}} to='/electric'>Electric</Link>{menu==="electric"?<hr/>:<></>}</li>
    </ul>
        </div>
      );
    }

export default Navbar
