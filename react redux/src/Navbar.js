import React from 'react'
import{ Link } from'react-router-dom'
import {useSelector}  from 'react-redux';
const Navbar = () => {
 const state = useSelector((state)=>state.Handlecart);
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-info shadow-sm">
    <div className='container'>
        <h1 className="navbar-brand fw-bolder">  
        Amazon
        </h1>
<button 
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarSupportedContent"
aria-controls='navbarSupportedContent'
aria-expanded="false"
aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse"id="navbarSupportedContent">
  <ul className=" navbar-nav mx-auto mb-2 mb-lg-0" id='reddy'>
    <li className="nav-item">
       <a href='/Home'><p className="nav-link active" aria-current="page">Home</p></a>
    </li>
    
    <div className="collapse navbar-collapse"id="navbarSupportedContent">
  <ul className=" navbar-nav mx-auto mb-2 mb-lg-0" id='reddy'>
    <li className="nav-item"> 
    <a href='/Products'> <p className="nav-link active" aria-current="page">Products</p>
    </a>
     </li> 
     
     <div className="collapse navbar-collapse"id="navbarSupportedContent">
  <ul className=" navbar-nav mx-auto mb-2 mb-lg-0" id='reddy'>
    <li className="nav-item">
      <p className="nav-link active" aria-current="page" to="/about">About</p>
    </li>
    <div className="collapse navbar-collapse"id="navbarSupportedContent">
  <ul className=" navbar-nav mx-auto mb-2 mb-lg-0" id='reddy'>
  <li className="nav-item">
      <p className="nav-link active" aria-current="page" to="/Contact">Contact</p>
    </li>
    </ul>
  <div className="collapse navbar-collapse"id="navbarSupportedContent">
  <ul className=" navbar-nav mx-auto mb-2 mb-lg-0">
  <div className="btn btn-outline-success me-2">login</div>
  <div className='btn btn-outline-success me-2'>Register</div>
  <Link to='/cart'><div className='btn btn-outline-success me-2'>cart</div></Link>
  ({state.length})
  </ul>
  </div>
  </div>
  </ul>
  </div>
  </ul>
  </div>
  </ul>
  </div>
  </div>
  </nav>
  
    </div>
  )
}

export default Navbar;