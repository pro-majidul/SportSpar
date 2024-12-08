import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
   

    const { user, loader } = useContext(AuthContext);
    const location = useLocation()

    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (!user) {
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }

    return  children 
};

export default Private;