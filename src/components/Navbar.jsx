import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Navbar = () => {

    const { user, userLogOut, setUser } = useContext(AuthContext)
    const [theme, setTheme] = useState('light')

    const handeltheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handelLogOut = () => {
        userLogOut()
            .then(res => setUser(res.user))
            .catch(error => {
                console.log(error.code);
            })
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);

    }, [theme])

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/' className='btn'>Home</NavLink>
                        <NavLink to='/allRequirements' className='btn'>All Sports Equipment</NavLink>
                        <NavLink to='/addEquipment' className='btn'>Add Equipment</NavLink>
                        <NavLink to='/myEquipment' className='btn'>My Equipment</NavLink>

                    </ul>
                </div>
                <NavLink to='/' className="md:text-3xl md:font-bold text-xl">Sports Spar</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 px-1">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'px-4 py-3 font-semibold border border-1 rounded-xl bg-green-500' : 'px-4 py-3 font-semibold border border-1 rounded-xl bg-gray-200 hover:bg-green-500'}>Home</NavLink>
                    <NavLink to='/allRequirements' className={({ isActive }) => isActive ? 'px-4 py-3 font-semibold border border-1 rounded-xl bg-green-500' : 'px-4 py-3 font-semibold border border-1 rounded-xl bg-gray-200 hover:bg-green-500'}>All Sports Equipment</NavLink>
                    <NavLink to='/addEquipment' className={({ isActive }) => isActive ? 'px-4 py-3 font-semibold border border-1 rounded-xl bg-green-500' : 'px-4 py-3 font-semibold border border-1 rounded-xl bg-gray-200 hover:bg-green-500'}>Add Equipment</NavLink>
                    <NavLink to='/myEquipment' className={({ isActive }) => isActive ? 'px-4 py-3 font-semibold border border-1 rounded-xl bg-green-500' : 'px-4 py-3 font-semibold border border-1 rounded-xl bg-gray-200 hover:bg-green-500'}>My Equipment</NavLink>

                </ul>
            </div>
            <div className="navbar-end gap-1">
                <label className="flex cursor-pointer md:gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input onClick={handeltheme} type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                {
                    user && user ? <div className='flex items-center gap-1'>
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName
                        } className='h-10 w-10 rounded-full hidden md:block' src={user?.photoURL} alt="" />
                        <Tooltip id="my-tooltip" />
                        <button onClick={handelLogOut} className="md:px-4 px-3 py-1 md:py-3 md:font-semibold border border-1 rounded-xl bg-gray-200 hover:bg-green-500">Log Out</button>
                    </div> : <div className='flex items-center gap-1'>
                        <NavLink to='register' className="md:px-4 px-3 py-1 md:py-3 md:font-semibold hidden md:block border border-1 rounded-xl bg-gray-200 hover:bg-green-500">Register</NavLink>
                        <NavLink to='login' className="md:px-4 px-3 py-1 md:py-3 md:font-semibold border border-1 rounded-xl bg-gray-200 hover:bg-green-500">Login</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;