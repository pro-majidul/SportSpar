import React from 'react';

const Categories = () => {
    return (
        <div>
            <h3 className='md:text-4xl my-3 text-center underline-offset-8 underline font-semibold text-red-400'>Categories</h3>

            <div className='text-center space-x-4 py-3 my-3 '>
                <button className="btn">bat</button>
                <button className="btn">ball</button>
                <button className="btn">Shoes</button>
                <button className="btn">batmintion</button>
                <button className="btn">Jersy</button>
            </div>
        </div>
    );
};

export default Categories;