import axiosRequest from "../../requests/axios-request";
import ProgressIndicator from "../../components/ProgressIndicator";
import { useEffect, useState } from "react";
import UploadIcon from "../../components/icons/UploadIcon";
import AccountSkeleton from "../../components/account/AccountSkeleton";
import RocketLaunchIcon from "../../components/icons/RocketLaunchIcon";
import { Link } from "react-router-dom";

export default function Elections() {
  const [isProcessing] = useState(false);

  const [myElections, setElections] = useState([]);

  useEffect(() => {
    fetchElections();
  }, []);

  // This function gets the election spaces of the user
  const fetchElections = async () => {
    const token = localStorage.getItem("jwt_token");
    try {
      // Send the request to the server
      const response = await axiosRequest.get("/elections/all", {
        headers: {
          token: token,
        },
      });

      // Set my elections state
      setElections(response.data.elections);
    } catch (error) {
      //console.log("Unable to fetch my elections")
    }
  };

  return (
    <AccountSkeleton pageName="Elections">
      {isProcessing && <ProgressIndicator />}
      <div className="sm:max-h-[75vh] sm:overflow-y-auto">
        <div className="overflow-auto mt-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
            {myElections.map((election, i) => (
              <div
                key={election.id + i}
                className="max-w-sm bg-slate-600 min-h-[100px] p-2 rounded-xl text-white"
              >
                <span className="text-green-500 font-bold">
                  SECUREID-{election.id}
                </span>
                <span className="m-2 inline-block">{election.title}</span>
                <p className="mb-4">{election.description}</p>
                <span>status: {election.status}</span>
                <p>{election.date_created}</p>
                <span className="inline-block mt-4 mr-2">
                  <Link  to={`/account/cast-vote/${election.id}`} className="btn btn-success">
                    <RocketLaunchIcon />
                    Join
                  </Link>
                </span>
                <span className="inline-block">
                  <button className="btn btn-primary">
                    <UploadIcon />
                    Requirements
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AccountSkeleton>
  );
}
