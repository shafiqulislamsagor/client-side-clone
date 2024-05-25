import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../../firebase.config";
import axios from "axios";

export const ContextAll = createContext(null)

const ContextApi = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)


    const UserCreate = async (email, password) => {
        setLoading(false)
        return await createUserWithEmailAndPassword(Auth, email, password)
    }

    const UserLogin = async (email, password) => {
        setLoading(false)
        return await signInWithEmailAndPassword(Auth, email, password)
    }

    const UserUpdate = async (name, photo) => {
        setLoading(false)
        return await updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(false)
        return signInWithPopup(Auth, provider)
    }

    const UserLogout = async () => {
        setLoading(false)
        await axios(`${import.meta.env.VITE_API_URL}/logout`, {
            withCredentials: true,
        })
        return signOut(Auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            setLoading(true)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const value = { user, loading,setUser , setLoading , UserCreate, UserLogin, UserUpdate, googleLogin, UserLogout }
    return (
        <ContextAll.Provider value={value}>{children}</ContextAll.Provider>
    );
};

export default ContextApi;