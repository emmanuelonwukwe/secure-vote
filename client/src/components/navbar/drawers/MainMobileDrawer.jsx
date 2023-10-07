import { Link } from "react-router-dom";
import CancelIcon from "../../icons/CancelIcon";
import HomeIcon from "../../icons/HomeIcon";
import InboxIcon from "../../icons/InboxIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import SigninIcon from "../../icons/SigninIcon";
import SignupIcon from "../../icons/SignupIcon";
import RocketLaunchIcon from "../../icons/RocketLaunchIcon";
import ChatBubbleIcon from "../../icons/ChatBubbleIcon";
import useDrawerHelper from "../../../hooks/useDrawerHelper";

export default function MainMobileDrawer() {
  const { closeDrawer } = useDrawerHelper();

  return (
    <>
      {/* drawer component */}
      <div
        id="drawer"
        className="fixed w-screen h-screen top-0 left-0 hidden bg-transparent z-50"
      >
        <div
          id="drawer-body-scrolling"
          className="absolute top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-primary dark:bg-gray-800"
        >
          <h5
            id="drawer-body-scrolling-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            <i className="text-2xl font-bold bg-gradient-to-tr to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
              <span className="text-softgreen text-3xl">S</span>
              <span className="text-white text-xl">ecure</span>
              <span className="text-softgreen text-xl">V</span>
              <span className="text-white text-xl">ote</span>
            </i>
          </h5>
          <button
          onClick={closeDrawer}
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
                  className="drawer-link"
                >
                  <HomeIcon />
                  <span className="ml-3 text-gray-400">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="drawer-link"
                >
                  <MapPinIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">About</span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    us
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="drawer-link"
                >
                  <InboxIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">
                    Services
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3+
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="drawer-link"
                >
                  <RocketLaunchIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">Reviews</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="drawer-link"
                >
                  <ChatBubbleIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">Support</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="drawer-link"
                >
                  <SigninIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="drawer-link"
                >
                  <SignupIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
