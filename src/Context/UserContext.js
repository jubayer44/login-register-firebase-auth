import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Hook/fireBaseConfig';



const auth = getAuth(app)
export const AuthContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return () => {
            unsubscribe()
        }
    },[])
    
    const authInfo = {user, createUser, signIn, googleSignIn, logOut, loading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default UserContext;