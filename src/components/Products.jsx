import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

    const [browser, setBrowser] = useState([])
    const [loader , setLoader]= useState(true)
    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setBrowser(data)
                setLoader(false)

            }).catch(error =>{
                console.log(error);
                setLoader(false)
            })
    }, [])

  
    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl md:text-4xl text-orange-600 underline underline-offset-8 font-bold text-center mb-6">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {browser.map((product) => (
                    <div key={product._id} className="border p-4 rounded-lg shadow-lg">
                        <img src={product.photo} alt={product.name} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold">Product : {product.item}</h3>
                        <p className="text-gray-700">Price :  {product.prize} TK</p>
                        <Link to={`/details/${product._id}`}>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;