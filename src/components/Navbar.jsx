import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { toast } from 'react-toastify';
const Navbar = () => {

    const { user, userLogOut, setUser } = useContext(AuthContext)
    const [theme, setTheme] = useState('light')

    const handeltheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handelLogOut = () => {
        userLogOut()
            .then(res => {
                toast.success('user log-out success')
                setUser(res.user)
            })
            .catch(error => {
                console.log(error.code);
            })
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);

    }, [theme])

    return (
        <div className="navbar bg-black bg-opacity-45 fixed z-10 top-0 w-full max-w-7xl mx-auto">
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
                        className="menu menu-sm dropdown-content bg-[#0D0D1B] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            user && user ? <div className='items-center flex justify-center'><img referrerPolicy='no-referrer' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName
                            } className='h-10 w-10 rounded-full ' src={user?.photoURL} alt="" />  <Tooltip id="my-tooltip" /></div> : <NavLink to='register' className={({ isActive }) => isActive ? 'text-green-500 hover:text-green-300 text-lg  ' : 'text-white hover:text-green-300 text-lg  '}>Register</NavLink>
                        }
                        <NavLink to='/' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300'}>Home</NavLink>
                        <NavLink to='/allRequirements' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>All Sports </NavLink>
                        {user && <>
                            <NavLink to='/addEquipment' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>Add Equipment</NavLink>
                            <NavLink to='/myEquipment' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>My Equipment</NavLink>
                        </>}
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>About Us</NavLink>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>Contact Us</NavLink>
                        <NavLink to='/support' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>Support</NavLink>

                    </ul>
                </div>
                <NavLink to='/' className="md:text-3xl md:font-bold text-xl text-white">Sports Spar</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal md:gap-3 md:px-1">
                    <NavLink to='/' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300'}>Home</NavLink>
                    <NavLink to='/allRequirements' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>All Sports</NavLink>
                    {
                        user && <>
                            <NavLink to='/addEquipment' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>Add Equipment</NavLink>
                            <NavLink to='/myEquipment' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>My Equipment</NavLink>
                        </>
                    }
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>About Us</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>Contact Us</NavLink>
                    <NavLink to='/support' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>Support</NavLink>

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
                    user && user ? <div className='flex items-center gap-2'>
                        <img referrerPolicy='no-referrer' data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName
                        } className='h-10 w-10 rounded-full hidden md:block' src={user?.photoURL} alt="" />
                        <Tooltip id="my-tooltip" />
                        <button onClick={handelLogOut} className="text-white hover:text-green-300 ">Log Out</button>
                    </div> : <div className='flex items-center gap-2'>
                        <NavLink to='register' className={({ isActive }) => isActive ? 'text-green-500 hover:text-green-300 text-lg hidden md:block ' : 'text-white hover:text-green-300 text-lg hidden md:block  '}>Register</NavLink>
                        <NavLink to='login' className={({ isActive }) => isActive ? 'text-green-500 hover:text-green-300 text-lg hidden md:block ' : 'text-white hover:text-green-300 text-lg hidden md:block  '}>Login</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;