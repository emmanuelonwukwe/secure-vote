import axiosRequest from "../../requests/axios-request";
import SnackBar from "../../components/alerts/SnackBar";
import ProgressIndicator from "../../components/ProgressIndicator";
import { useCallback, useEffect, useState } from "react";
import useMessage from "../../hooks/useMessage";
import AccountSkeleton from "../../components/account/AccountSkeleton";
import { useParams } from "react-router-dom";
import FingerPrintIcon from "../../components/icons/FingerPrintIcon";
import { BACKEND_SITE } from "../../config/app";

export default function CastVote() {
  const { message, setMessage, openSnackBar, type, setType } = useMessage();
  const [isProcessing] = useState(false);
  const { electionId } = useParams();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  // This function gets the candidates of this election id
  const fetchCandidates = useCallback(async () => {
    const token = localStorage.getItem("jwt_token");
    try {
      // Send the request to the server
      const response = await axiosRequest.get(
        `elections/${electionId}/candidates`,
        {
          headers: {
            token: token,
          },
        }
      );

      // Set candidates state
      setCandidates(response.data.candidates);
    } catch (error) {
      //console.log("Unable to fetch my elections")
    }
  }, [electionId]);

  // This should be from manifest table for this election id
  const manifestBank = [
    {
      user: "peterobi@gmail.com",
      manifesto:
        "I am going to build the road, produce electricity, give scholarship, pay your bills",
    },
    {
      user: "tinubu@gmail.com",
      manifesto:
        "Fuel price will increase and I will remove fuel subsidy and other bereaucratic processes associated with fuel.",
    },
  ];

  // This function reads the manifestos of a particular person from
  const readManifesto = useCallback((userEmail) => {
    let manifest = manifestBank.find(
      (manifesto) => manifesto.user == userEmail
    );

    return manifest?.manifesto;
  }, []);

  // This function handles the
  const handleCastVote = async (supported_candidate_id) => {
    const token = localStorage.getItem("jwt_token");
    const data = { supported_candidate_id, election_id: electionId, token };

    try {
      const response = await axiosRequest.post("/votes/create", data, {
        headers: {
          token,
        },
      });

      // Fetch the candidates
      await fetchCandidates();

      // Show success message
      setType("success");
      setMessage(response.data.message);
      openSnackBar();
    } catch (xhr) {
      setType("failed");
      setMessage(xhr.response.data.message);
      openSnackBar();
    }
    
  };

  return (
    <AccountSkeleton pageName="Cast Vote">
      {isProcessing && <ProgressIndicator />}
      <SnackBar message={message} type={type} />
      <div className="sm:max-h-[75vh] sm:overflow-y-auto">
        <div className="overflow-auto mt-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
            {candidates.map((candidate, i) => (
              <div
                key={candidate.id + i}
                className="max-w-sm bg-green-600 min-h-[100px] p-2 rounded-xl text-white"
              >
                <span className="text-green-500 font-bold">
                  ELECTIONID-{electionId}
                </span>
                <p className="mb-3">
                  <img
                    src={
                      candidate.profile_image
                        ? `${BACKEND_SITE}/uploads/profile-photos/${candidate.profile_image}`
                        : "/images/user-icon.jpg"
                    }
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="m-2 inline-block">
                    {candidate.first_name + " " + candidate.last_name}
                  </span>
                </p>
                <hr />
                <p className="mb-4">
                  Manifesto: {readManifesto(candidate.email)}
                </p>
                <span>Votes: {candidate.vote_count ?? 0}</span>
                <p>{candidate.date_created}</p>
                <span className="inline-block mt-4 mr-2">
                  <button
                    onClick={() => handleCastVote(candidate.id)}
                    className="btn btn-success"
                  >
                    <FingerPrintIcon />
                    Vote once
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
