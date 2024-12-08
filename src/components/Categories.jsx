import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoader(false)
            })
            .catch(error => {
                console.log(error);
                setLoader(false)
            })
    }, [])


    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    
    return (
        <div>
            <h3 className='md:text-4xl my-3 text-center underline-offset-8 underline font-semibold text-red-400'>Categories</h3>

            <div className='text-center space-x-4 py-3 my-3 '>
                <div className='grid md:grid-cols-3 gap-5 '>
                    {
                        categories && categories.map(category => <div className="card bg-base-100  shadow-xl">
                            <figure>
                                <img className='max-h-44 w-full'
                                    src={category.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.category}</h2>

                            </div>
                        </div>)
                    }f
                </div>
            </div>
        </div>
    );
};

export default Categories;