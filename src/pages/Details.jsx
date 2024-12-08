import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const datas = useLoaderData()
    
    // const [datas , setDatas]=useState({})
    
    // const {id} = useParams();

    


    // useEffect(()=>{
    //    fetch(`http://localhost:5000/product/${id}`)
    //    .then(res => res.json())
    //    .then(data =>setDatas(data) )
    // },[])

    console.log(datas);
    if (!datas) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div
            className="hero min-h-[calc(90vh-223px)]"
            style={{
                backgroundImage: `url(${datas.image })`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="card text-black card-compact bg-base-100 max-w-md shadow-xl">
                    <figure>
                        <img className='max-w-44 w-full'
                            src={datas.image }
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="md:card-title">Product Name : {datas.item }</h2>
                        <h2 className="md:card-title">Product Category : {datas.category }</h2>
                        <p className='text-start '><span className='font-medium underline underline-offset-2'>Descriptions :</span> <br /> {datas?.descriptions?.slice(0 ,200)}</p>
                        <div className='md:flex font-medium justify-between'>
                            <p>Prize : {datas.prize } TK</p>
                            <p className='items-center flex'>Rating : <Rating name="half-rating-read" size='small' defaultValue={datas.rating } precision={0.5} readOnly /> {datas.rating }</p>
                        </div>
                        <p>Delivary Time : {datas.delivary }</p>
                        <div className='md:flex font-medium justify-between'>
                            <p>Customizations : {datas.customization }</p>
                            <p>Stack : {datas.stack }</p>
                        </div>
                        <div className='font-medium'>
                            <p>User-Email : {datas.useremail }</p>
                            <p>User-Name : {datas.username }</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;