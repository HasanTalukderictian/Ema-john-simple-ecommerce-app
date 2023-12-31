import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase.auth/firebase.init';

export const AuthContext  = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
    const [user, setUser] =  useState(null); 
     
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
  

    }
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signIn, 
        logOut
    };
   
    //observer user and state

    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
          })
          return () =>{
            return unsubscribe;
          }
    },[]);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;