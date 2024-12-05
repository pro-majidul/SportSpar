import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
           <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
           </nav>
           <main className='w-11/12 mx-auto '>
            <Outlet></Outlet>
           </main>
           <footer></footer>
        </div>
    );
};

export default MainLayouts;