import React, { useEffect, useState } from "react";
import Button from "./Button";
import { navigations } from "../constants/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 py-2 lg:py-3 xl:py-4 bg-white ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <img src="/LOGO_NEW_01.png" alt="Logo" className="h-15 md:h-18 w-auto" />
        </div>
        <div className="hidden lg:flex justify-end items-center gap-[2rem]">
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-4 gap-[2rem]">
              {navigations.map((nav) => (
                <li
                  key={nav.id}
                  className="text-md font-semibold relative hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <a
                    href={nav.href}
                    className="text-gray-600 hover:text-blue-700"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex space-x-4">
            <Button
              className="rounded bg-blue-800 text-white hover:bg-blue-900 hover:-translate-y-0.5 transition-transform duration-200"
            >
              Get a Quote
            </Button>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="text-gray-600 hover:text-blue-700 focus:outline-none">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
