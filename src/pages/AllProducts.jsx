import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide } from "react-awesome-reveal";

const AllProducts = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [loader, setLoader] = useState(true);
    const [sort, setSort] = useState('')

    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setAllProduct(data);
                setLoader(false);
            })
            .catch(() => {
                setLoader(false);
            });
    }, []);

    if (loader) {
        return <div className='flex items-center justify-center text-white min-h-screen'> <span className="loading loading-bars loading-lg"></span></div>;
    }

    const handleSort = () => {
        if (sort === 'asc') {
            const sorted = [...allProduct].sort((a, b) => a.prize - b.prize);
            setAllProduct(sorted);

        }
        if (sort === 'dsc') {
            const sorted = [...allProduct].sort((a, b) => b.prize - a.prize);
            setAllProduct(sorted);

        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto pt-32 py-8">
            {/* Header Section */}
            <Slide direction="down" triggerOnce>
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-white">All Sports Equipment</h2>
                    <p className="text-white mt-2">
                        Explore our wide range of sports equipment tailored for your needs.
                    </p>
                </div>
            </Slide>

            {/* Sort Button */}
            <div className="flex justify-end my-5 mr-4">
                <button onClick={handleSort} >
                    <select
                        onChange={e => {
                            setSort(e.target.value)
                        }}
                        value={sort}
                        name='sort'
                        id='sort'
                        className='border py-4 rounded-md'
                    >
                        <option value=''>Sort By </option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allProduct.map((product, index) => {
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

export default AllProducts;
