/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axiosRequest from "../requests/axios-request";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // This verifies the token on the localstorage
    const verifyToken = async () => {
      // Check if the theme is not set
      if (!localStorage.getItem("jwt_token")) {
        logout();
      } else {
        try {
          const response = await axiosRequest.get("/verify-token");

          const payload = response.data.payload;
          const user = payload.data;
          //const expirySec = payload.exp;
          //const currentTimeInSeconds = Math.floor(Date.now() / 1000);
          // const diff = expirySec - currentTimeInSeconds;

          
            startSessionTimer();
            setIsAuth(true);
            setUser(user);
          
          window.addEventListener("focus", startSessionTimer);
        } catch (error) {
          console.log("Unable to verify token");
        }
      }
    };

    verifyToken();
  }, []);

  // Add event listener for logout functionality
  const logout = () => {
    localStorage.removeItem("jwt_token");
    setIsAuth(false);
    setUser({});
  };

  // Implement session timeout
  const startSessionTimer = () => {
    setTimeout(() => {
      logout();
    }, 60000);
  };

  return (
    <AuthContext.Provider value={{ isAuth, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
