import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Head from "./Head";

function Layout({ children }) {
  return (
    <>
      <div className=" overflow-x-clip m-6 my-7 sm:m-10 md:m-20 md:my-10">
        <div className=" overflow-hidden rounded-[0.5rem] shadow-md">
          <Head />
          <div className="bg-offWhite dark:bg-gray-900 dark:text-offWhite border-8 border-green-200 px-2 sm:px-20 md:px-30 lg:px-40 xl:px-[20rem] 2xl:px-[30rem]">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
