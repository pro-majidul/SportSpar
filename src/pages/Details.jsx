import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [datas, setDatas] = useState({})
    const [loader , setLoader]= useState(true)

    useEffect(() => {
        fetch(`https://equi-sports-server-side-omega.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setLoader(false)
            }).catch(() =>{
                setLoader(false)
            })
    }, [])

   
    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div
            className="hero min-h-[calc(90vh-223px)]"
            style={{
                backgroundImage: `url(${datas.photo})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="card text-black card-compact bg-base-100 max-w-lg shadow-xl">
                    <figure>
                        <img className=' w-full'
                            src={datas.photo}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="md:card-title">Product Name : {datas.item}</h2>
                        <h2 className="md:card-title">Product Category : {datas.category}</h2>
                        <p className='text-start text-lg'><span className='font-medium text-xl underline underline-offset-2'>Descriptions :</span> <br /> {datas?.descriptions?.slice(0, 200)}</p>
                        <div className='md:flex font-medium justify-between'>
                            <p className='font-bold'>Prize : {datas.prize} TK</p>
                            <p className='items-center flex font-bold'>Rating : <Rating name="half-rating-read" size='small' defaultValue={datas.rating} precision={0.5} readOnly /> {datas.rating}</p>
                        </div>
                        <p className='font-medium text-lg'>Delivary Time : {datas.delivary}</p>
                        <div className='md:flex font-medium justify-between'>
                            <p className='text-lg'>Customizations : {datas.customization}</p>
                            <p className='text-lg'>Stack : {datas.stack}</p>
                        </div>
                        <div className='font-medium'>
                            <p className='text-lg'>User-Email : {datas.useremail}</p>
                            <p className='text-lg'>User-Name : {datas.username}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;