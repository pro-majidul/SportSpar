import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoader(false)
            }
            else {
                setLoader(false);
                setUser(null)
            }
        })

        return () => {
            onSubscribe()
        }
    }, [])

    const UsersInfo = {
        GoogleLogin,
        CreateUser,
        user,
        setUser,
        loader,
        setLoader,
        userLogOut,
        LoginUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={UsersInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;