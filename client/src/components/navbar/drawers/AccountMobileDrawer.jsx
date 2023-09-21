import { Link } from "react-router-dom";
import CancelIcon from "../../icons/CancelIcon";
import HomeIcon from "../../icons/HomeIcon";
import InboxIcon from "../../icons/InboxIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import SigninIcon from "../../icons/SigninIcon";
import SignupIcon from "../../icons/SignupIcon";
import RocketLaunchIcon from "../../icons/RocketLaunchIcon";
import ChatBubbleIcon from "../../icons/ChatBubbleIcon";
import SortIcon from "../../icons/SortIcon";
import CaretDownIcon from "../../icons/CaretDownIcon";

export default function AccountMobileDrawer() {
  return (
    <>
      {/* drawer component */}
      <div
        id="drawer-body-scrolling"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-64 dark:bg-gray-800"
      >
        <h5
          id="drawer-body-scrolling-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <i className="text-2xl font-bold bg-gradient-to-tr to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
            <span className="text-softgreen text-3xl">S</span>
            <span className="text-primary text-xl">ecure</span>
            <span className="text-softgreen text-xl">V</span>
            <span className="text-primary text-xl">ote</span>
          </i>
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-body-scrolling"
          aria-controls="drawer-body-scrolling"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CancelIcon />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeIcon />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MapPinIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  us
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <InboxIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Services</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3+
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RocketLaunchIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ChatBubbleIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Support</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SigninIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SignupIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <SortIcon />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  E-commerce
                </span>
                <CaretDownIcon />
              </button>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
