import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
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
        <div className="py-10">
            <div className="container mx-auto">
                <Fade direction='right' triggerOnce>
                    <h2 className="text-4xl font-bold text-center text-white mb-8">Latest Article </h2>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-stretch items-stretch lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => {
                        const direction = index % 2 === 0 ? "left" : "right";
                        return (
                            <Slide key={blog._id} direction={direction} triggerOnce>
                                <div className="bg-white transition hover:scale-105 p-6 rounded-lg shadow-lg hover:shadow-xl flex flex-col h-full">
                                    <img
                                        src={blog?.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover rounded mb-4"
                                    />
                                    <h3 className="font-bold text-xl mb-2 flex-grow">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                    <a
                                        href={blog.link}
                                        target="_blank"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </Slide>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default Blogs;

