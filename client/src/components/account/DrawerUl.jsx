import { Link, useNavigate } from "react-router-dom";
import SigninIcon from "../icons/SigninIcon";
import InboxIcon from "../icons/InboxIcon";
import MoonIcon from "../icons/MoonIcon";
import DashboardIcon from "../icons/DashboardIcon";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/AuthContext";
import ChatBarIcon from "../icons/ChatBarIcon";
import CheckBadgeIcon from "../icons/CheckBadgeIcon";
import ChatBubbleLeft from "../icons/ChatBubbleLeft";

export default function DrawerUl() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <ul className="space-y-2 font-medium">
      <li>
        <Link to="/account/dashboard" className="drawer-link">
          <DashboardIcon />
          <span className="ml-3 text-gray-400">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/services" className="drawer-link">
          <InboxIcon />
          <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">
            Elections
          </span>
          <span className="inline-flex items-center justify-center w-auto h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            3+
          </span>
        </Link>
      </li>
      <li>
        <Link to="/" className="drawer-link">
          <ChatBarIcon />
          <span className="ml-3 text-gray-400">Analytics</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="drawer-link">
          <CheckBadgeIcon />
          <span className="ml-3 text-gray-400">Votes</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="drawer-link">
          <ChatBubbleLeft />
          <span className="ml-3 text-gray-400">Comments</span>
        </Link>
      </li>
      <li>
        <hr className="my-6 border-gray-200 dark:border-gray-700 h-2" />
      </li>
      <li>
        <Link to="#" className="drawer-link" onClick={handleLogout}>
          <SigninIcon />
          <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">
            Logout
          </span>
        </Link>
      </li>
      <li>
        <Link to="#" className="drawer-link" onClick={toggleDarkMode}>
          <MoonIcon />
          <span className="flex-1 ml-3 whitespace-nowrap text-gray-400">
            Dark mode
          </span>
          <span className="inline-flex items-center justify-center w-auto h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode ? "checked" : ""}
                readOnly
              />
              <div className="w-6 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </span>
        </Link>
      </li>
    </ul>
  );
}
