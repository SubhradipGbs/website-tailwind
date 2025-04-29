import React from "react";
import Section from "../Section";
import { FaClock, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button";

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
        <div className="flex flex-col gap-8 md:flex-row w-full px-2 md:px-5 lg:px-10 xl:px-20">
          <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
            <div className="flex gap-4">
              <div className="flex items-start justify-center mt-1">
                <FaLocationDot size={25} className="text-4xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg lg:text-xl font-semibold">
                  Headquarters
                </h2>
                <p className="text-sm lg:text-lg text-gray-600">
                  Nacharam Main Road, 3rd Floor, Ved Arcade, Plot No. 1,
                  Hyderabad, Telangana
                </p>
                <p className="text-sm lg:text-lg text-gray-600"> India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start justify-center mt-1">
                <FaLocationDot size={25} className="text-4xl text-blue-500" />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold">
                  Branch Office
                </h2>
                <p className="text-sm lg:text-lg text-gray-600">
                  Module No.-401/4th Floor, WEBEL Estate Complex Webel IT Park,
                  P1,Taratala Road,Near Brace Bridge Station, Kolkata-700088
                </p>
                <p className="text-sm lg:text-lg text-gray-600"> India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start justify-center">
                <FaPhoneAlt size={20} className="text-4xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg lg:text-xl font-semibold">Phone</h2>
                <p className="text-sm lg:text-lg text-gray-600">
                  +91 123 456 7890
                </p>
                <p></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start justify-center mt-1">
                <FaEnvelope size={20} className="text-4xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg lg:text-xl font-semibold">Email</h2>
                <p className="text-sm lg:text-lg text-gray-600">
                  info@gbserp.com
                </p>
                <p></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start justify-center mt-1">
                <FaClock size={20} className="text-4xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg lg:text-xl font-semibold">
                  Working Hours
                </h2>
                <p className="text-sm lg:text-lg text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-6 pt-1 w-full md:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Send Us a Message</h1>
            <div>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                <div className="grid grid-cols-1">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="grid grid-cols-1">
                  <select className="border border-gray-300 p-2 rounded">
                    <option value="" disabled selected>
                      Service of Interest
                    </option>
                    <option value="SAP">SAP Services</option>
                    <option value="IT">IT Services</option>
                    <option value="GIS">GIS Services</option>
                    <option value="survey">Survey & Drone Survey</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1">
                  <textarea
                    placeholder="Your Message"
                    className="border border-gray-300 p-2 rounded h-32"
                  ></textarea>
                </div>
                <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
