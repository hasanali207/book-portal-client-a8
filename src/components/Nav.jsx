
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    
  return (
    <>
      <section className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink className={({isActive})=>isActive? 'text-orange-400 font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A] text-green': ' text-xl font-semibold p-2 text-gray text-black'} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive? ' text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/listbook'>Listed Book</NavLink>
          <NavLink className={({isActive})=>isActive? 'text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/pageread'>Page Read</NavLink>

          <NavLink className={({isActive})=>isActive? 'text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/writer'>Writer</NavLink>

          <NavLink className={({isActive})=>isActive? 'text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/contact'>Contact</NavLink>
      </ul>
    </div>
        {/* {`text-xl font-semibold p-2 text-gray ${({isActive})=> isActive? ' border-2 border-[#23BE0A] primary-color ': 'text-black  font-semibold text-xl'}`} */}

          <a className="text-2xl font-semibold">Book <span>Portal</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
          
          <NavLink className={({isActive})=>isActive? 'text-orange-400 font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A] text-green': ' text-xl font-semibold p-2 text-gray text-black'} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive? ' text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/listbook'>Listed Book</NavLink>
          <NavLink className={({isActive})=>isActive? 'text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/pageread'>Page Read</NavLink>

          <NavLink className={({isActive})=>isActive? 'text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/writer'>Writer</NavLink>

          <NavLink className={({isActive})=>isActive? 'text-green font-semibold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-semibold p-2 text-gray text-black'} to='/contact'>Contact</NavLink>
                            
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn">Login</a>
          <a className="btn">Sign Up</a>
        </div>
    </section>
    </>
  );
};

export default Nav;
