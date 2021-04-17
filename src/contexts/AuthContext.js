import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase/config';


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe;

    }, [])

    const value = {
        signup,
        login,
        currentUser,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>

    )
}


export default AuthContextProvider;