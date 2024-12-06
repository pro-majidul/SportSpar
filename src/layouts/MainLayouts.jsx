import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
           <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
           </nav>
           <main className='w-11/12 mx-auto min-h-[calc(100vh-232px)]'>
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayouts;