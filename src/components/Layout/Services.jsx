import React from "react";
import Section from "../Section";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <Section id="services" className="bg-white text-gray-800 dark:bg-gray-900">
      <div className="px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[7rem] py-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-200">
          Our Core Services
        </h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8 dark:text-gray-400">
          We deliver end-to-end SAP consulting, enterprise IT services, and
          geospatial solutions tailored for the utility sector and beyond. From
          digital transformation to intelligent infrastructure planning, our
          integrated approach helps organizations innovate, scale, and stay
          future-ready.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div
            id="sapservice"
            className="flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              SAP Consulting & Implementation
            </h3>
            <p className="text-gray-700 mt-5">
              Optimize and transform your enterprise with scalable SAP
              solutions. With over 15 years of
              <strong> expertise in the utility sector</strong>, we offer
              full-cycle SAP consulting, implementation, and support services
              designed to align with industry-specific challenges.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                {
                  id: 1,
                  desc: "SAP Implementation & System Upgrades",
                },
                {
                  id: 2,
                  desc: "SAP S/4HANA Transition Services",
                },
                {
                  id: 3,
                  desc: "Post-Go-Live Support & Optimization",
                },
                {
                  id: 4,
                  desc: "Enterprise SAP Integration",
                },
                {
                  id: 5,
                  desc: "Energy Portfolio Management Expertise",
                },
                {
                  id: 6,
                  desc: "Core SAP Modules – FI/CO/MM/SD/PM",
                },
                {
                  id: 7,
                  desc: "Expertise in Utility Business Processes",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mt-4 ms-2">
                  <div className="text-blue-700">
                    <FaCircleCheck size={20} />
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => navigate("/sap")}
                className="border border-blue-700 text-blue-700 hover:bg-blue-900 hover:text-white px-6 py-2 rounded-full transition-transform hover:-translate-y-1 cursor-pointer font-semibold"
              >
                Explore SAP Services
              </button>
            </div>
          </div>
          <div
            id="itservice"
            className="flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Enterprise IT Solutions
            </h3>
            <p className="text-gray-700 mt-5">
              Future-proof your organization with agile, secure, and scalable IT
              services. From cloud infrastructure to portal development, we
              empower digital transformation with reliable tech expertise.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                {
                  id: 1,
                  desc: "Custom Web & Software Development",
                },
                {
                  id: 2,
                  desc: "Cloud Infrastructure & DevOps",
                },
                {
                  id: 3,
                  desc: "IT Infrastructure Setup & Management",
                },
                {
                  id: 4,
                  desc: "Enterprise Cybersecurity Solutions",
                },
                {
                  id: 5,
                  desc: "WEB GIS & SAP Web Portal Development",
                },
                {
                  id: 6,
                  desc: "Custom Enterprise Portals",
                },
                {
                  id: 7,
                  desc: "Mobility Solutions",
                },
                {
                  id: 7,
                  desc: "Hybrid App Development",
                },
                {
                  id: 7,
                  desc: "AWS Cloud Solutions",
                },
                {
                  id: 7,
                  desc: "Analytics Dashboards Development",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mt-4 ms-2">
                  <div className="text-blue-700">
                    <FaCircleCheck size={20} />
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => navigate("/it")}
                className="border border-blue-700 text-blue-700 hover:bg-blue-900 hover:text-white px-6 py-2 rounded-full transition-transform hover:-translate-y-1 cursor-pointer font-semibold"
              >
                Discover IT Services
              </button>
            </div>
          </div>
          <div
            id="gisservice"
            className="flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Geospatial Intelligence Services
            </h3>
            <p className="text-gray-700 mt-5">
              Unlock powerful insights from location-based data. Our geospatial
              solutions merge GIS technology with drone-based surveying to
              support planning, infrastructure, utility networks, and
              environmental studies.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                {
                  id: 1,
                  desc: "GIS Data Architecture & Management",
                },
                {
                  id: 2,
                  desc: "Advanced Spatial Analysis & Mapping",
                },
                {
                  id: 3,
                  desc: "Custom GIS & Web Applications",
                },
                {
                  id: 4,
                  desc: "Drone-Based Aerial Surveys",
                },
                {
                  id: 5,
                  desc: "Topographic & Land Development Surveys",
                },
                {
                  id: 6,
                  desc: "3D Terrain Modeling & Visualization",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mt-4 ms-2">
                  <div className="text-blue-700">
                    <FaCircleCheck size={20} />
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => navigate("/geo")}
                className="border border-blue-700 text-blue-700 hover:bg-blue-900 hover:text-white px-6 py-2 rounded-full transition-transform hover:-translate-y-1 cursor-pointer font-semibold"
              >
                Explore Geospatial Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
