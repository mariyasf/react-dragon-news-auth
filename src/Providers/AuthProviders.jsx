import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    // New User add
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Logout
    const logOut = () => {
        return signOut(auth);
    }

    // Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changed', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }

    }, [])

    

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;