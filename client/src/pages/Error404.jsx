import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  const jwtToken = useMemo(() => localStorage.getItem("jwt_token"), []);

  return (
    <div className="text-center h-[calc(100vh-30px)] flex justify-center items-center">
      <div>
        <h1>
          <span className="font-bold border-r border-solid pr-3">404 </span>
          <span className="ml-3">This page could not be found</span>
        </h1>
        <button className="mt-4">
          <Link to={jwtToken ? "/account" : "/"} className="text-slate-400">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
}
