/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import MainMobileDrawer from "./drawers/MainMobileDrawer";
import useDrawerHelper from "../../hooks/useDrawerHelper";

export default function MainNavbar() {
  const { openDrawer } = useDrawerHelper();

  return (
    <>
      <MainMobileDrawer />
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
                    <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reviews" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>
                      Support
                    </NavLink>
                  </li>
                </ul>
                <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <h1 className="md:text-sm font-bold py-2 hover:cursor-pointer hover:text-indigo-600">
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : "nav-bar-link"
                    }>Sign In</NavLink>
                  </h1>
                  <h1 className="text-primary bg-white py-1 md:text-sm hover:cursor-pointer px-4 rounded hover:bg-softgreen">
                    <NavLink to="/register"className={({ isActive, isPending }) =>
                      isActive ? "text-green-600" : ""
                    }>Get Started</NavLink>
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
