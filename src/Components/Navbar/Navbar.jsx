import React from "react";
import { NavLink } from "react-router";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar mb-10 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"} className="btn ">
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"listed-book"} className="btn ">
                
                  Listed Books
               
              </NavLink>
            </li>
            
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">BookVibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <NavLink to={"/"} className="btn  mr-5">
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"listed-book"} className="btn  mr-5">
                
                  Listed Books
               
              </NavLink>
            </li>
           
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success mr-5">Sign In</a>
        <a className="btn btn-info">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
