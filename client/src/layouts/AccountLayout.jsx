import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigation } from "react-router-dom";
import AccountNavbar from "../components/navbar/AccountNavBar";
import AccountFooter from "../components/footer/AccounyFooter";

export default function AccountLayout() {
    const navigation = useNavigation();
    const [isSpinning, setIsSpinning] = useState(false);

    setTimeout(() => {
        setIsSpinning(false);
    }, 2000);

    return (
        <React.Fragment>
            <AccountNavbar />
            {isSpinning && <Spinner />}
            {navigation.state === "loading" && <Spinner />}
            <div className="outlet-area">
                <Outlet />
            </div>
            <AccountFooter />
        </React.Fragment>
    )
}