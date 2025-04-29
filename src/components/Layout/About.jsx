import React from "react";
import Section from "../Section";
import { FaCheck, FaGlobe, FaHeadset, FaUsers } from "react-icons/fa6";
import CountUp from "react-countup";

const About = () => {
  return (
    <Section id="about" className="bg-gray-100" customPaddings="py-12 lg:py-20">
      <div className="bg-white py-6 px-4 md:px-6 lg:px-10 xl:px-14">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/LOGO_NEW_01.png"
              alt="Logo"
              className="h-auto max-w-full object-contain"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6 text-gray-700">
            <h1 className="text-3xl font-bold text-center lg:text-left">
              Who We Are?
            </h1>
            <h2 className="text-blue-700 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left">
              Driving Innovation in IT, SAP & Geospatial Solutions for Over 15
              Years
            </h2>
            <p className="text-base leading-relaxed text-justify">
              GBS is a forward-thinking{" "}
              <strong>IT consulting and services company</strong> established in
              2008, focused on delivering tailored digital solutions that exceed
              client expectations. With a strong foundation in the{" "}
              <strong>global utility market</strong>, we empower enterprises
              through technology that drives operational excellence and business
              transformation.
            </p>
            <p className="text-base leading-relaxed text-justify">
              As an <strong>ISO 27001:2022</strong> and
              <strong>ISO 9001:2015</strong> certified organization, GBS ensures
              compliance, quality, and security across every project. Our
              approach begins with understanding our client's business goals and
              delivering the right mix of <strong>SAP services</strong>,
              <strong>IT Solutions</strong>, and
              <strong>Technology based Geospatial services</strong> that
              generate measurable value.
            </p>

            <p className="text-base leading-relaxed text-justify">
              Through proven expertise in <strong>SAP implementation</strong>,
              <strong>GIS</strong> & <strong>drone-based surveying</strong>, and
              enterprise IT development, we help clients streamline processes,
              improve data visibility, and achieve sustainable growth across
              industries.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {[
                {
                  icon: <FaCheck size={28} className="text-blue-600" />,
                  title: "Expertise",
                  desc: "15+ years of industry leadership",
                },
                {
                  icon: <FaUsers size={28} className="text-blue-600" />,
                  title: "Team",
                  desc: "Certified domain professionals",
                },
                {
                  icon: <FaGlobe size={28} className="text-blue-600" />,
                  title: "Global Reach",
                  desc: "Clients across multiple continents",
                },
                {
                  icon: <FaHeadset size={28} className="text-blue-600" />,
                  title: "Support",
                  desc: "Dedicated 24/7 technical support",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-transform hover:-translate-y-1 cursor-pointer font-semibold text-sm md:text-base">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-10 px-4 md:px-6 lg:px-10 py-10 mx-auto">
        {/* Statistics Cards */}
        {[
          {
            count: "500",
            label: "Successful Projects",
          },
          {
            count: "200",
            label: "Happy Clients",
          },
          {
            count: "50",
            label: "IT Experts",
          },
          {
            count: "15",
            label: "Years of Experience",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-full min-h-[100px] flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <h1 className="text-blue-700 text-[2rem] md:text-[2.5rem] font-bold mb-4 text-center">
              <CountUp start={0} end={item.count} suffix="+" enableScrollSpy scrollSpyDelay={50}/>
              {/* {item.count} */}
            </h1>
            <p className="text-gray-600 text-center text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
