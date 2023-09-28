import { Outlet } from "react-router-dom";
import MainNavbar from "../components/navbar/MainNavbar";
import MainFooter from "../components/footer/MainFooter";
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigation } from "react-router-dom";

export default function MainLayout() {
    const navigation = useNavigation();
    const [isSpinning, setIsSpinning] = useState(false);

    setTimeout(() => {
        setIsSpinning(false);
    }, 2000);

    return (
        <React.Fragment>
            <MainNavbar />
            {isSpinning && <Spinner />}
            {navigation.state === "loading" && <Spinner />}
            <div className="outlet-area">
                <Outlet />
            </div>
            <MainFooter />
        </React.Fragment>
    )
}
