import React, { useEffect } from "react";
import Section from "../../components/Section";
import {
  FaBolt,
  FaBuilding,
  FaCircleCheck,
  FaMedal,
  FaMountain,
} from "react-icons/fa6";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clients2 } from "../../constants/constants";
import { FaCheckCircle } from "react-icons/fa";
import Accordion from "../../components/Accordion";

const GeoSpatial = () => {
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
            Your browser does not support the video.
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

          <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 md:px-8">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
              Enterprise-Grade Geospatial Services
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-4xl mb-6 drop-shadow">
              Delivering precision data through innovative indoor and outdoor
              geospatial solutions. GBS ERP empowers businesses with actionable
              spatial intelligence for engineering, infrastructure,
              construction, and asset management.
            </p>
            <Link
              to="geo-services"
              smooth
              duration={500}
              offset={-100}
              className="bg-blue-800 text-white hover:bg-blue-900 rounded px-6 py-3 text-sm md:text-base cursor-pointer"
            >
              Explore Geospatial Services
            </Link>
          </div>
        </div>
      </Section>
      {/* <Section className="bg-gray-100">
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
              <Link
                to="geo-services"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-yellow-400 text-black hover:bg-yellow-300 rounded px-4 py-2"
              >
                Explore Geospatial Services
              </Link>
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
      </Section> */}
      <Section className="bg-gray-100" id="geo-services">
        <h2 className="text-3xl font-bold text-center mb-2">
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
                "Orthoimagery",
                "CAD Modeling & BIM Integration",
                "Geospatial Consultancy",
                "Image Processing",
                "Remote Sensing Technology",
                "Utility GIS Mapping",
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
                "LiDAR & Mobile LiDAR",
                "Total Station Survey",
                "GPR Survey",
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
      <Section className="bg-gray-100">
        <div className="w-full flex flex-col bg-blue-600 p-6 min-h-[12rem] shadow-sm">
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Why Choose Our Geospatial Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FaCheckCircle className="text-white text-3xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  Comprehensive Solutions
                </h3>
                <p className="text-gray-200 mt-2">
                  From data collection to analysis and visualization, we provide
                  end-to-end geospatial services tailored to your specific
                  project requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1">
                <FaMedal className="text-white text-3xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  Industry-Leading Accuracy
                </h3>
                <p className="text-gray-200 mt-2">
                  Our state-of-the-art equipment and rigorous methodologies
                  ensure the highest standards of precision across all services.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1">
                <FaBolt className="text-white text-3xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">
                  Rapid Deployment
                </h3>
                <p className="text-gray-200 mt-2">
                  Quick response times and efficient workflows minimize project
                  disruption while delivering results when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <div className="w-full px-2">
          <h2 className="text-3xl font-bold text-center mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
            Everything you need to know about our geospatial services
          </p>
          <div className="max-w-[800px] mx-auto overflow-hidden rounded-lg bg-white">
            <Accordion
              question="What accuracy levels can your geospatial surveys achieve?"
              answer="Our geospatial surveys can achieve accuracy levels ranging from sub-centimeter to several centimeters, depending on the technology used and the specific requirements of the project."
              index={0}
            />
            <Accordion
              question="How do you handle data integration with existing systems?"
              answer="We offer comprehensive data integration services that connect our geospatial datasets with your existing GIS, CAD, BIM, or enterprise systems. Our team develops custom APIs and connectors to ensure seamless data flow while maintaining data integrity across platforms."
              index={1}
            />
            <Accordion
              question="What deliverables can we expect from your geospatial services?"
              answer="Typical deliverables include georeferenced point clouds, high-resolution orthomosaics, digital elevation models (DEMs), 3D textured meshes, CAD drawings, BIM models, GIS databases, and comprehensive analytical reports. All data is delivered in industry-standard formats with complete metadata and can be customized based on your project requirements."
              index={2}
            />
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2">Our Clients</h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
          Trusted by leading companies around the world
        </p>
        <div>
          <div className="bg-white py-2 lg:py-5 xl:py-8 mx-2 md:mx-8 lg:mx-10 xl:mx-12 dark:bg-gray-800">
            <Swiper
              className="mySwiper"
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={5000}
              spaceBetween={0}
            >
              {clients2.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                    <img
                      src={`${client.logo}`}
                      alt={client.alt}
                      className="h-15 w-auto md:h-20"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GeoSpatial;
