import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const name = 'Tanvir                                                                                                                          '

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        name,
        createUser
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