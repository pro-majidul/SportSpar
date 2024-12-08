import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex bg-gradient-to-t from-red-300 to-teal-600 items-center justify-center min-h-screen'>
            <div className='space-y-4 bg-gradient-to-t from-slate-500 to-slate-50 p-10 text-center rounded-full'>
               
                <h3 className='uppercase font-bold md:text-5xl text-gray-900'>404!!</h3>
                <h3 className='uppercase font-bold md:text-4xl text-red-500'>ERROR</h3>
                <p className='uppercase font-medium md:text-3xl text-black'>Page NOt Found</p>
            </div>
        </div>
    );
};

export default Error;