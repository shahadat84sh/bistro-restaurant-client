// import { createContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// import axios from "axios";


// export const AuthContext = createContext(null)
// const auth = getAuth(app);
// const Authprovider = ( {children} ) => {

//     const googleProvider = new GoogleAuthProvider()

//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) =>{
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//     const loginUser = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     const logOut = () =>{
//         setLoading(true)
//         return signOut(auth)
//     }
//     const updateUser = (name, photo) =>{
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//           })
//     }
// const googleLogin = () =>{
//     setLoading(true);
//     return signInWithPopup(auth,googleProvider)
// }

//     useEffect(() =>{
//     const unSubscribe = onAuthStateChanged(auth, currentUser=>{
//             setUser(currentUser)
//             console.log('current user', currentUser);
//             // get and set token
//             if(currentUser){
//                 axios.post('https://bisto-boss-server-two.vercel.app/jwt', {email:currentUser.email})
//                 .then(data => {
//                     localStorage.setItem('access-token', data.data)
//                     setLoading(false)
//                 })
//             } 
            
//             else{
//                 localStorage.removeItem('access-token');
//             }
           
//         });
//         return () =>{
//             return unSubscribe();
//         }
//     },[])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         loginUser,
//         googleLogin,
//         logOut,
//         updateUser
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default Authprovider;

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;