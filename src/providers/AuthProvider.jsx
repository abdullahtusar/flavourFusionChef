import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [loading, setLoading] = useState(null);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitSignIn = () =>{
        setLoader(true);
        return signInWithPopup(auth, gitProvider);
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoader(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [loading])

    const logOut =() =>{
        setLoader(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loader,
        setLoading,
        updateUserProfile,
        createUser,
        signIn,
        googleSignIn,
        gitSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;