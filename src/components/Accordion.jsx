import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className='w-full border-b border-gray-200 dark:border-gray-700'>
      <div
        className={`flex justify-between items-center w-full cursor-pointer py-4 px-2 transition-colors duration-300 ${
          isOpen ? "bg-blue-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
        }`}
        onClick={() => setIsOpen(!isOpen)}>
        <p
          className={`flex items-center font-medium text-base transition-colors duration-300 ${
            isOpen
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-800 dark:text-white"
          }`}>
          <span className='mr-4 text-lg font-semibold'>Q{index + 1}.</span>
          {question}
        </p>
        <button
          name='toggle-accordion'
          aria-label='toggle'
          className='transform transition-transform duration-300 me-2'>
          <FaChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen
                ? "rotate-180 text-blue-600 dark:text-blue-400"
                : "text-gray-800 dark:text-white"
            }`}
          />
        </button>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className='overflow-hidden transition-all duration-500 px-4 bg-gray-50'>
        <div className='mt-2 pb-4 pr-6'>
          <p className='text-base text-gray-800 dark:text-gray-300'>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
