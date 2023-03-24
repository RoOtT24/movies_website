import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import cookie from "react-cookies"

const Navbar = ({token,setToken,setLoading})=> {

  function logout(){

    cookie.remove('token');
    setToken(null);
    setLoading(true)

  }
  useEffect(() => {
    
  // console.log(token);
   
  }, [])
  
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className='container'>
    <Link className="navbar-brand" to="/"><img className={styles.logo} src='/assets/img/cinema.png'/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     {token?<ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>:''} 
      <ul className="navbar-nav ms-auto">
        {token?<li className="nav-item">
          <a onClick={logout} className="nav-link" href="/">logout</a>
        </li>:<><li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li></>}
        
        
      </ul>
    </div>
    </div>
  </nav>
  )
}
export default Navbar