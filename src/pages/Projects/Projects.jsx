import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import CountUp from "react-countup";
import { projectsData } from "../../constants/constants";
import { animateScroll } from "react-scroll";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeCat, setActiveCat] = useState("all");

  const filterProjects = (category) => {
    setActiveCat(category);
    if (category === "all") {
      setProjects(projectsData);
    } else {
      const arr = projectsData.filter((item) => item.category === category);
      setProjects(arr);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Section
        className="bg-gray-100 text-gray-900"
        customPaddings="py-12 lg:py-20"
      >
        <div className="relative h-[95vh] md:h-[90vh] w-full overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Deocha_Sample_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 md:px-8">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
              Geospatial Excellence in Action
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-4xl mb-6 drop-shadow">
              Leveraging cutting-edge technology to deliver precise geospatial
              solutions, optimized SAP implementations, and innovative IT
              services for industry leaders.
            </p>
            <Button className="bg-blue-800 text-white hover:bg-blue-900 rounded px-6 py-3 text-sm md:text-base">
              Explore Our Work
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 justify-around items-center p-4 bg-blue-700">
          {[
            {
              count: "50",
              label: "Projects Completed",
              suffix: "+",
            },
            {
              count: "95",
              label: "Client Satisfaction",
              suffix: "%",
            },
            {
              count: "25",
              label: "Industry Partners",
              suffix: "+",
            },
            {
              count: "12",
              label: "Years of Excellence",
              suffix: "+",
            },
          ].map((item, index) => (
            <div key={index}>
              <h1 className="text-white text-[2rem] md:text-[2.5rem] font-bold mb-2 text-center">
                <CountUp
                  start={0}
                  end={item.count}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyDelay={50}
                />
              </h1>
              <h2 className="text-white text-center text-sm md:text-base font-semibold">
                {item.label}
              </h2>
            </div>
          ))}
        </div>
      </Section>
      <Section
        className="bg-gray-100 text-gray-900"
        customPaddings="py-12 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-14 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Geospatial Portfolio
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-10">
            Discover our comprehensive geospatial solutions leveraging
            cutting-edge technologies across industries
          </p>
        </div>
        <div className="flex justify-center items-center gap-1 px-4 md:px-6 lg:px-10 xl:px-14">
          {[
            {
              label: "All Projects",
              category: "all",
            },
            {
              label: "Drone Survey",
              category: "drone",
            },
            {
              label: "DGPS Survey",
              category: "dgps",
            },
            {
              label: "Total Station",
              category: "total-station",
            },
            {
              label: "Remote Sensing",
              category: "remote-sensing",
            },
            {
              label: "GIS Analysis",
              category: "gis",
            },
          ].map((item, index) => (
            <button
              onClick={() => filterProjects(item.category)}
              className={`border cursor-pointer border-blue-700 ${
                index == 0 && "rounded-l-full"
              } ${
                index == 5 && "rounded-r-full"
              } font-semibold text-blue-700 py-2 px-3 hover:bg-blue-800 hover:text-white ${
                activeCat == item.category
                  ? "bg-blue-700 text-white"
                  : "bg-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6 lg:px-10 xl:px-14 py-10">
          {projects.map((item) => (
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center flex flex-col gap-4 max-w-sm mx-auto border border-gray-100 hover:-translate-y-0.5 transition-transform duration-200">
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="h-16 w-16 rounded-full shadow-md bg-blue-50 flex justify-center items-center text-blue-800">
                  <i className={`fas ${item.iconClass} fa-2x text-primary`} />
                </div>
                <span className="py-1 px-3 bg-[#ff7043] text-white rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
                  {item.badgeText}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mx-4">
                {/* <FaBriefcase className="text-blue-600" /> */}
                <span>
                  <strong className="text-gray-700">Client: </strong>
                  {item.client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
