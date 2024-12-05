import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {CreateUser}=useContext(AuthContext)


    const handelUserCreate =e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const userInfo ={
            name, email,photo
        }

        CreateUser(email , password)
        .then(res =>{
            console.log(res.user);
        }).catch(error =>{
            console.log(error.message);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">


            <div className="card bg-base-100 w-full max-w-md p-6 shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handelUserCreate} className="card-body">
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        
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