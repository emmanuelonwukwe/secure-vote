import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/account/Dashboard";
import AccountLayout from "./layouts/AccountLayout";
import { ThemeContextProvider } from "./contexts/themeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import ElectionSpace from "./pages/account/ElectionSpace";

// Create the router for the pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/account/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/account/election-space",
        element: <ElectionSpace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
