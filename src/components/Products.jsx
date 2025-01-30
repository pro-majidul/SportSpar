
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

const Products = () => {

    const [browser, setBrowser] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setBrowser(data);
                setLoader(false);
            })
            .catch(error => {
                console.log(error);
                setLoader(false);
            });
    }, []);

    if (loader) {
        return <div className='flex items-center justify-center text-white min-h-screen'> <span className="loading loading-bars loading-lg"></span></div>;
    }

    return (
        <div className="container mx-auto p-6">
            <Fade direction='left' triggerOnce>
                <h2 className="text-4xl font-bold text-center text-white mb-8">Our Product</h2>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {browser.map((product, index) => {
                    // Alternate directions for the sliding animation
                    const direction = index % 2 === 0 ? "left" : "right";
                    return (
                        <Slide key={product._id} direction={direction} triggerOnce>
                            <div className="border transition transform hover:scale-105 p-4 rounded-lg bg-white shadow-lg">
                                <img
                                    src={product.photo}
                                    alt={product.item}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                                <h3 className="text-xl  font-bold">{product.item}</h3>
                                <p className=" mt-2">Price: {product.prize} TK</p>
                                <Link to={`/details/${product._id}`}>
                                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </Slide>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
