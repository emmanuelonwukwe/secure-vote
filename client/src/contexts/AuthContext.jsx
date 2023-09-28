/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axiosRequest from "../requests/axios-request";
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

    // This verifies the token on the localstorage
    const fetchTokenUser = async () => {
      // Check if the theme is not set
      if (!localStorage.getItem("jwt_token")) {
        logout();
        throw new Error("Token not set on the user device");
      } else {
        try {
          const token = localStorage.getItem("jwt_token");
          const response = await axiosRequest.get("/verify-token", {
            headers: {
              "token": token
            }
          });

          const payload = response.data.payload;
          const user = payload.data;
          //const expirySec = payload.exp;
          //const currentTimeInSeconds = Math.floor(Date.now() / 1000);
          // const diff = expirySec - currentTimeInSeconds;

          if (!user || Object.keys(user).length < 1) {
            throw new Error("Invalid token payload");
          }

          login(user);
        } catch (error) {
          throw new Error("Unable to verify token");
        }
      }
    };

    // This function logs the user in as the authenticated user
    const login = (userData) => {
      setUser(userData);
    }


  // Add event listener for logout functionality
  const logout = () => {
    localStorage.removeItem("jwt_token");
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, fetchTokenUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// This hook returns the returned values from context api for the auth contenxt
export function useAuth(){
  return useContext(AuthContext);
}
