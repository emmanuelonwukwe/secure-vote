import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMessage from "../hooks/useMessage";
import SnackBar from "../components/alerts/SnackBar";
import axiosRequest from "../requests/axios-request";
import ProgressIndicator from "../components/ProgressIndicator";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({});
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

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      // Send the request to the server
      const response = await axiosRequest.post("/login", formData);

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
          <span className="page-title-first">Log</span> In
        </h1>
        {isProcessing && <ProgressIndicator />}
        <SnackBar message={message} type={type} />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center">
          <div className="border p-3 mt-3 rounded-2xl">
            <form method="POST" onSubmit={handleLoginSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={formData.email}
                  type="email"
                  name="email"
                  id="guest"
                  placeholder="example@email.com"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Password
                </label>
                <input
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="guest"
                  placeholder="************"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      id="radioButton1"
                      className="h-3 w-3"
                    />
                    <label
                      htmlFor="radioButton1"
                      className="pl-3 text-xs font-medium text-[#07074D]"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor="radioButton2"
                      className="pl-3 text-xs font-medium text-[#07074D]"
                    >
                      <Link to="/forgot-password" className="text-blue-500">
                        Forgot password
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
              <div className="mt-5">
                <p>
                  <span className="mr-3 text-sm">Don’t have an account?</span>{" "}
                  <Link to="/register" className="text-blue-500">
                    {" "}
                    Sign Up
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
