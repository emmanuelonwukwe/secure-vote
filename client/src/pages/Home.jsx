import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="mb-10">
        <div className="mx-auto md:w-[90vw] sm:grid grid-cols-12 grid-rows-2 md:grid-rows-1 px-4 py-1 sm:gap-4">
          <div className="h-96 col-span-5 rounded-md">
            <div className="mt-4">
              <div>
                <img src="/images/ellipse-11.svg" className="ml-10 mb-3" />
                <h2 className="text-4xl font-bold font-serif">Trusted Transparency</h2>
              </div>
              <p className="mt-4 capitalize font-semibold text-gray-500 tracking-wider leading-7">
                Discover leaders that align with your core values. Making it
                easier to vote with confidence for the people and issues that
                matter to you
              </p>
              <div className="mt-8">
              <Link
                to="/register"
                className="inline-block text-sm capitalize text-white bg-primary py-4 px-4 rounded font-semibold hover:bg-softgreen"
              >
                get started
              </Link>
              <img src="/images/video.svg" className="inline-block mt-5 ml-5"/>
              </div>
              
            </div>
          </div>
          <div className="h-96 col-span-7">
            <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
              <input
                type="text"
                placeholder="seach"
                className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-white  rounded-md">
              <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
                Service
              </h1>
              <div className="bg-white rounded-md list-none  text-center ">
                <li className="py-3 border-b-2">
                  <a href="#" className="list-none  hover:text-indigo-600">
                    Products
                  </a>
                </li>
                <li className="py-3 border-b-2">
                  <a href="#" className="list-none  hover:text-indigo-600">
                    Models
                  </a>
                </li>
                <li className="py-3 border-b-2">
                  <a href="#" className="list-none  hover:text-indigo-600">
                    Pricing
                  </a>
                </li>
                <li className="py-3 border-b-2">
                  <a href="#" className="list-none  hover:text-indigo-600">
                    Faq
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
