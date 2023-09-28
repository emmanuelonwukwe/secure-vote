import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosRequest from "../requests/axios-request";
import SnackBar from "../components/alerts/SnackBar";
import useMessage from "../hooks/useMessage";
import ProgressIndicator from "../components/ProgressIndicator";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const [formData, setFormData] = useState({ role: "voter" });
  const { message, setMessage, openSnackBar, type, setType } = useMessage();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

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
      // Send the request to the server
      const response = await axiosRequest.post("/signup", formData);

      // Save the token to the user localStorage
      localStorage.setItem("jwt_token", response.data.token);

      // Login the authenticated user
      login(response.data.user);

      setIsProcessing(false);

      // Show user success message
      setMessage(response.data.message);
      setType("Success");
      openSnackBar();

      // Send the user to the dashboard
      setTimeout(() => {
        navigate("/account/dashboard");
      }, 1000);
    } catch (xhr) {
      setIsProcessing(false);

      // Show user error message
      setMessage(xhr.response.data.message);
      setType("failed");
      openSnackBar();
    }
  };

  return (
    <>
      <section className="overflow-hidden p-5 mb-12">
        <h1 className="page-title">
          <span className="page-title-first">Sign</span> Up
        </h1>
        {isProcessing && <ProgressIndicator />}
        <SnackBar message={message} type={type} />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center">
          <div className="border p-3 mt-3 rounded-2xl">
            <form method="POST" onSubmit={handleSignUpSubmit}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      autoFocus="autofocus"
                      onChange={handleInputChange}
                      defaultValue=""
                      type="text"
                      name="first_name"
                      id="fName"
                      placeholder="First Name"
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
                      Last Name
                    </label>
                    <input
                      onChange={handleInputChange}
                      defaultValue=""
                      type="text"
                      name="last_name"
                      id="lName"
                      placeholder="Last Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  email
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue=""
                  type="email"
                  name="email"
                  id="guest"
                  placeholder="example@mail.com"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone
                    </label>
                    <input
                      onChange={handleInputChange}
                      defaultValue=""
                      type="text"
                      name="phone"
                      id="fName"
                      placeholder="Phone number"
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
                      Role
                    </label>
                    <select
                      onChange={handleInputChange}
                      defaultValue=""
                      name="role"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="voter">Voter</option>
                      <option value="manager">Electoral Manager</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Password
                    </label>
                    <input
                      onChange={handleInputChange}
                      defaultValue=""
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Confirm password
                    </label>
                    <input
                      onChange={handleInputChange}
                      defaultValue=""
                      type="password"
                      name="password_confirmation"
                      placeholder="Re-enter password"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
              <div className="mt-5">
                <p>
                  <span className="mr-3 text-md">Already have an account?</span>{" "}
                  <Link to="/login" className="text-blue-500">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
          <div className="hidden md:block">
            <img src="/images/man-with-briefcase@2x.png" />
          </div>
        </div>
      </section>
    </>
  );
}
