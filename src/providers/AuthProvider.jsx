import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const name = 'Abid';           

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubsCribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
        })

        return() =>{
            unSubsCribe();
        }

    },[])


    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged in');
    //         setUser(null);
    //     }
    // })


    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser
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