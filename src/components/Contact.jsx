import React from "react";
import Section from "./Section";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <Section id="contact" className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Get in Touch with Us
        </h1>
        <p className="text-gray-600 text-center max-w-md">
          We would love to hear from you! Whether you have a question, need
          support, or want to discuss a project, feel free to reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2">
              <FaLocationDot className="text-4xl text-blue-500 mb-4" />
              <div>
                <h2 className="text-xl font-semibold">Branch Office</h2>
                <p className="text-gray-600">
                  Module No.-401/4th Floor, WEBEL Estate Complex Webel IT Park,
                  P1,Taratala Road,Near Brace Bridge Station, Kolkata-700088
                </p>
                <p className="text-gray-600"> India</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaLocationDot className="text-4xl text-blue-500 mb-4" />
              <div>
                <h2 className="text-xl font-semibold">Branch Office</h2>
                <p className="text-gray-600">
                  Module No.-401/4th Floor, WEBEL Estate Complex Webel IT Park,
                  P1,Taratala Road,Near Brace Bridge Station, Kolkata-700088
                </p>
                <p className="text-gray-600"> India</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-6">
            <h1 className="text-2xl font-semibold mb-4">Send Us a Message</h1>
            <div>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-2 rounded"
                />
                <textarea
                  placeholder="Your Message"
                  className="border border-gray-300 p-2 rounded h-32"
                ></textarea>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
