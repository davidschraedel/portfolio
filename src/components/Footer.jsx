import { Link } from "react-router-dom";

function Footer() {
  function getYear() {
    let year = new Date().getFullYear();
    return year;
  }
  const currentYear = getYear() || 0;

  return (
    <>
      <div className="pb-8 pt-6 bg-gradient-to-tr from-yellow-950 dark:from-indigo-200 to-indigo-200 dark:to-yellow-950 text-center ">
        <div className="hidden sm:block mx-auto max-w-7xl my-10 px-2 sm:px-6 lg:px-8  dark:bg-transparent rounded-lg dark:shadow-none w-4/6 md:w-3/6 lg:w-2/6">
          <div className="flex h-16 items-center justify-center">
            <div className="flex flex-1 justify-center sm:items-stretch ">
              <div className="flex flex-shrink-0">
                <div className="flex space-x-4">
                  <Link
                    className="text-white bg-inherit mix-blend-soft-light hover:mix-blend-normal hover:bg-[#0077B5] hover:text-white rounded-md  px-3 py-2 text-sm font-medium min-w-24"
                    to={"https://www.linkedin.com/in/david-schraedel/"}
                    target="_blank">
                    LinkedIn
                  </Link>
                  <br />
                  <Link
                    className="text-white bg-inherit mix-blend-soft-light hover:mix-blend-normal hover:bg-[#2b3137] hover:text-[#fafbfc] rounded-md px-3 py-2 text-sm font-medium min-w-24"
                    to={"https://github.com/davidschraedel"}
                    target="_blank">
                    Github
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block sm:hidden mx-auto max-w-7xl pb-2 mt-10 px-2 sm:px-6 lg:px-8">
          <div className="my-2 flex flex-1 justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <Link
                className="bg-[#0077B5] text-white hover:opacity-95 hover:shadow-lg rounded-md px-3 py-2 text-sm font-medium min-w-24"
                to={"https://www.linkedin.com/in/david-schraedel/"}
                target="_blank">
                LinkedIn
              </Link>
              <br />
              <Link
                className="bg-[#2b3137] text-[#fafbfc] hover:opacity-95 hover:shadow-lg rounded-md px-3 py-2 text-sm font-medium min-w-24"
                to={"https://github.com/davidschraedel"}
                target="_blank">
                Github
              </Link>
              <br />
            </div>
          </div>
        </div>
        <Link
          to={"mailto:davidschraedel@gmail.com"}
          className="text-white text-md bg-inherit mix-blend-soft-light hover:text-slate-800">
          davidschraedel@gmail.com
        </Link>
        <p className="pb-10 pt-2 text-sm text-white bg-inherit mix-blend-soft-light">
          © {currentYear || "2024"} David Schraedel
        </p>
      </div>
    </>
  );
}

export default Footer;
