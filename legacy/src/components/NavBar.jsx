import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const { pathname } = useLocation();
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Musings", path: "/musings" },
  ];

  const [routes, setRoutes] = useState(navigation);

  function handleCurrent(item) {
    const newNavigation = navigation.map((route) => {
      return { ...route, current: route.name === item.name ? true : false };
    });
    setRoutes(newNavigation);
  }

  return (
    <>
      <div className="py-2">
        <div className="hidden sm:block mx-auto max-w-7xl mb-10 mt-2 px-2 sm:px-6 lg:px-8 bg-offWhite dark:bg-gray-900 rounded-lg shadow-2xl w-5/6 md:w-4/6 lg:w-3/6 text-center">
          <div className="flex h-16 items-center justify-center">
            <div className="flex flex-1 justify-center sm:items-stretch">
              <div className="flex flex-shrink-0">
                <div className="flex space-x-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={classNames(
                        item.path === pathname
                          ? "bg-indigo-100 dark:bg-gray-800 text-gray-900 dark:text-indigo-300 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-indigo-300 "
                          : "text-gray-800 dark:text-gray-200 dark:text-opacity-70 dark:hover:text-opacity-100 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-indigo-200 ",
                        "rounded-md px-3 py-2 text-sm font-medium min-w-24"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block py-1 sm:hidden mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
          <div className="my-6 flex flex-1 justify-center ">
            <div className="w-full flex flex-col space-y-3 items-center justify-center">
              {routes.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleCurrent(item)}
                  className={classNames(
                    item.path === pathname
                      ? "shadow-2xl hover:shadow-md bg-indigo-100 dark:bg-gray-800 text-gray-900 dark:text-indigo-300 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-indigo-300 "
                      : "hover:shadow-md text-gray-800 dark:text-gray-200 dark:text-opacity-70 dark:hover:text-opacity-100 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-indigo-200 ",
                    "rounded-md px-3 py-2 text-sm font-medium min-w-24"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

{
  /* <div className="bg-white rounded-lg border-4 border-cyan-100">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-cyan-200 text-black hover:bg-cyan-100 hover:text-black"
                    : "text-gray-900 hover:bg-cyan-100 hover:text-black",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
