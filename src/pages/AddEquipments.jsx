import React, { useContext } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const AddEquipments = () => {
    const { user} = useContext(AuthContext)
    
    return (
        <div className=" p-10">
            <Link to='/' className="flex items-center  py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <div className="bg-[#F4F3F0] p-10">
                <h3 className="text-xl md:text-3xl font-bold text-[#374151] text-center">Add Equipments</h3>

                <form  >
                    <div className="md:grid md:grid-cols-2 md:gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name="item" placeholder="Enter Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input name="category" type="text" placeholder="Enter Category Name" className="input input-bordered" required />
                        </div> <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <input name="descriptions" type="text" placeholder="Enter Equipments Descriptions" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name="rating" type="text" placeholder="Enter Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Prize</span>
                            </label>
                            <input name="Prize" type="number" placeholder="Enter Prize" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivary Time</span>
                            </label>
                            <input name="delivary" type="text" placeholder="Enter deleviry time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status </span>
                            </label>
                            <input name="stack" type="text" placeholder="Enter Quentity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization </span>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Customization</option>
                                    <option>Bat With Extra Grip</option>
                                    <option>Hit paper</option>
                                </select>

                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input defaultValue={user.email} readOnly name="email" type="email" placeholder="Enter User Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input readOnly
                             defaultValue={user.displayName} name="username" type="text" placeholder="Enter User Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-url</span>
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
// onSubmit={handelupdateCoffee?}