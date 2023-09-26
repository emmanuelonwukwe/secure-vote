import { useAuth } from "../../contexts/AuthContext";
import SortIcon from "../../components/icons/SortIcon";
import LeftSide from "../../components/account/LeftSide";
import axiosRequest from "../../requests/axios-request";
import SnackBar from "../../components/alerts/SnackBar";
import ProgressIndicator from "../../components/ProgressIndicator";
import { useState } from "react";
import useMessage from "../../hooks/useMessage";

export default function ElectionSpace() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ visibility: "public" });
  const { message, setMessage, openSnackBar, type, setType } = useMessage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  // The function that toggles visibility
  const toggleVisibility = (e) => {
    const visibility = e.target.value;
    if (visibility == "public") {
        setIsPublic(true);
        setFormData((oldData) => ({...oldData, "voting_requirements":null}))
    } else {
        setIsPublic(false);
    }
  }

  // This adds updates the formData to add the input field
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      const token = localStorage.getItem("jwt_token");
      // Send the request to the server
      const response = await axiosRequest.post("/create-election-space", formData, {
        headers: {
          "token": token
        }
      });

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
    <div className="grid grid-cols-4 gap-6 mx-3">
      <div className="col-span-4 sm:col-span-2 md:col-span-1">
        <LeftSide />
      </div>
      <div className="col-span-4 sm:col-span-2 md:col-span-3">
        <div className="flex gap-2 mb-8">
          <input
            className="py-4 w-full px-4 rounded-full"
            placeholder="Search here..."
          />
          <span className="text-center">
            <img
              src="/images/user-icon.jpg"
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <i>{user.role}</i>
          </span>
        </div>
        <div className="flex gap-5 mb-8">
          <img src="/images/vector9.svg" className="bg-dark-blue w-8 h-8" />
          <span className="font-bold text-2xl">Election Space</span>
        </div>
        <div className="sm:max-h-[75vh] sm:overflow-y-auto">
          <div className="flex flex-wrap gap-5 justify-around items-center">
            {/** The form */}
            {isProcessing && <ProgressIndicator />}
            <SnackBar message={message} type={type} />
            <div className="border p-3 mt-3 rounded-2xl">
              <form method="POST" onSubmit={handleSignUpSubmit}>
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
                        defaultValue=""
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
                        onChange={(e) =>{handleInputChange(e); toggleVisibility(e);}}
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
                    defaultValue=""
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
                    defaultValue=""
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
                      defaultValue=""
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
                    Create Election
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
            <table className="w-full text-center">
              <thead className="bg-black text-white">
                <tr>
                  <th>Reference</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-green-500 font-bold">Refeoohsiijsu</td>
                  <td>Vote1</td>
                  <td>The best votes</td>
                  <td>23-01-2023 01:02:56</td>
                  <td>Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
