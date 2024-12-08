import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { CreateUser, userLogOut,setUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()


    const handelUserCreate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast.error('password must be 6 charecters')
        }
        const lowerCaseLetters = /[a-z]/g;
        const upperCaseLetters = /[A-Z]/g;
        if (!password.match(lowerCaseLetters)) {
            return toast.error('password must be an lowerCase Letter')
        }
        if (!password.match(upperCaseLetters)) {
            return toast.error('password must be an UpperCase Letter')
        }


        CreateUser(email, password)
            .then(res => {
                // setUser(res.user);
                updateUserProfile(name, photo)
                    .then(result => {
                        console.log(result);
                    }).catch(error => {
                        console.log(error.message);
                    })
                console.log(res.user);


                const userInfo = { email, photo, name }
                fetch('https://equi-sports-server-side-omega.vercel.app/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('user Register success')
                        console.log(data);
                        setUser(data)
                        navigate('/login')
                        userLogOut()
                        .then(result =>setUser(result.user))
                        .catch(error=>{
                            console.log(error);
                        })
                        
                    })

               
            }).catch(error => {
                console.log(error.message);
                toast.error(`${error.code}`)
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