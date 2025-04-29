import React from "react";
import Section from "../Section";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Button from "../Button";
import { Link } from "react-scroll";
import { navigations } from "../../constants/constants";

const Footer = () => {
  const date = new Date();
  return (
    <Section className="bg-gray-100" customPaddings="pt-12 lg:pt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58971.110174792775!2d88.22635154863282!3d22.515646800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ea077cc165%3A0x5bcca8f544194bb6!2sGlobal%20Business%20Solutions!5e0!3m2!1sen!2sin!4v1744217435286!5m2!1sen!2sin"
        loading="lazy"
        className="w-full max-w-full"
        height={400}
      />
      <div className="bg-gray-900 py-6 px-[2rem] text-white">
        <div className="flex flex-col flex-wrap md:flex-row justify-around gap-y-4 mb-4">
          <div className="px-2 w-full lg:w-4/12">
            <h2 className="text-xl font-semibold mb-4">About GBS</h2>
            <p className="mb-4 text-sm leading-relaxed">
              GBS ERP is a leading IT solutions provider specializing in SAP,
              IT, GIS, and Survey services. With over 15 years of experience, we
              deliver innovative technology solutions to clients worldwide.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 cursor-pointer"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="px-2 w-full md:w-1/2 lg:w-2/12">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {navigations.map((nav) => (
                <li key={nav.title} className="hover:underline cursor-pointer">
                  <Link to={nav.href} smooth duration={1000}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2 w-full md:w-1/2 lg:w-2/12">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2 text-sm">
              <li>SAP Service</li>
              <li>GIS Service</li>
              <li>IT Service</li>
              <li>Survey & Drone Survey</li>
              <li>IT Consulting</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
          <div className="px-2 w-full lg:w-4/12">
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive the latest updates and news
            </p>
            <div className="flex flex-col sm:flex-row w-full">
              <input
                className="bg-white text-gray-800 rounded-l-md sm:rounded-l-md sm:rounded-r-none px-4 py-2 w-full sm:w-auto sm:flex-1 mb-2 sm:mb-0"
                type="email"
                placeholder="Your Email"
              />
              <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-r px-4 py-2 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            © {date.getFullYear()} GBS ERP. All rights reserved.
          </p>
          <ul className="flex gap-4 flex-wrap justify-center">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
