/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="mb-10">
        <div className="mx-auto md:w-[90vw] md:grid grid-cols-12 grid-rows-2 md:grid-rows-1 px-4 py-1 sm:gap-4">
          <div className="h-96 col-span-5 rounded-md">
            <div className="mt-4">
              <div>
                <img src="/images/ellipse-11.svg" className="ml-10 mb-3" />
                <h2 className="text-4xl font-bold font-serif">
                  Trusted Transparency
                </h2>
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
                <img
                  src="/images/video.svg"
                  className="inline-block mt-5 ml-5"
                />
              </div>
              <div className="p-3 hidden md:block bg-white rounded-lg w-[80%]">
                <img src="/images/straightquotes-1.svg" />
                <blockquote className="text-gray-200 text-sm mt-3">
                  Voting is the expression of our commitment to ourselves, one
                  another, this country, and this world
                </blockquote>
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
                <img
                  src="/images/video.svg"
                  className="inline-block mt-5 ml-5"
                />
              </div>
              <div className="p-3 hidden md:block bg-white rounded-lg w-[80%]">
                <img src="/images/straightquotes-1.svg" />
                <blockquote className="text-gray-200 text-sm mt-3">
                  Voting is the expression of our commitment to ourselves, one
                  another, this country, and this world
                </blockquote>
              </div>
            </div>
          </div>
          <div className="h-96 col-span-7 relative mt-[30px] sm:mt-5">
            <div className="bg-white py-3 px-4 rounded-lg">
              <img src="/images/group-13.svg" />
              <div className="bg-aliceblue-100 flex justify-between py-3 my-2 rounded-md">
                <img
                  src="/images/search-icon.svg"
                  className="absolute left-10 top-[15%]"
                />
                <input
                  type="text"
                  className="bg-aliceblue-200 ml-3 w-[40%] rounded-lg"
                />
                <img
                  src="/images/image-50@2x.png"
                  className="w-10 h-10 rounded-full mr-2"
                />
              </div>
              <div className="bg-gray-200 mt-4 rounded-lg">
                <img
                  src="/images/political-party-debates@2x.png"
                  className="h-[45vh] w-[100%]"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="inline-block relative w-[35%]">
                  <img
                    src="/images/image-51@2x.png"
                    className="rounded-img-sm z-0"
                  />
                  <img
                    src="/images/image-52@2x.png"
                    className="rounded-img-sm z-10 absolute left-8"
                  />
                  <img
                    src="/images/image-53@2x.png"
                    className="rounded-img-sm z-20 absolute left-[30%]"
                  />
                  <span className="ml-[33%] text-gray-200 text-sm">
                    Watching
                  </span>
                </div>
                <div className="inline-block">
                  <span className="mr-2 text-gray-200">Live chat</span>
                  <img
                    src="/images/arrow-down-icon.svg"
                    className="inline-block"
                  />
                </div>
              </div>
              <div className="w-[30%] h-[31vh] hidden sm:block bg-white rounded-lg p-5 absolute left-[40%] bottom-[-35%]">
                <p className="capitalize text-gray-200 mb-3 font-serif">
                  Live update
                </p>
                <hr className="border border-slate-200" />
                <div className="flex justify-between rounded-lg bg-aliceblue-200 mt-3 p-2">
                  <p className="text-sm">
                    <span className="block text-green-500">37%</span>
                    <span className="text-xs text-gray-200">Femi Ola</span>
                  </p>
                  <img
                    src="/images/curve-graph.svg"
                    className="w-[50%] h-auto"
                  />
                </div>
                <div className="flex justify-between rounded-lg bg-aliceblue-200 mt-2 p-2">
                  <p className="text-sm">
                    <span className="block text-green-500">63%</span>
                    <span className="text-xs text-gray-200">Paul Chike</span>
                  </p>
                  <img
                    src="/images/curve-graph.svg"
                    className="w-[50%] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** How it works section */}
      <section className="bg-off-white  p-5 sm:p-12 relative top-[100px] md:top-[170px]">
        <div className="text-center">
          <img src="/images/ellipse-11.svg" className="mx-auto" />
          <h2 className="text-4xl font-bold font-serif">How it works</h2>
          <p className="mt-4 capitalize font-semibold text-gray-500 tracking-wider leading-7">
            You're always in control with Election Runner. It's easy to <br />{" "}
            build and customize an election
          </p>
        </div>
        <div className="faq-cards-container">
          <div className="faq-card">
            <img src="/images/group-20.svg" className="faq-card-img" />
            <h1 className="faq-card-title">Create an Account</h1>
            <p className="faq-card-body">
              Register and login into your Secure vote account
            </p>
          </div>
          <div className="faq-card">
            <img src="/images/group-20.svg" className="faq-card-img" />
            <h1 className="faq-card-title">Participate in Elections</h1>
            <p className="faq-card-body">
              After registratio, the user can participate in open elections available or closed elections that they are invited into.
            </p>
          </div>
          <div className="faq-card">
            <img src="/images/group-20.svg" className="faq-card-img" />
            <h1 className="faq-card-title">Create an Election space</h1>
            <p className="faq-card-body">
              A registered election manager can create a ballot for people to participate
              Add questions (i.e. positions) to your ballot and add options
              (candidates, measures, write-in fields, etc.) to your questions.
              Add a photo and/or short bio
            </p>
          </div>
          <div className="faq-card">
            <img src="/images/group-201.svg" className="faq-card-img" />
            <h1 className="faq-card-title">Add voters</h1>
            <p className="faq-card-body">
              You control who is eligible to vote in your elections. Add voters
              one-by-one, or import them from a spreadsheet.
            </p>
          </div>
          <div className="faq-card">
            <img src="/images/rocket@2x.png" className="faq-card-img" />
            <h1 className="faq-card-title">Launch the Election</h1>
            <p className="faq-card-body">
              When you're done customizing the election, you can schedule a
              start/end date or immediately launch it.
            </p>
          </div>
        </div>
        <div className="pt-3">
          <img src="/images/3-stars.svg" className="float-right" />
          <div className="clear-both"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="">
            <div>
              <img src="/images/ellipse-11.svg" className="ml-5" />
              <h2 className="text-3xl font-bold font-serif">About us</h2>
              <p className="mt-4 md:pr-10 font-semibold text-gray-500 tracking-wider leading-7">
                With us it is possible to create all-round participation
                experiences capable of creating a concrete and, today mostly
                unknown, value in organisations, companies or in any community
                that wants to get involved.
              </p>
            </div>
            <div className="mt-8 p-3 flex gap-5">
              <img src="/images/safe-icon.svg" />
              <div className="">
                <h2 className="font-bold text-lg text-gray-500">
                  Safe and secured
                </h2>
                <p className="text-gray-200">
                  Your elections are safe with us. We don’t share or use voter
                  data -it is private
                </p>
              </div>
            </div>
            <div className="mt-5 p-3 flex gap-5">
              <img src="/images/people-star-icon.svg" />
              <div className="">
                <h2 className="font-bold text-lg text-gray-500">
                  Real-time Results
                </h2>
                <p className="text-gray-200">
                  Winners are immediately calculated using cumulative voting,
                  preferential ballot, or approval voting. You can tabulate
                  results yourself too!
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/images/online-voting@2x.png" />
            <div className="relative md:top-[-200px] md:w-[17vw] p-3 bg-white rounded-lg">
              <img
                src="/images/vote-tag-icon.svg"
                className="absolute right-0 top-0"
              />
              <p className="text-gray-200 font-serif">
                You can vote from <br /> anywhere
              </p>
              <img src="/images/curve-hill-graph.svg" />
            </div>
          </div>
        </div>
      </section>
      {/** Know your right section */}
      <section className="bg-aliceblue-100 dark:bg-black relative p-5 top-[150px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8 text-center">
              <img src="/images/ellipse-11.svg" className="mx-auto" />
              <h2 className="text-2xl font-bold font-serif">
                Know your Rights
              </h2>
              <p className="p-5 text-justify leading-10">
                “Much has been given us, and much will rightfully be expected
                from us.We have duties to others and duties to ourselves; and we
                can shirk neither.We have become a great nation, forced by the
                fact of its greatness in relations with the other nations of the
                earth, and we must behave as people with such responsibilities.
                Toward all other nations, large and small, our attitude must be
                one of cordial and sincere friendship. We must show not only in
                our words, but in our deeds, that we are earnestly desirous of
                securing their good will by acting toward them in a spirit of
                just and generous recognition of all their rights. But justice
                and generosity ina nation, as in an individual, count most when
                shown not by the weak but by the strong.”
                <br />
                <span className="float-right">--Theodore Roosevelt</span>
                <span className="clear-right"></span>
              </p>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <img src="/images/liberty.png" />
            </div>
          </div>
        </div>
      </section>
      {/** The global promotion section */}
      <section className="pt-12 pb-12 mt-[130px] bg-white">
        <div className="container">
          <div className=" text-center">
            <img src="/images/ellipse-11.svg" className="mx-auto" />
            <h2 className="text-4xl font-bold font-serif mb-3">
              Global promotion
            </h2>
            <p className="text-gray-200">
              Our app can be used in any part of the world. We promote global
              inclusion and participation
            </p>
            <img src="/images/global-connect.png" className="mx-auto" />
          </div>
          <div className="bg-aliceblue-100 rounded-sm md:rounded-2xl mt-8 p-3 md:p-12  w-full md:w-[90%] mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 md:pt-12">
                <img src="/images/ellipse-11.svg" className="ml-6" />
                <h2 className="text-2xl font-bold font-serif mb-3">
                  Subscribe newsletter
                </h2>
                <p className="text-gray-200">
                  Subscribe to our newsletter to stay updated on daily events
                  and happenings.
                </p>
                <div className="mt-10 bg-white p-3 flex">
                  <input type="text" placeholder="Enter email address" className="pl-3 inline-block w-full" />
                  <h1 className="inline-block text-white bg-primary py-3 md:text-sm hover:cursor-pointer px-4 rounded hover:bg-softgreen">
                    <Link to="/register">Subscribe</Link>
                  </h1>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/images/speaker@2x.png"
                  className="hidden md:block h-[40vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
