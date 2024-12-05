import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            else (
                setUser(null)
            )
        })

        return () => {
            onSubscribe()
        }
    }, [])

    const UsersInfo = {
        GoogleLogin,
        CreateUser,
        user, setUser, loader, setLoader,
        userLogOut
    }

    return (
        <AuthContext.Provider value={UsersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;