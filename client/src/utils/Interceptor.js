import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import React, { useState, useEffect, useContext } from "react";

const Interceptor = () => {
  const authContext = useContext(AuthContext);
  const { authState, setAuthState, isAuthenticated } = authContext;
  axios.interceptors.request.use(
    (request) => {
      request.headers["Authorization"] = `Bearer ${authState.token}`;
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return <></>;
};
export default Interceptor;
