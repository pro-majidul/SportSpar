import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer w-full max-w-7xl mx-auto text-neutral-content p-10">
                <aside>


                    <h3 className='text-3xl font-bold'>Sports Spar</h3>
                    <p>
                        House-03, Road-05, Block-C, Future
                        <br />
                        Town Ltd, Basila, Mohammadpur,
                        <br />
                        Dhaka-1207, Bangladesh
                    </p>
                </aside>
                <nav>
                    <NavLink to='/' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300'}>Home</NavLink>
                    <NavLink to='/allRequirements' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>All Sports</NavLink>

                    <NavLink to='/about' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>About Us</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>Contact Us</NavLink>
                    <NavLink to='/support' className={({ isActive }) => isActive ? 'font-medium text-lg text-green-500 hover:text-green-300 ' : ' font-medium text-lg text-white  hover:text-green-300 '}>Support</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/majidul1230" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            <FaFacebook size={24} />

                        </a>
                        <a href="https://www.instagram.com/majidul1230" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            <FiInstagram size={24} />

                        </a>
                        <a href="https://wa.me/8801746637704" target='_blank' className="link link-hover">
                            <FaWhatsapp size={24} />

                        </a>
                    </div>
                    <h6 className="footer-title">Phone</h6>
                    <a href='tel:01312-057417' className="link link-hover">+880 01312-057417</a>
                    <a href='tel:0258154400' className="link link-hover">+880258154400</a>
                    <h6 className="footer-title">Email</h6>
                    <a href="mailto:majidul123tub@gmail.com" className="link link-hover">majidul123tub@gmail.com</a>
                </nav>

            </footer>
            <aside className='w-full text-center text-white text-xs'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Sports Spar</p>
            </aside>
        </div>
    );
};

export default Footer;