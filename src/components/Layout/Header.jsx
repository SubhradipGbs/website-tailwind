import React, { useEffect, useState } from "react";
import Button from "../Button";
import { navigations } from "../../constants/constants";
import { animateScroll, Link, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeNav, setActiveNav] = useState("");

  const gotoSection = (nav) => {
    if (location.pathname !== "/") {
      navigate(`/#${nav.href}`);
    } else {
      scroller.scrollTo(nav.href, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
    // setActiveNav(nav.href);
  };

  const gotoMobileSection = (nav) => {
    if (location.pathname !== "/") {
      navigate(`/#${nav.href}`);
    } else {
      scroller.scrollTo(nav.href, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 py-2 lg:py-3 xl:py-4 bg-white dark:bg-gray-900 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="home">
          <div className="flex items-center">
            <img
              src="/LOGO_NEW_01.png"
              alt="Logo"
              className="h-10 md:h-15 w-auto dark:drop-shadow-lg"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-end items-center gap-8">
          <nav>
            <ul className="flex space-x-6">
              {navigations.map((nav) => (
                <li
                  key={nav.id}
                  className="relative group text-md font-semibold"
                >
                  <div
                    onClick={() => {
                      gotoSection(nav);
                    }}
                    onMouseEnter={() => toggleDropdown(nav.id)}
                    // onMouseLeave={() => toggleDropdown(null)}
                    className={`cursor-pointer flex items-center gap-1 hover:-translate-y-0.5 transition-transform duration-200 ${
                      activeNav === nav.href
                        ? "text-blue-800 border-b-3 border-blue-800 dark:text-blue-400 dark:border-blue-400"
                        : "text-gray-600 dark:text-white"
                    } dark:hover:text-blue-400 dark:hover:border-blue-400`}
                  >
                    {/* <Link
                      activeClass="active-nav"
                      smooth={true}
                      spy
                      duration={500}
                      to={nav.href || "/"}
                      className="text-gray-600 hover:text-blue-700"
                    >
                      {nav.title}
                    </Link> */}
                    <span className="hover:text-blue-700">{nav.title}</span>
                    {nav.submenu && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {nav.submenu && openDropdown === nav.id && (
                    //
                    <ul
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      {nav.submenu.map((subItem) => (
                        <li key={subItem.id} className="cursor-pointer">
                          {/* <Link
                            smooth
                            duration={500}
                            to={subItem.href}
                            offset={-100}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link> */}
                          <div
                            onClick={() => {
                              gotoSection(subItem);
                            }}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Button
            onClick={scrollToContact}
            className="rounded bg-blue-800 text-white hover:bg-blue-900 hover:-translate-y-0.5 transition-transform duration-200"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            className="flex flex-col justify-center items-center text-gray-600 hover:text-blue-700 focus:outline-none"
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-gray-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav>
            <ul className="flex flex-col space-y-4 p-4">
              {navigations.map((nav) => (
                <li key={nav.id}>
                  <div className="flex flex-col">
                    <div
                      className="block text-gray-600 hover:text-blue-700 text-md font-semibold"
                      onClick={() => gotoMobileSection(nav)}
                    >
                      {nav.title}
                    </div>
                    {nav.submenu && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {nav.submenu.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="block text-gray-500 hover:text-blue-700 text-sm"
                            onClick={() => {
                              gotoMobileSection(subItem);
                            }}
                          >
                            {subItem.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4">
            <Button
              onClick={scrollToContact}
              className="w-full rounded bg-blue-800 text-white hover:bg-blue-900 transition-transform duration-200"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
