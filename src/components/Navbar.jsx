import React from 'react';
import { FiClock } from 'react-icons/fi';
import { IoHome } from 'react-icons/io5';
import { LuChartSpline } from 'react-icons/lu';
import { NavLink } from 'react-router';

const Navbar = () => {
    const navLinks = <>
        <li>
            <NavLink
                to={'/'}
                className={({ isActive }) => `mr-5 ${isActive ? "bg-[#244D3F] text-white font-medium" : ""}`}
            >
                <IoHome /><span>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/timeLine'}
                className={({ isActive }) => `mr-5 ${isActive ? "bg-[#244D3F] text-white font-medium" : ""}`}
            >
                <FiClock /><span>TimeLine</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/stats'}
                className={({ isActive }) => `mr-5 ${isActive ? "bg-[#244D3F] text-white font-medium" : ""}`}
            >
                <LuChartSpline /><span>Stats</span>
            </NavLink>
        </li>
    </>
    return (
        <div className='shadow-sm bg-white'>
            <div className="w-11/12 max-w-325 mx-auto navbar bg-base-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">keenkeeper</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;