import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-i_blue
  "
    >
      <div className="w-[95%] lg:w-1/2 px-4 py-20 bg-[#101949] rounded-md shadow-xl">
        <div className="flex flex-col items-center gap-y-3">
          <h1 className="font-bold text-blue-500 text-5xl lg:text-9xl">404</h1>

          <h6 className=" text-lg lg:text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-gray-400">Oops! Page Not Found!</span>
          </h6>
          <div>
            <p className=" text-center text-gray-500 text-sm  lg:text-base">
              It looks like the page you're searching for doesn't exist.
            </p>
            <p className=" text-center text-gray-500 text-sm  lg:text-base">
              Try going back to the <Link className="text-blue-500" to="/">Homepage.</Link>
            </p>
          </div>
          <Link
            to="/"
            className="px-6 py-2 hover:scale-110 duration-1000 text-sm font-semibold text-blue-800 rounded-md shadow-lg bg-blue-100"
          >
            Back to Main Page
          </Link>
          <div>
            <p className=" text-center text-gray-500 text-sm  lg:text-base">
              If you need further assistance, feel free to contact us.
            </p>
            <p className=" text-center text-gray-500 text-sm  lg:text-base">
              Thanks for visiting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
