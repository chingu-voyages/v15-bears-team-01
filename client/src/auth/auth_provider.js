import React, { useReducer, useEffect } from "react";
import AuthContext from "../utils/auth_context";
import { authReducer, initialState } from "../store/reducers/auth_reducer";
import { saveUserAction, Logout } from "../store/actions/actions";
import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN
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
