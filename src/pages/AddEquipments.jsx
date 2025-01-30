import React, { useContext, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const AddEquipments = () => {
    const { user } = useContext(AuthContext)
    const [deliveryDate, setDeliveryDate] = useState(new Date());


    const handelAddEquipments = (e) => {
        e.preventDefault();

        const form = e.target;
        const item = form.item.value;
        const category = form.category.value;
        const descriptions = form.descriptions.value;
        const rating = parseFloat(form.rating.value);
        const prize = parseInt(form.Prize.value);
        const delivary = deliveryDate ? deliveryDate.toISOString().split("T")[0] : null;
        const customization = form.customization.value;
        const stack = parseInt(form.stack.value);
        const useremail = form.email.value;
        const username = form.username.value;
        const photo = form.photo.value;
        const info = { item, category, descriptions, rating, customization, prize, delivary, stack, useremail, username, photo };
        console.log(info);


        fetch('https://equi-sports-server-side-omega.vercel.app/product', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        }).then(res => res.json()).then(data => {
            console.log(data);
            toast.success('Equipment Added SuccessFull')
        })

    }

    return (
        <div className="pt-28 md:pt-20 p-4 w-full max-w-7xl mx-auto">
            <Link to='/' className="flex items-center btn w-44 my-4 py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <div className="bg-gray-900 p-2 md:p-10">
                <h3 className="text-xl md:text-3xl font-bold my-4 text-white text-center">Add Equipments</h3>

                <form onSubmit={handelAddEquipments}>
                    <div className="md:grid md:grid-cols-2 py-10 md:gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Item Name</span>
                            </label>
                            <input type="text" name="item" placeholder="Enter Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full" required>
                                <option value="" disabled selected>
                                    Select Category
                                </option>
                                <option value="Bat">Bat</option>
                                <option value="Ball">Ball</option>
                                <option value="jersy">Jersy</option>
                                <option value="shoes">Shoes</option>
                                <option value="batminton">Batminton</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Descriptions</span>
                            </label>
                            <input name="descriptions" type="text" placeholder="Enter Equipments Descriptions" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <input name="rating" type="text" placeholder="Enter Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Prize</span>
                            </label>
                            <input name="Prize" type="text" placeholder="Enter Prize" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Processing Time</span>
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
                                <span className="label-text text-white">Stock Status </span>
                            </label>
                            <input name="stack" type="text" placeholder="Enter Available Product Quentity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Customization</span>
                            </label>
                            <select name="customization" className="select select-bordered w-full" required>
                                <option value="" disabled selected>
                                    Select Customization
                                </option>
                                <option value="Bat With Extra Grip">Bat With Extra Grip</option>
                                <option value="Hit Paper">Hit Paper</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="size 44">Size 44</option>
                                <option value="size 43">Size 43</option>
                                <option value="size 42">Size 42</option>
                                <option value="Extra Grip">Extra Grip</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">User Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly name="email" type="email" placeholder="Enter User Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">User Name</span>
                            </label>
                            <input readOnly
                                defaultValue={user?.displayName} name="username" type="text" placeholder="Enter User Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo-url</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Add Equipments</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipments;
