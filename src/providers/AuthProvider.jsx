import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
     

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() =>{
        const unSubsCribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return() =>{
            unSubsCribe();
        }

    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,

    }
    return (
        <AuthContext.Provider value={authInfo} >
            {/* main part who will have access to this context  */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



/**
 * 1. Create context with null as default 
 * 2. Create Provider
 * 3. set a default value with something (authInfo)
 * 4. use the authProvider in the main.jsx
 * 5. access the children inside the authProvider in the main.jsx
 * 7. export authContext
 */