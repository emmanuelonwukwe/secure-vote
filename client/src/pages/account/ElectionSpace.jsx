import SortIcon from "../../components/icons/SortIcon";
import axiosRequest from "../../requests/axios-request";
import SnackBar from "../../components/alerts/SnackBar";
import ProgressIndicator from "../../components/ProgressIndicator";
import { useEffect, useRef, useState } from "react";
import useMessage from "../../hooks/useMessage";
import TrashIcon from "../../components/icons/TrashIcon";
import EditIcon from "../../components/icons/EditIcon";
import AccountSkeleton from "../../components/account/AccountSkeleton";

export default function ElectionSpace() {
  const [formData, setFormData] = useState({
    visibility: "public",
    voting_requirements: null,
  });
  const { message, setMessage, openSnackBar, type, setType } = useMessage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [myElections, setMyElections] = useState([]);
  const [actionIsUpdate, setActionIsUpdate] = useState(false);
  const myFormRef = useRef();

  useEffect(() => {
    fetchElectionSpaces();
  }, []);

  // This function gets the election spaces of the user
  const fetchElectionSpaces = async () => {
    const token = localStorage.getItem("jwt_token");
    try {
      // Send the request to the server
      const response = await axiosRequest.get("/elections/my-spaces", {
        headers: {
          token: token,
        },
      });

      // Set my elections state
      setMyElections(response.data.elections);
    } catch (error) {
      //console.log("Unable to fetch my elections")
    }
  };

  // Toggle update action to set the initial values of the formData
  const startUpdateAction = (startUpdate, electionId) => {
    if (startUpdate) {
      setActionIsUpdate(true);
      // Find the resource you want to edit
      const electionToBeEdited = myElections.filter(
        (election) => election.id == electionId
      )[0];


      // Convert the candidate and the requirements to string
      if (electionToBeEdited.voting_requirements !== null) {
        let requirements = JSON.stringify(electionToBeEdited.voting_requirements);
        requirements = JSON.parse(requirements);
        requirements = requirements.join();
        electionToBeEdited.voting_requirements = requirements;
      }

      let candidates = JSON.stringify(electionToBeEdited.candidates);
      candidates = JSON.parse(candidates);
      candidates = candidates.join();
      electionToBeEdited.candidates = candidates;

      // Set this as the formData
      setFormData(electionToBeEdited);
    } else {
      setActionIsUpdate(false);
      setFormData({
        visibility: "public",
        voting_requirements: null,
      });
    }
  };

  // The function that toggles visibility
  const toggleVisibility = (e) => {
    const visibility = e.target.value;
    if (visibility == "public") {
      setIsPublic(true);
      setFormData((oldData) => ({ ...oldData, voting_requirements: null }));
    } else {
      setIsPublic(false);
    }
  };

  // This adds updates the formData to add the input field
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));
  };

  // This function helps to delete an election space created
  const handleUpdate = async (event, electionId) => {
    event.preventDefault();
    setIsProcessing(true);
    try {
      // Delete the id key
      delete formData.id;

      const token = localStorage.getItem("jwt_token");
      // Send the request to the server
      const response = await axiosRequest.put(
        `/elections/update/${electionId}`, formData,
        {
          headers: {
            token: token,
          },
        }
      );

      await fetchElectionSpaces();
      setIsProcessing(false);
      startUpdateAction(false, electionId);
      myFormRef.current?.reset(); // Reset the form using the ref

      // Show user success message
      setMessage(response.data.message);
      setType("Success");
      openSnackBar();
    } catch (xhr) {
      setIsProcessing(false);

      // Show user error message
      setMessage(xhr.response.data.message);
      setType("failed");
      openSnackBar();
    }
  };

  const handleCreateElectionSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      const token = localStorage.getItem("jwt_token");
      // Send the request to the server
      const response = await axiosRequest.post("/elections/create", formData, {
        headers: {
          token: token,
        },
      });

      await fetchElectionSpaces();
      setIsProcessing(false);

      // Show user success message
      setMessage(response.data.message);
      setType("Success");
      openSnackBar();
    } catch (xhr) {
      setIsProcessing(false);

      // Show user error message
      setMessage(xhr.response.data.message);
      setType("failed");
      openSnackBar();
    }
  };

  // This function helps to delete an election space created
  const handleDelete = async (electionId) => {
    if (!confirm("Are you sure to delete this election")) {
      return;
    }

    setIsProcessing(true);

    try {
      const token = localStorage.getItem("jwt_token");
      // Send the request to the server
      const response = await axiosRequest.delete(
        `/elections/delete/${electionId}`,
        {
          headers: {
            token: token,
          },
        }
      );

      await fetchElectionSpaces();
      setIsProcessing(false);

      // Show user success message
      setMessage(response.data.message);
      setType("Success");
      openSnackBar();
    } catch (xhr) {
      setIsProcessing(false);

      // Show user error message
      setMessage(xhr.response.data.message);
      setType("failed");
      openSnackBar();
    }
  };

  return (
    <AccountSkeleton pageName="Manage Election">
      <div className="sm:max-h-[75vh] sm:overflow-y-auto">
        <div className="flex flex-wrap gap-5 justify-around items-center">
          {/** The form */}
          {isProcessing && <ProgressIndicator />}
          <SnackBar message={message} type={type} />
          <div className="border p-3 mt-3 rounded-2xl">
            <form ref={myFormRef} onSubmit={(e) => { actionIsUpdate ? handleUpdate(e, formData.id) : handleCreateElectionSubmit(e) }}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Election Title
                    </label>
                    <input
                      autoFocus="autofocus"
                      onChange={handleInputChange}
                      defaultValue={formData.title}
                      type="text"
                      name="title"
                      id="fName"
                      placeholder="Election title"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Who can vote?
                    </label>
                    <select
                      onChange={(e) => {
                        handleInputChange(e);
                        toggleVisibility(e);
                      }}
                      defaultValue=""
                      name="visibility"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="public">Anyone</option>
                      <option value="private">Verified voters</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <textarea
                  onChange={handleInputChange}
                  defaultValue={formData.description}
                  type="email"
                  name="description"
                  id="guest"
                  placeholder="Enter the description of this election to help voters understand what it is about."
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Candidates
                </label>
                <textarea
                  onChange={handleInputChange}
                  defaultValue={formData.candidates}
                  type="email"
                  name="candidates"
                  id="guest"
                  placeholder="Enter candidates account emails seperated by commas e.g peterobi@email.com, atiku@gmail.com"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              {!isPublic && (
                <div className="mb-5">
                  <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Requirements
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    defaultValue={formData.voting_requirements}
                    type="email"
                    name="voting_requirements"
                    id="guest"
                    placeholder="Enter the requirements to vote separated with commas e.g I.D card required, birth certificate"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
              )}

              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  {actionIsUpdate ? "Update" : "Create"} Election
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-5 mt-12">
          <SortIcon />
          <span className="font-bold text-2xl">Election Spaces</span>
        </div>
        <div className="overflow-auto mt-4 mb-8">
          <table className="transactions-table w-full text-center">
            <thead className="bg-black text-white">
              <tr>
                <th>Reference</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date&nbsp;Created</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {myElections.map((election, i) => (
                <tr key={i} className="border-b">
                  <td className="text-green-500 font-bold">
                    SECUREID-{election.id}
                  </td>
                  <td>{election.title}</td>
                  <td>{election.description}</td>
                  <td>{election.status}</td>
                  <td>{election.date_created}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(election.id)}
                    >
                      <TrashIcon />
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => startUpdateAction(true, election.id)}
                    >
                      <EditIcon />
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AccountSkeleton>
  );
}
