import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigation } from "react-router-dom";
import AccountNavbar from "../components/navbar/AccountNavBar";
import AccountFooter from "../components/footer/AccounyFooter";
import { useAuth } from "../contexts/AuthContext";

export default function AccountLayout() {
  const navigation = useNavigation();
  const [isSpinning, setIsSpinning] = useState(false);
  const { fetchTokenUser, logout } = useAuth();
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {

    // This function fetches and set the user with the token
    const fetchAndSetUser = async () => {
      try {
        await fetchTokenUser();
      } catch (error) {
        setIsAuth(false);
        logout();
      }
    };

    fetchAndSetUser();
  }, []);

  setTimeout(() => {
    setIsSpinning(false);
  }, 2000);

  return isAuth ? (
    <React.Fragment>
      <AccountNavbar />
      {isSpinning && <Spinner />}
      {navigation.state === "loading" && <Spinner />}
      <div className="outlet-area">
        <Outlet />
      </div>
      <AccountFooter />
    </React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
}
