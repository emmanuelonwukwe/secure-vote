import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="overflow-hidden p-5 mb-12">
        <h1 className="page-title">
          <span className="page-title-first">Log</span> In
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center">
          <div className="border p-3 mt-3 rounded-2xl">
            <form method="POST">
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
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
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
              <div className="mt-5">
                <p><span className="mr-3 text-sm">Don’t have an account?</span> <Link to="/register" className="text-blue-500"> Sign Up</Link> </p>
              </div>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/man-with-briefcase@2x.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
