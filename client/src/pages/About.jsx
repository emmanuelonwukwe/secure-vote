
export default function About() {
  return (
    <>
      <section className="bg-teal-600 pb-12">
        <div className="ml-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8">
              <h2 className="text-goldenred text-3xl mt-8 mb-12 font-bold">~ WHO WE ARE</h2>
              <h1 className="text-white font-extrabold text-5xl mb-12">
                We make your <br /> elections smooth.</h1>
              <p className="pr-12 mb-12 text-white font-bold text-md">
                SecureVote is about accessible democracy around the world. Our team of Election Experts
                build and deliver easy to use, high integrity, affordable voting solutions to voters and
                voting administrators of member-based organizations.
              </p>
              <div className="flex flex-wrap sm:flex-nowrap">
                <img src="/images/boy-at-office@2x.png" className="w-[40%]" />
                <p className="pr-1 text-white font-bold text-2xl">
                  SecureVote is designed and developed by SecureVote Inc. We build simple elegant technology
                  solutions to real world problems by listening to our customer needs. And we are always
                  looking to improve our SecureVote online voting system, so contact us with your comments and
                  questions!
                </p>
              </div>
            </div>
            <div className="col-span-12 hidden sm:block sm:col-span-4">
              <img src="/images/happy-woman.png" className="mt-12 w-[60%] h-[60%]" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
