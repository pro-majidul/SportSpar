import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Categories from '../components/Categories';
import Blogs from '../components/Blogs';
import Chose from '../components/Chose';

const Home = () => {
  return (
    <div className=' py-3 w-full mx-auto max-w-7xl'>
      <Banner></Banner>
      <div className='mt-12'>
        <Products></Products>
      </div>
      <div className='my-12'>
        <Categories></Categories>
      </div>
      <div >
        <Blogs></Blogs>
      </div>
      <div className='my-12'>
        <Chose></Chose>
      </div>

    </div>
  );
};

export default Home;