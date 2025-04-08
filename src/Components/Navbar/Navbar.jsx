import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   
        const navLinks = <> 
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/ListedBooks">Listed Books</NavLink></li>
    
    <li><NavLink to="/ReadPage">Pages to Read</NavLink></li>

    {/* <li><NavLink to="/Login">Login</NavLink></li> */}
    
    
    </>
	 return (
        <div className="navbar bg-white-300 px-7">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-green-500 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-transparent bg-green-600 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <p className="btn btn-ghost text-xl font-bold">BOOK VIBE</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
 
  <div className="navbar-end gap-4 ">
 <button className="btn bg-green-500 text-white border-none">Log In</button>
 <button className="btn bg-blue-400 text-white border-none">Sign Up</button>
</div>
  
 
</div>
    );
};

export default Navbar;