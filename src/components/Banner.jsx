import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className="carousel w-full pt-16  max-w-7xl mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="hero bg-gradient-to-r from-black to-slate-500">
                        <div className="hero-content md:flex block text-center">
                            <Fade direction="left">
                                <img
                                    src="https://i.ibb.co/w7nVZD6/sports.webp"
                                    alt="Best Outdoors and Indoors Sports"
                                    className="object-cover w-full h-[60vh]"
                                />
                            </Fade>
                            <div className="max-w-xl">
                                <Fade direction="left">
                                    <h1 className="md:text-3xl py-5 font-bold text-white uppercase">Best Outdoors and Indoors Sports Games of 2024</h1>
                                    <Link to="/allRequirements">
                                        <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">See ALL</button>
                                    </Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="hero bg-gradient-to-r from-black to-slate-500">
                        <div className="hero-content md:flex block text-center">
                            <Fade direction="right">
                                <img
                                    src="https://i.ibb.co/wCn4sGL/Thrax-Aello-series-shoes.jpg"
                                    alt="New Arrivals"
                                    className="object-cover w-full h-[60vh]"
                                />
                            </Fade>
                            <div className="max-w-xl">
                                <Fade direction="right">
                                    <h1 className="md:text-3xl font-bold text-white uppercase">New Arrivals</h1>
                                    <p className="py-6 text-white text-xl md:text-5xl font-bold">Smart Badminton Shoes</p>
                                    <Link to="/allRequirements">
                                        <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">See ALL</button>
                                    </Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="hero bg-gradient-to-r from-slate-100 to-slate-500">
                        <div className="hero-content md:flex block text-center">
                            <Fade direction="right">
                                <img
                                    src="https://i.ibb.co/7tdZkVC/360-F-286767786-bo-XM75-PDLYIs-YWzab-Z3f-Kc-M3esv50-TNS.jpg"
                                    alt="New Store"
                                    className="object-cover w-full h-[60vh]"
                                />
                            </Fade>
                            <div className="max-w-xl">
                                <Fade direction="right">
                                    <h1 className="md:text-3xl text-white font-bold py-6 uppercase">New Store In Your City</h1>
                                    <Link to="/allRequirements">
                                        <button className="btn btn-outline btn-sm md:btn-md text-white outline-white rounded-3xl">See ALL</button>
                                    </Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
