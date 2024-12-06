import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item min-h-[calc(90vh-323px)] relative w-full">
                <div className="hero bg-gradient-to-r from-black to-slate-500">
                    <div className="hero-content md:flex block text-center">
                        <Fade direction='right'>
                            <img src="https://i.ibb.co.com/w7nVZD6/sports.webp" alt="" />

                        </Fade>
                        <div className="max-w-xl">
                            <Fade direction='right'>
                                <h1 className="md:text-3xl py-5 font-bold text-white uppercase">Best Outdors and Indors Sports Games of 2024</h1>

                                <Link to='/allRequirements'>
                                    <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">See ALL</button></Link>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero bg-gradient-to-r from-black to-slate-500">
                    <div className="hero-content md:flex block text-center">
                        <Fade direction='left'>                        <img src="https://i.ibb.co.com/wCn4sGL/Thrax-Aello-series-shoes.jpg" alt="" />
                        </Fade>
                        <div className="max-w-xl ">
                            <Fade direction="right">
                                <h1 className="md:text-3xl font-bold text-white uppercase">New Arrivals</h1>
                                <p className="py-6 text-white text-xl md:text-5xl font-bold">
                                    Smart Batmintion Shoes
                                </p>
                                <Link to='/allRequirements'>
                                    <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">See ALL</button></Link>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero bg-gradient-to-r from-slate-100 to-slate-500 ">

                    <div className="hero-content md:flex block text-center">
                        <Fade direction='left'><img src="https://i.ibb.co.com/7tdZkVC/360-F-286767786-bo-XM75-PDLYIs-YWzab-Z3f-Kc-M3esv50-TNS.jpg" alt="" /></Fade>
                        <div className="max-w-xl">
                            <Fade direction='left'>
                                <h1 className="md:text-3xl text-white font-bold py-6 uppercase">New Store In Your City</h1>

                                <Link to='/allRequirements'>
                                    <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">See ALL</button></Link>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <div className="hero bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello 44</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;