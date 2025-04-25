import React from "react";
import Section from "./Section";
import {
  FaCloud,
  FaDatabase,
  FaGears,
  FaMapLocationDot,
} from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import Button from "./Button";

const Projects = () => {
  return (
    <Section id="projects" className="bg-gray-100">
      <div className="px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[7rem] py-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Service Projects
        </h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
          Explore our successful implementations across different industries,
          leveraging our expertise in SAP, IT, and Geospatial services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {[
            {
              logo: <FaGears className="text-blue-700 text-[4rem] mb-4" />,
              title: "SAP S/4HANA Implementation",
              description:
                "Complete SAP S/4HANA implementation for a manufacturing company, optimizing their operations and supply chain.",
              tag: "SAP",
              buttonText: "View Case Study",
              url: "#",
            },
            {
              logo: <FaDatabase className="text-blue-700 text-[4rem] mb-4" />,
              title: "SAP Business One Implementation",
              description:
                "SAP Business One implementation for a growing manufacturing company to streamline operations and improve reporting.",
              tag: "SAP",
              buttonText: "View Case Study",
              url: "#",
            },
            {
              logo: <FaCloud className="text-green-700 text-[4rem] mb-4" />,
              title: "Enterprise Cloud Migration",
              description:
                "Successful migration of on-premises infrastructure to cloud for a financial services firm, improving scalability and security.",
              tag: "IT",
              buttonText: "View Case Study",
              url: "#",
            },
            {
              logo: <FaGears className="text-green-700 text-[4rem] mb-4" />,
              title: "Custom ERP Development",
              description:
                "Custom ERP solution development for a retail chain with 50+ locations, integrating inventory, sales, and HR functions.",
              tag: "IT",
              buttonText: "View Case Study",
              url: "#",
            },
            {
              logo: (
                <FaMapLocationDot className="text-yellow-500 text-[4rem] mb-4" />
              ),
              title: "Geospatial Mapping for Environmental Monitoring",
              description:
                "Conducted satellite imagery analysis and GIS mapping for environmental monitoring and land use planning in rural areas.",
              tag: "Geospatial",
              buttonText: "View Case Study",
              url: "#",
            },
            {
              logo: (
                <FaGlobeAmericas className="text-yellow-500 text-[4rem] mb-4" />
              ),
              title: "Geospatial Data Integration for Urban Development",
              description:
                "Integrated multiple layers of geospatial data to assist in urban development projects, providing accurate site selection and planning tools.",
              tag: "Geospatial",
              buttonText: "View Case Study",
              url: "#",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="logo flex justify-end items-center gap-0.5">
                {item.logo}
                <div
                  className={`badge ${
                    item.tag === "SAP"
                      ? "bg-blue-700"
                      : item.tag === "IT"
                      ? "bg-green-700"
                      : "bg-yellow-500"
                  } py-[2px] px-[5px] rounded-sm text-white text-[0.7rem] mt-auto font-bold`}
                >
                  {item.tag}
                </div>
              </div>
              <div className="content flex flex-col gap-1">
                <h3 className="text-gray-800 text-sm md:text-[1.2rem] font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-800">{item.description}</p>
              </div>
              <div className="buttons mt-auto">
                <a
                  href={item.url}
                  className="border border-blue-700 text-blue-700 bg-white hover:bg-blue-700 hover:text-white rounded-md px-4 py-1 transition-transform duration-200"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Button className="rounded bg-blue-700 text-white hover:bg-blue-800 hover:-translate-y-0.5 transition-transform duration-200">
            View All Project
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
