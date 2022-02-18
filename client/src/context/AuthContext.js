import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const { Provider } = AuthContext;

//Setting del provider del context
const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [authState, setAuthState] = useState({
    token,
    user: user ? JSON.parse(user) : {},
  });

  //setting de la data en local storage
  const setAuthInfo = ({ token, user }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthState({
      //Meto la data actual en un estado que voy a compartir
      token,
      user,
    });
  };

  const logout = () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState();
  };

  //chequea que esté autenticado con token
  const isAuthenticated = () => {
    return authState.token ? true : false;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
