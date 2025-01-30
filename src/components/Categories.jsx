import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/category')
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
        return <div className='flex items-center justify-center text-white min-h-screen'> <span className="loading loading-bars loading-lg"></span></div>
    }

    return (
        <div>
            <Fade direction='right' triggerOnce>
                <h2 className="text-4xl font-bold text-center text-white mb-8">Categories </h2>
            </Fade>

            <div className='text-center space-x-4 py-3 my-3 '>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {categories && categories.map((category, index) => {
                        const direction = index % 2 === 0 ? "left" : "right";
                        return (
                            <Slide key={category._id} direction={direction} triggerOnce>
                                <div className="card transition hover:scale-105 bg-white shadow-xl flex flex-col h-full">
                                    <figure>
                                        <img className="max-h-44 w-full object-cover" src={category.image} alt="Shoes" />
                                    </figure>
                                    <div className="card-body flex-grow">
                                        <h2 className="card-title">{category.category}</h2>
                                    </div>
                                </div>
                            </Slide>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default Categories;