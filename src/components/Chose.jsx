import React from 'react';

const Chose = () => {
    return (
        <section className="bg-blue-50 py-12 px-4 md:px-12">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Choose SportsSpar?</h2>
                <p className="text-xl mb-8 text-gray-700">
                    SportsSpar is more than just a sports equipment store; we're your trusted partner in achieving peak performance.
                    Here's why thousands of athletes and sports enthusiasts choose us:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="flex flex-col items-center transition hover:scale-105 bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdX5VZxGMoVwGqu0FkYbG03reLhcdofSsoGw&s" alt="Quality" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">High-Quality Gear</h3>
                        <p className="text-gray-600 text-center">
                            Our products are sourced from the top brands in the industry, ensuring durability and performance that can withstand even the most intense workouts.
                        </p>
                    </div>


                    <div className="flex flex-col items-center transition hover:scale-105 bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://png.pngtree.com/element_our/png/20180921/a-girl-riding-a-pink-delivery-scooter-png_105783.jpg" alt="Fast Delivery" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Delivery</h3>
                        <p className="text-gray-600 text-center">
                            We know how important it is to get your gear quickly. That’s why we offer fast, reliable shipping options that get you back in the game as soon as possible.
                        </p>
                    </div>


                    <div className="flex flex-col items-center transition hover:scale-105 bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://wpklik.com/wp-content/uploads/2019/01/Customize-Option-in-WordPress.jpg" alt="Customization" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Customization Options</h3>
                        <p className="text-gray-600 text-center">
                            Looking for personalized gear? We offer customization options, whether it’s a special grip on your bat or a unique logo on your gear, we’ve got you covered.
                        </p>
                    </div>


                    <div className="flex flex-col items-center transition hover:scale-105 bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Vm9pRU3kIIhWEZA8Au98Y3yKND9pxuNGAQ&s" alt="Support" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Excellent Customer Support</h3>
                        <p className="text-gray-600 text-center">
                            Our friendly customer service team is available to assist you with any questions or concerns. We ensure a smooth shopping experience from start to finish.
                        </p>
                    </div>


                    <div className="flex flex-col items-center transition hover:scale-105 bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://static.vecteezy.com/system/resources/previews/023/104/177/non_2x/competitive-pricing-rubber-grunge-stamp-seal-vector.jpg" alt="Competitive Prices" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Competitive Prices</h3>
                        <p className="text-gray-600 text-center">
                            We offer the best prices without compromising on quality. Our pricing is designed to provide great value, whether you’re a professional athlete or a hobbyist.
                        </p>
                    </div>

                    <div className="flex flex-col items-center transition hover:scale-105 bg-white p-6 rounded-lg shadow-lg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST02OgkpSQv0uWaDm_AcNcSSC6HRoHVQVx9Q&s" alt="Secure Shopping" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Secure Shopping</h3>
                        <p className="text-gray-600 text-center">
                            Shop with confidence. Our secure payment gateway ensures that your personal and payment details are always protected, so you can focus on what matters most.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chose;

