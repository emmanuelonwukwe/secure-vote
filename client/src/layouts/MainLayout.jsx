import { Outlet } from "react-router-dom";
import MainNavbar from "../components/navbar/MainNavbar";
import MainFooter from "../components/footer/MainFooter";
import React from "react";

export default function MainLayout() {
    return (
        <React.Fragment>
            <MainNavbar />
            <div className="outlet-area">
                <Outlet />
            </div>
            <MainFooter />
        </React.Fragment>
    )
}
