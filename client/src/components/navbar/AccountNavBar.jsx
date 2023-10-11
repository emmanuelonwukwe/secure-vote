/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import useDrawerHelper from "../../hooks/useDrawerHelper";
import SigninIcon from "../icons/SigninIcon";
import AccountMobileDrawer from "./drawers/AccountMobileDrawer";
import { useAuth } from "../../contexts/AuthContext";

export default function AccountNavbar() {
  const { openDrawer } = useDrawerHelper();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <>
      <AccountMobileDrawer />
      {/* Header */}
      <header>
        {/* navbar and menu */}
        <nav className="shadow mx-auto rounded-sm md:rounded-sm bg-dark-blue md:w-[100vw] mb-5 md:mb-7">
          <div className="flex justify-between items-center py-1 px-10 container mx-auto">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-tr to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                <span className="text-softgreen text-3xl">S</span>
                <span className="text-white text-3xl">ecure</span>
                <span className="text-softgreen text-3xl">V</span>
                <span className="text-white text-3xl">ote</span>
              </h1>
            </div>
            <div>
              <div className="hover:cursor-pointer sm:hidden" onClick={openDrawer}>
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
              </div>
              <div className="flex items-center">
                <ul className="sm:flex space-x-4 hidden items-center">
                  <li>
                    <NavLink to="/account/dashboard" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/account/elections" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Elections
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/account/analytics" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Analytics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/accounts/my-votes" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      My votes
                    </NavLink>
                  </li>
                </ul>
                <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <h1 className="text-gray-400 font-bold bg-red-300 pt-1 md:text-sm hover:cursor-pointer px-2 rounded hover:bg-softgreen">
                    <NavLink onClick={handleLogout} to="/login"className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "inline-flex"
                    }><SigninIcon />&nbsp;Logout</NavLink>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
