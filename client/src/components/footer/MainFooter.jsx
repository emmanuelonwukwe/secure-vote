import { Link } from "react-router-dom";

export default function MainFooter() {
  let date = new Date().getFullYear();

  return (
    <>
      {/* component */}
      <footer className="bg-dark-blue font-sans dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-5">
            <div className="col-span-2">
              <div className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                <h1 className="text-2xl font-bold bg-gradient-to-tr to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                  <span className="text-softgreen text-3xl">S</span>
                  <span className="text-white text-3xl">ecure</span>
                  <span className="text-softgreen text-3xl">V</span>
                  <span className="text-white text-3xl">ote</span>
                </h1>
              </div>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0">
                <p className="text-white text-sm">
                  This is a big one and we consider it one of the most <br />
                important electronic app.
                </p>
                <div className="pt-5">
                  <img  src="/images/fb-icon.svg"/>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white dark:text-white">
                Quick Link
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/">Home</Link>
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/about">About</Link>
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/connect">Connect</Link>
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white dark:text-white">
                Company
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/about">About</Link>
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/contact">Contact</Link>
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white dark:text-white">
                Information
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="capitalize text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/">Privacy Policy</Link>
                </p>
                <p className="capitalize text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/">Terms & condition</Link>
                </p>
                <p className="capitalize text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  <Link to="/about">FAQ</Link>
                </p>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
          <div className="text-white flex flex-wrap items-center justify-between">
            <p>Copyright &copy; {date} SecureVote</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
