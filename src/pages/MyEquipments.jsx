
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState([]);
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        fetch(`https://equi-sports-server-side-omega.vercel.app/product/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setEquipments(data)
            })
            .catch(error => {
                console.log(error);
                setLoader(false)
            })
    }, [user?.email]);


    if (loader) {
        return <div className='flex items-center justify-center text-white min-h-screen'> <span className="loading loading-bars loading-lg"></span></div>;
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://equi-sports-server-side-omega.vercel.app/product/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your equipment has been deleted.', 'success');
                            setEquipments(equipments.filter(equipment => equipment._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto w-full max-w-7xl  pt-24 p-6">
            <h2 className="text-2xl font-bold text-center text-white my-6">My Equipment List</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 py-10 lg:grid-cols-4 gap-6">
                {equipments.length == 0 ? <div className='flex items-center justify-center min-h-[calc(90vh-323px)]'><p className="text-2xl font-bold text-white text-center mb-6">No Data added</p></div> :
                    equipments.map((equipment, index) => {
                        const direction = index % 2 === 0 ? "left" : "right"
                        return (
                            <Fade key={equipment._id} direction={direction} triggerOnce>
                                <div className="card transition hover:scale-105 bg-white shadow-md rounded-lg p-4">
                                    <img src={equipment.photo} alt={equipment.item} className="w-full h-40 object-cover rounded-lg mb-4" />
                                    <h3 className="text-lg font-bold">{equipment.item}</h3>
                                    <p className="text-sm text-gray-600">Category: {equipment.category}</p>
                                    <p className="text-sm text-gray-600">Price: ${equipment.prize}</p>
                                    <p className="text-sm text-gray-600">Stock: {equipment.stack}</p>
                                    <div className="mt-4 flex justify-between">
                                        <Link to={`/updateEquipment/${equipment._id}`} className="btn btn-primary btn-sm">
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(equipment._id)}
                                            className="btn btn-error btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </Fade>)
                    }
                    )}
            </div>
        </div>
    );
};

export default MyEquipments;
