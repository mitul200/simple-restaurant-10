import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const PrivetRouter = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLoginUser=(provider)=>{
     return signInWithPopup(auth , provider)
  }

  const githubLoginUser=(provider)=>{
    return signInWithPopup(auth, provider)
  }

  const logingOut=()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser);
    })
    return () => {
      return unsubcribe()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const authInfo = {
    user,
    creatUser,
    singInUser,
    logingOut,
    googleLoginUser,
    githubLoginUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default PrivetRouter;
