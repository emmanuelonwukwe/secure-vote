import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <>
      {/* Header */}
      <header>
        {/* navbar and menu */}
        <nav className="shadow mx-auto rounded-sm md:rounded-lg bg-white md:w-[90vw] mb-5 md:mb-7">
          <div className="flex justify-between items-center py-6 px-10 container mx-auto">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-tr to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                <span className="text-softgreen text-3xl">S</span>
                <span className="text-primary text-3xl">ecure</span>
                <span className="text-softgreen text-3xl">V</span>
                <span className="text-primary text-3xl">ote</span>
              </h1>
            </div>
            <div>
              <div className="hover:cursor-pointer sm:hidden">
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
              </div>
              <div className="flex items-center">
                <ul className="sm:flex space-x-4 hidden items-center">
                  <li>
                    <Link to="/" className="nav-bar-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-bar-link ">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="nav-bar-link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="nav-bar-link">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-bar-link">
                      Support
                    </Link>
                  </li>
                </ul>
                <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <h1 className="text-text-gray-600 md:text-sm font-bold py-2 hover:cursor-pointer hover:text-indigo-600">
                    <Link to="/login">Sign In</Link>
                  </h1>
                  <h1 className="text-white bg-primary py-3 md:text-sm hover:cursor-pointer px-4 rounded hover:bg-softgreen">
                    <Link to="/register">Get Started</Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
