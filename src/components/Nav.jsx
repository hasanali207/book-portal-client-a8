
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    
  return (
    <>
      <section className="navbar bg-base-100">
        <div className="navbar-start">
          
        {/* {`text-xl font-bold p-2 text-gray ${({isActive})=> isActive? ' border-2 border-[#23BE0A] primary-color ': 'text-black  font-bold text-xl'}`} */}

          <a className="text-2xl font-bold">Book <span>Portal</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
          
          <NavLink className={({isActive})=>isActive? 'text-orange-400 font-bold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A] text-green': ' text-xl font-bold p-2 text-gray text-black'} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive? ' text-green font-bold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-bold p-2 text-gray text-black'} to='/listbook'>Listed Book</NavLink>
          <NavLink className={({isActive})=>isActive? 'text-green font-bold text-xl  p-2 text-gray border rounded-lg border-[#23BE0A]': ' text-xl font-bold p-2 text-gray text-black'} to='/pageread'>Page Read</NavLink>
                            
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
