import React from 'react';

const Products = () => {
    const browser = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <h3 className='md:text-4xl my-3 text-center underline-offset-8 underline font-semibold text-red-400'>Products</h3>
            <div className='md:grid grid-cols-3 py-3 my-3 gap-6'>
                {
                    browser.map(brows => <div  className="card card-compact bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;