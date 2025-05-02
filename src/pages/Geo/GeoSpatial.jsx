import React from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import { FaBuilding, FaCircleCheck, FaMountain } from "react-icons/fa6";

const GeoSpatial = () => {
  return (
    <div>
      <Section className="bg-gray-100">
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-12 lg:p-8">
          <div className="container px-4 md:px-6 flex flex-col gap-6 justify-center items-start max-w-2xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-bold leading-tight">
                Enterprise-Grade Geospatial Services
              </h1>
              <p className="text-gray-300 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                Delivering precision data through innovative indoor and outdoor
                geospatial solutions. GBS ERP empowers businesses with
                actionable spatial intelligence for engineering, infrastructure,
                construction, and asset management.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Button
                onClick={() => {
                  scrollToSection("services");
                }}
                className="bg-yellow-400 text-black hover:bg-yellow-300 rounded px-4 py-2"
              >
                Explore IT Services
              </Button>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center mt-6 lg:mt-0">
            <img
              src="/R.png"
              alt="Logo"
              className="max-h-[20rem] md:max-h-[25rem] lg:max-h-[30rem] w-auto object-contain"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Geospatial Services
        </h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
          Discover our comprehensive geospatial services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[7rem] py-3">
          <div className="text-blue-800 flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaBuilding size={30} />
              <h3 className="text-xl md:text-2xl font-bold">
                Indoor Geospatial Services
              </h3>
            </div>
            <p className="text-gray-700 mt-5">
              Our indoor mapping and modeling technologies offer accurate data
              collection for internal infrastructure and asset planning.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                "Digital Photogrammetry",
                "GIS & Geospatial Analytics",
                "LiDAR & Mobile LiDAR",
                "Orthoimagery",
                "CAD Modeling & BIM Integration",
                "Geospatial Consultancy",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mt-4 ms-2">
                  <div className="text-blue-700">
                    <FaCircleCheck size={20} />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-blue-800 flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaMountain size={30} />
              <h3 className="text-xl md:text-2xl font-bold">
                Outdoor Geospatial Services
              </h3>
            </div>
            <p className="text-gray-700 mt-5">
              Our advanced surveying and aerial technologies provide
              high-resolution data for terrain modeling, infrastructure, and
              environmental monitoring.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                "Differential GPS (DGPS) Surveying",
                "UAV/Drone-based Aerial Surveys",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mt-4 ms-2">
                  <div className="text-blue-700">
                    <FaCircleCheck size={20} />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GeoSpatial;
