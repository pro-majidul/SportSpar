import React, { useContext, useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext);
    const { itemId } = useParams(); // Assuming you pass itemId in the route params
    const [equipment, setEquipment] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (itemId) {
            // Fetch existing equipment details if it's an update
            fetch(`https://your-api-endpoint/equipment/${itemId}`)
                .then((res) => res.json())
                .then((data) => setEquipment(data))
                .catch((err) => console.log(err));
        }
    }, [itemId]);

    const handelAddEquipments = (e) => {
        e.preventDefault();
        const form = e.target;
        const item = form.item.value;
        const category = form.category.value;
        const descriptions = form.descriptions.value;
        const rating = parseInt(form.rating.value);
        const prize = parseInt(form.Prize.value);
        const delivery = form.delivery.value;
        const stock = parseInt(form.stack.value);
        const useremail = form.email.value;
        const username = form.username.value;
        const photo = form.photo.value;

        const info = {
            item,
            category,
            descriptions,
            rating,
            prize,
            delivery,
            stock,
            useremail,
            username,
            photo,
        };

        const method = itemId ? 'PUT' : 'POST';
        const url = itemId
            ? `https://your-api-endpoint/equipment/${itemId}`
            : `https://your-api-endpoint/equipment`;

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId || data.modifiedCount) {
                    alert(itemId ? 'Equipment Updated Successfully!' : 'Equipment Added Successfully!');
                    navigate('/my-equipment-list'); // Navigate to the equipment list page
                }
            })
            .catch((err) => alert('Error adding/updating equipment.'));
    };

    return (
        <div className="p-10">
            <Link to="/" className="flex items-center py-4">
                <FaLongArrowAltLeft />
                Back To Home
            </Link>
            <div className="bg-[#F4F3F0] p-10">
                <h3 className="text-xl md:text-3xl font-bold text-[#374151] text-center">
                    {itemId ? 'Update Equipment' : 'Add Equipment'}
                </h3>

                <form onSubmit={handelAddEquipments}>
                    <div className="md:grid md:grid-cols-2 md:gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input
                                type="text"
                                name="item"
                                placeholder="Enter Item Name"
                                className="input input-bordered"
                                defaultValue={equipment?.item || ''}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Enter Category Name"
                                className="input input-bordered"
                                defaultValue={equipment?.category || ''}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <input
                                name="descriptions"
                                type="text"
                                placeholder="Enter Equipment Descriptions"
                                className="input input-bordered"
                                defaultValue={equipment?.descriptions || ''}
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
                                defaultValue={equipment?.rating || ''}
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
                                defaultValue={equipment?.prize || ''}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Time</span>
                            </label>
                            <input
                                name="delivery"
                                type="text"
                                placeholder="Enter Delivery Time"
                                className="input input-bordered"
                                defaultValue={equipment?.delivery || ''}
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
                                placeholder="Enter Quantity"
                                className="input input-bordered"
                                defaultValue={equipment?.stock || ''}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                defaultValue={equipment?.customization || ''}
                            >
                                <option disabled selected>
                                    Customization
                                </option>
                                <option>Bat With Extra Grip</option>
                                <option>Hit Paper</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                defaultValue={user?.email}
                                readOnly
                                name="email"
                                type="email"
                                placeholder="Enter User Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                readOnly
                                defaultValue={user?.displayName}
                                name="username"
                                type="text"
                                placeholder="Enter User Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-url</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter Photo URL"
                            className="input input-bordered"
                            defaultValue={equipment?.photo || ''}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">
                            {itemId ? 'Update Equipment' : 'Add Equipment'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;

