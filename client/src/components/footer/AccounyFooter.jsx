
export default function AccountFooter() {
  let date = new Date().getFullYear();

  return (
    <>
      {/* component */}
      <footer className="bg-dark-blue font-sans dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto">
          <hr className="my-1 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
          <div className="text-white text-sm md:text-lg flex flex-wrap items-center justify-between">
            <p>Copyright &copy; {date} SecureVote</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
