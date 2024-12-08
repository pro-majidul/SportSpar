import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [loader , setLoader] =useState(true)
    useEffect(() => {
        fetch('https://equi-sports-server-side-omega.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoader(false)
            })
            .catch(error =>{
                console.log(error);
                setLoader(false)
            })
    }, [])

    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl underline underline-offset-8 text-orange-400 font-bold text-center mb-6">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                        >
                            <img
                                src={blog?.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                            <a
                                href={blog.link} 
                                target='_blank'
                                className="text-blue-600 hover:underline"
                            >
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;

