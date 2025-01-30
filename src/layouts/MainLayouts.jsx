import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
           <nav className='w-full mx-auto max-w-7xl'>
            <Navbar></Navbar>
           </nav>
           <main className='w-full mx-auto min-h-[calc(100vh-200px)]'>
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayouts;