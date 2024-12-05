import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">


            <div className="card bg-base-100 w-full max-w-md p-6 shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Your PhotoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>All ready have an account ? Please <NavLink className='text-red-500' to='/login'>Login Now</NavLink></p>
            </div>
        </div>
    );
};

export default Register;