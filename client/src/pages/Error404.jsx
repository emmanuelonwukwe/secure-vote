import { Link } from "react-router-dom";
import RocketLaunchIcon from "../components/icons/RocketLaunchIcon";
import {useNavigate} from "react-router-dom"
export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="text-center h-[calc(100vh-30px)] flex justify-center items-center">
      <div>
        <h1>
          <span className="font-bold border-r border-solid pr-3">404 </span>
          <span className="ml-3">This page could not be found</span>
        </h1>
        <button className="mt-4" onClick={() => navigate(-1)}>
          <Link  className="text-slate-400 flex">
            <RocketLaunchIcon /> Go back
          </Link>
        </button>
      </div>
    </div>
  );
}
