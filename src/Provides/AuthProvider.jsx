import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider();


  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);

  }
  const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

useEffect(() =>{
  const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    console.log('current user', currentUser)
   if(currentUser){
    axios.post('http://localhost:5000/jwt', {email: currentUser.email})
    .then(data =>{
      console.log(data.data.token)
      localStorage.setItem('access token', data.data.token)
    })
   }
   else{
    localStorage.removeItem('access token')
   }
    setLoading(false);
  })
  return () =>{
    return unSubscribe();
  }
}, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
