
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const AboutUs = () => {
    return (
        <div className="bg-gray-900 py-16 pt-32 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading Section */}
                <Slide direction="up" triggerOnce>
                    <h2 className="text-5xl font-extrabold text-white text-center">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 text-center">
                        At <span className="font-bold text-blue-400">EquiSports</span>, our
                        mission is to revolutionize sports with quality products and
                        exceptional service.
                    </p>
                </Slide>

                {/* Mission and Vision Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <Fade triggerOnce>
                        <div className="p-8 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400">
                                To empower athletes and sports enthusiasts by providing
                                top-notch gear and apparel, fostering a community that inspires
                                everyone to achieve their best.
                            </p>
                        </div>
                    </Fade>

                    {/* Vision */}
                    <Fade triggerOnce>
                        <div className="p-8 bg-gray-800 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400">
                                To become the global leader in sports equipment, enabling
                                athletes to excel with the highest-quality tools and
                                accessories.
                            </p>
                        </div>
                    </Fade>
                </div>

                {/* Core Values Section */}
                <div className="mt-16">
                    <Slide direction="right" triggerOnce>
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            Our Core Values
                        </h3>
                    </Slide>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Fade triggerOnce cascade>
                            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold text-white mb-2">Integrity</h4>
                                <p className="text-gray-400">
                                    We uphold the highest standards of integrity in all our
                                    actions.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold text-white mb-2">Quality</h4>
                                <p className="text-gray-400">
                                    We provide outstanding products and unparalleled service to
                                    deliver premium value.
                                </p>
                            </div>

                            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
                                <p className="text-gray-400">
                                    We strive for innovation that meets customer needs and drives
                                    progress.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Meet the Team Section */}
                <div className="mt-16">
                    <Slide direction="up" triggerOnce>
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            Meet Our Team
                        </h3>
                    </Slide>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Team Member 1 */}
                        <Fade triggerOnce>
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co.com/JsnDyvX/speaker-3.png"
                                    alt="Team Member 1"
                                    className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md"
                                />
                                <h4 className="text-xl font-bold text-white">John Doe</h4>
                                <p className="text-gray-400">CEO & Founder</p>
                            </div>
                        </Fade>

                        {/* Team Member 2 */}
                        <Fade triggerOnce>
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co.com/tx9KzQ4/speaker-1.png"
                                    alt="Team Member 2"
                                    className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md"
                                />
                                <h4 className="text-xl font-bold text-white">Jane Smith</h4>
                                <p className="text-gray-400">Product Manager</p>
                            </div>
                        </Fade>

                        {/* Team Member 3 */}
                        <Fade triggerOnce>
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co.com/4gmq5sz/Michael-Lee-web-2022.png"
                                    alt="Team Member 3"
                                    className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md"
                                />
                                <h4 className="text-xl font-bold text-white">Michael Lee</h4>
                                <p className="text-gray-400">Marketing Lead</p>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-16">
                    <Slide direction="left" triggerOnce>
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            What Our Customers Say
                        </h3>
                    </Slide>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial 1 */}
                        <Fade triggerOnce>
                            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                                <p className="text-gray-400 italic">
                                    "EquiSports provided me with the best sports gear I've ever
                                    used. Their customer service is phenomenal!"
                                </p>
                                <h4 className="mt-4 text-white font-bold">- Sarah Williams</h4>
                            </div>
                        </Fade>

                        {/* Testimonial 2 */}
                        <Fade triggerOnce>
                            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                                <p className="text-gray-400 italic">
                                    "Their products have made a huge difference in my training
                                    sessions. Highly recommend EquiSports!"
                                </p>
                                <h4 className="mt-4 text-white font-bold">- David Johnson</h4>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
