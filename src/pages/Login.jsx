import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">


            <div className="card bg-base-100 w-full max-w-md p-6 shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center my-3'>or</p>
                <div className='flex items-center my-3 w-full justify-center'>
                    <button className='btn btn-primary'>Login With Google</button>
                </div>
                
                <p>Don't have an account ? Please <NavLink className='text-red-500' to='/register'>Register Now</NavLink></p>
            </div>
        </div>
    );
};

export default Login;