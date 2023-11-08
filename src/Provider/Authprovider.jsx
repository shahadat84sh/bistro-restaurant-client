import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authprovider = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
        });
        return () =>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default Authprovider;