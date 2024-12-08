import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {

    const [allProduct, setAllProduct] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/products')
            .then(res => res.json())
            .then(data => {

                setAllProduct(data)
                setLoader(false)
            })
            .catch(() => {
                setLoader(false)
            })
    }, [])


    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }



    const handelsort = () => {
        const sort = [...allProduct].sort((a, b) => a.prize - b.prize);
        setAllProduct(sort)
    }

    return (
        <div className='my-3 py-3'>
            <div className='flex justify-end'>
                <button onClick={handelsort} className="btn md:btn-md btn-sm hover:bg-green-500">sort</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allProduct.length == 0 ? <p className='md:text-3xl font-bold text-center my-3 py-3'>Data Not Added</p> : allProduct.map((product, idx) => <tr className='md:text-base transition hover:bg-slate-500 text-sm'>
                                <th>{idx + 1}</th>
                                <td>{product.item}</td>
                                <td>{product.
                                    category}</td>
                                <td>{product.prize}</td>
                                <td className='md:space-x-3 space-y-2'>
                                    <Link to={`/details/${product._id}`}>
                                        <button className="md:btn-lg btn btn-sm">View Details</button></Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;