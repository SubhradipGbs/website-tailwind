import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        name='Toggle Project Dropdown'
        onClick={toggleDropdown}
        className='flex items-center justify-between bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200 min-w-[160px]'>
        <span>View All Projects</span>
        {isOpen ? (
          <FaChevronUp className='ml-2 h-4 w-4' />
        ) : (
          <FaChevronDown className='ml-2 h-4 w-4' />
        )}
      </button>

      {isOpen && (
        <div className='absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
          <ul className='py-1'>
            <li className='cursor-pointer'>
              <Link to='/sap'>
                <button
                  name='SAP'
                  className='w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100'>
                  SAP Projects
                </button>
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to='/it'>
                <button
                  name='IT'
                  className='w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100'>
                  IT Projects
                </button>
              </Link>
            </li>
            <li>
              <Link to='/geo-projects'>
                <button
                  name='Geospatial'
                  className='w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100'>
                  Geospatial Projects
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
