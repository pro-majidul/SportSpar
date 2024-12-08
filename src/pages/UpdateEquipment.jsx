import React, { useContext, useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [equipment, setEquipment] = useState(null);
    const [deliveryDate, setDeliveryDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setEquipment(data);
                setDeliveryDate(new Date(data.delivery || new Date()));
            })
            .catch((err) => console.error(err));

    }, [id]);

    console.log(equipment);

    // const handleUpdateEquipment = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const item = form.item.value;
    //     const category = form.category.value;
    //     const descriptions = form.descriptions.value;
    //     const rating = parseFloat(form.rating.value);
    //     const prize = parseFloat(form.Prize.value);
    //     const delivery = deliveryDate.toISOString().split('T')[0]; // Format date as yyyy-MM-dd
    //     const stock = parseInt(form.stack.value);
    //     const photo = form.photo.value;
    //     const customization = form.customization.value;

    //     const updatedInfo = {
    //         item,
    //         category,
    //         descriptions,
    //         rating,
    //         prize,
    //         delivery,
    //         stock,
    //         useremail: user.email,
    //         username: user.displayName,
    //         photo,
    //         customization,
    //     };

    //     fetch(`http://localhost:5000/product/${id}`, {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(updatedInfo),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 alert('Equipment Updated Successfully!');
    //                 navigate('/myEquipment');
    //             } else {
    //                 alert('No changes were made.');
    //             }
    //         })
    //         .catch((err) => alert('Failed to update equipment.'));
    // };

    // onSubmit={handleUpdateEquipment}

    if (!equipment) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div className="p-10">
            <Link to="/" className="flex items-center py-4">
                <FaLongArrowAltLeft /> Back To Home
            </Link>
            <div className="bg-[#F4F3F0] p-10">
                <h3 className="text-xl md:text-3xl font-bold text-[#374151] text-center">
                    Update Equipment
                </h3>
                <form >
                    <div className="md:grid md:grid-cols-2 md:gap-10">
                        {equipment?.item &&
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="item"
                                    placeholder="Enter Item Name"
                                    className="input input-bordered"
                                    defaultValue={equipment?.item}
                                    required
                                />
                            </div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                name="category"
                                className="select select-bordered w-full"
                                defaultValue={equipment.category}
                                required
                            >
                                <option value="Bat">Bat</option>
                                <option value="Ball">Ball</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Badminton">Badminton</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <input
                                name="descriptions"
                                type="text"
                                placeholder="Enter Equipment Description"
                                className="input input-bordered"
                                defaultValue={equipment.descriptions}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                name="rating"
                                type="text"
                                placeholder="Enter Rating"
                                className="input input-bordered"
                                defaultValue={equipment.rating}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Prize</span>
                            </label>
                            <input
                                name="Prize"
                                type="text"
                                placeholder="Enter Prize"
                                className="input input-bordered"
                                defaultValue={equipment.prize}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <DatePicker
                                selected={deliveryDate}
                                onChange={(date) => setDeliveryDate(date)}
                                className="input input-bordered w-full"
                                placeholderText="Select Delivery Date"
                                dateFormat="yyyy-MM-dd"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input
                                name="stack"
                                type="text"
                                placeholder="Enter Stock Quantity"
                                className="input input-bordered"
                                defaultValue={equipment.stock}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <select
                                name="customization"
                                className="select select-bordered w-full"
                                defaultValue={equipment.customization}
                                required
                            >
                                <option value="Bat With Extra Grip">Bat With Extra Grip</option>
                                <option value="Hit Paper">Hit Paper</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="Size 44">Size 44</option>
                                <option value="Size 43">Size 43</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly name="email" type="email" placeholder="Enter User Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input readOnly
                                defaultValue={user?.displayName} name="username" type="text" placeholder="Enter User Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter Photo URL"
                            className="input input-bordered"
                            defaultValue={equipment.photo}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Update Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;
