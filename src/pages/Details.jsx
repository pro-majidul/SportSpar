import { Rating } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div
            className="hero min-h-[calc(90vh-223px)]"
            style={{
                backgroundImage: `url(${data.image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="card card-compact bg-base-100 max-w-md shadow-xl">
                    <figure>
                        <img
                            src={data.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="md:card-title">Product Name : {data.item}</h2>
                        <h2 className="md:card-title">Product Category : {data.category}</h2>
                        <p className='text-start '><span className='font-medium underline underline-offset-2'>Descriptions :</span> <br /> {data.descriptions.slice(0, 200)}</p>
                        <div className='md:flex font-medium justify-between'>
                            <p>Prize : {data.prize} TK</p>
                            <p className='items-center flex'>Rating : <Rating name="half-rating-read" size='small' defaultValue={data.rating} precision={0.5} readOnly /> {data.rating}</p>
                        </div>
                        <p>Delivary Time : {data.delivary}</p>
                        <div className='md:flex font-medium justify-between'>
                            <p>Customizations : {data.customization}</p>
                            <p>Stack : {data.stack}</p>
                        </div>
                        <div className='font-medium'>
                            <p>User-Email : {data.useremail}</p>
                            <p>User-Name : {data.username}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;