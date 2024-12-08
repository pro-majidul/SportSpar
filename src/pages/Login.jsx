import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { GoogleLogin, LoginUser, setUser } = useContext(AuthContext);
    const location = useLocation()
    const nevigate = useNavigate();
    const handelGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result.user);
                const name = result.user?.displayName;
                const email = result.user?.email;
                const photo = result.user?.photoURL;
                const Userinfo = { name, email, photo }
                console.log(Userinfo);

                fetch(`http://localhost:5000/user/${email}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(Userinfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('user login success')
                        console.log(data);


                    })
                setUser(result.user)
                nevigate(location.state ? location.state : '/')
            })
            .catch(error => { console.log(error.code); })
    }

    const handelUserLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email, password)
            .then(result => {
                toast.success("User Login Success ")
                setUser(result.user)
                form.reset()
                nevigate(location.state ? location.state : '/')
            }).catch(error => {
                toast.error(`${error.code}`)
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">


            <div className="card bg-base-100 w-full max-w-md p-6 shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handelUserLogin} className="card-body">
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
                    <button onClick={handelGoogleLogin} className='btn btn-primary'> <FaGoogle size={24} />
                        Login With Google</button>
                </div>

                <p>Don't have an account ? Please <NavLink className='text-red-500' to='/register'>Register Now</NavLink></p>
            </div>
        </div>
    );
};

export default Login;