import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="bg-gray-900 bg-gradient-to-b from-gray-950 to-black py-20 sm:py-24 px-5 sm:px-10 md:px-20 text-center rounded-3xl my-10">
        <div className="bg-gray-900 bg-gradient-to-tr from-indigo-200 to-indigo-950 w-full py-20 pb-28 px-4 sm:aspect-video md:aspect-auto rounded-3xl shadow-lg shadow-indigo-950">
          <h1 className="mix-blend-overlay bg-inherit text-white pt-2 px-1 sm:pt-4 sm:px-2 md:px-10 text-lg sm:text-2xl font-bold rounded-3xl shadow-lg mb-10 mx-5">
            You have found the abyss, <div>where no content exists.</div>
            <h2 className=" text-white pb-2 mb-4 pt-1 sm:pb-4 sm:mb-6 sm:pt-2 px-2 md:px-10 text-md sm:text-xl font-semibold">
              Return to a valid URL.
            </h2>
          </h1>

          <Link
            to={"/"}
            className="text-white bg-gradient-to-tr from-indigo-900 to-indigo-200 hover:from-rose-200 hover:to-rose-950 hover:text-yellow-950 rounded-md px-7 py-3 text-sm font-medium min-w-24">
            Return
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
