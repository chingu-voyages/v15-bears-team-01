import React, { useReducer, useEffect } from "react";
import AuthContext from "../utils/auth_context";
import { authReducer, initialState } from "../store/reducers/auth_reducer";
import { saveUserAction, Logout } from "../store/actions/actions";
import firebase from "firebase/app";
import "firebase/auth";
import { FIREBASE_API_KEY, FIREBASE_DOMAIN } from "../keys";

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_DOMAIN
// };

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_DOMAIN
};

firebase.initializeApp(config);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }, []); // eslint-disable-line

  //logs in user and saves to global store
  const saveUser = user => {
    dispatch(saveUserAction(user));
  };

  const LogOut = () => {
    dispatch(Logout);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          state,
          saveUser,
          LogOut,
          firebase
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
