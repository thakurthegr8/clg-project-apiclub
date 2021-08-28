import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes/PageRoutes";
import { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isNavbarLinkOpen, setNavbar] = useState(false);

  const [isLogoTitleHidden, setLogoTitleHidden] = useState(false);

  // const { scrollYProgress } = useViewportScroll();

  // scrollYProgress.onChange((x) => {
  //   if (x > 0.01) {
  //     setLogoTitleHidden(true);
  //   } else {
  //     setLogoTitleHidden(false);
  //   }
  // });
  return (
    <section
      className={` text-black transition-all flex flex-col space-y-4 border-b border-black z-10 p-3`}
    >
      <div className="mx-auto container">
        <div className="flex items-center md:justify-between md:px-4">
          <div className="flex-1 md:flex-none">
            <Link to="/">
              <h1 className="flex items-center justify-center">
                <Logo />
                <span
                  className={`text-lg md:text-xl lg:text-2xl font-extrabold`}
                >
                  APICLUB
                </span>
              </h1>
            </Link>
          </div>

          <nav className="md:flex-1">
            <ul className="hidden md:flex justify-center md:space-x-2 lg:space-x-4">
              {routes.map((pageRoute) => {
                return (
                  <li
                    key={pageRoute.id}
                    className=" rounded md:px-2 lg:px-4 py-2 font-medium hover:opacity-50 transition-all"
                  >
                    <Link to={pageRoute.url}>{pageRoute.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className={`px-6 py-2 rounded-md hidden md:block font-semibold bg-white text-black focus:outline-none`}
          >
            Contact Us
          </button>
          <button
            className="md:hidden bg-white bg-opacity-20 rounded-full p-1 border-white focus:bg-opacity-30"
            onClick={() => setNavbar(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
        {isNavbarLinkOpen && (
          <div className="flex flex-col p-2 bg-white md:hidden border border-black rounded shadow-xl fixed transition top-0 left-0 right-0 m-2 z-10">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-extrabold">APICLUB</h1>
              <button
                className="md:hidden bg-gray-200 rounded-full p-1 text-black"
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="#000"
                  viewBox="0 0 24 24"
                  stroke="#000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col justify-between space-y-3 divide-y divide-black pb-2">
                {routes.map((pageRoute) => {
                  return (
                    <Link to={pageRoute.url} onClick={() => setNavbar(false)}>
                      <li
                        key={pageRoute.id}
                        className="text-gray-900 text-base font-medium block -mb-2 p-2 rounded hover:bg-gray-100"
                      >
                        {pageRoute.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <button className="px-6 py-2 w-full mt-2 rounded-md font-semibold bg-black text-white focus:outline-none">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};
export default Navbar;
