import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Categories from '../components/Categories';
import Blogs from '../components/Blogs';

const Home = () => {
    return (
        <div className='my-3 py-3'>
           <Banner></Banner> 
           <div className='my-3 py-3'>
            <Products></Products>
           </div>
           <div className='my-3 py-3'>
            <Categories></Categories>
           </div>
           <div className='my-3 py-3'>
           <Blogs></Blogs>
           </div>
           
        </div>
    );
};

export default Home;