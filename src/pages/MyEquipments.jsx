
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/product/${user.email}`)
            .then(res => res.json())
            .then(data => setEquipments(data));
    }, [user?.email]);


    if (equipments.length < 1) {
        return <span className="loading loading-bars loading-lg"></span>
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
                fetch(`http://localhost:5000/product/${id}`, {
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
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">My Equipment List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {

                    equipments.length == 0 ? <div className='flex items-center justify-center min-h-[calc(90vh-323px)]'><p className="text-2xl font-bold text-center mb-6">No Data added</p></div> :
                        equipments.map(equipment => (
                            <div key={equipment._id} className="card bg-white shadow-md rounded-lg p-4">
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
                        ))}
            </div>
        </div>
    );
};

export default MyEquipments;
