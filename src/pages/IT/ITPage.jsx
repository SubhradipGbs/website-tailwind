import React, { useEffect } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import {
  FaCheck,
  FaCircleCheck,
  FaLaptopCode,
  FaLayerGroup,
  FaLightbulb,
} from "react-icons/fa6";
import { Link } from "react-scroll";
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaHandsHelping,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ITPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Section className="bg-gray-100">
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-12 lg:p-8">
          <div className="container px-4 md:px-6 flex flex-col gap-6 justify-center items-start max-w-2xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-bold leading-tight">
                Enterprise IT Solutions
              </h1>
              <p className="text-gray-300 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                Future-proof your organization with agile, secure, and scalable
                <strong> enterprise IT services</strong> tailored for the
                digital age. At GBS ERP, we deliver
                <strong>custom software development</strong>,
                <strong> web-based enterprise solutions</strong>, and
                <strong> portal development</strong> that drive innovation and
                business efficiency. Our expert team specializes in
                <strong> IT infrastructure setup</strong>,
                <strong> DevOps practices</strong>, and
                <strong> enterprise cybersecurity</strong> solutions that ensure
                continuous performance, resilience, and data protection. We
                integrate advanced analytics and mobility technologies to
                modernize legacy systems and scale operations. From
                <strong> web GIS and SAP portal</strong> development to seamless
                <strong> hybrid app</strong> solutions and
                <strong> custom dashboards</strong>, we build digital ecosystems
                that fuel growth and business agility.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Link
                to="it-services"
                smooth={true}
                duration={500}
                offset={-100}
                className="bg-yellow-400 text-black hover:bg-yellow-300 rounded px-4 py-2"
              >
                Explore IT Services
              </Link>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center mt-6 lg:mt-0">
            <img
              src="/09.png"
              alt="Logo"
              className="max-h-[20rem] md:max-h-[25rem] lg:max-h-[30rem] w-auto object-contain"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100" id="it-services">
        <div className="px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[7rem] py-8">
          <h2 className="text-3xl font-bold text-center mb-8">IT Services</h2>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-600 mx-auto mb-8">
            We specialize in delivering innovative IT services that help
            businesses streamline operations, increase productivity, and
            accelerate growth. Whether you’re looking to optimize your
            infrastructure, build custom software, or enhance operational
            efficiency, our team provides end-to-end IT support that’s tailored
            to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 px-4 md:px-8 lg:px-12 py-6">
          <div className="text-blue-800 flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLaptopCode size={30} className="text-blue-800 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold">
                Enterprise IT Solutions
              </h3>
            </div>
            <p className="text-gray-700 mt-5">
              Future-proof your organization with agile, secure, and scalable IT
              services. From cloud infrastructure to portal development, we
              empower digital transformation with reliable tech expertise.
            </p>
            <div className="mt-8">
              {[
                "Custom Web & Software Development",
                "IT Infrastructure Setup & Management",
                "Enterprise Cybersecurity Solutions",
                "WEB GIS & SAP Web Portal Development",
                "Custom Enterprise Portals",
                "Mobility Solutions",
                "Hybrid App Development",
                "Analytics Dashboards Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mt-4">
                  <FaCircleCheck
                    size={20}
                    className="text-blue-700 mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-blue-800 flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLayerGroup size={30} className="text-blue-800 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold">
                Our Technology Stack & Development Approach
              </h3>
            </div>
            <p className="text-gray-700 mt-5">
              At GBS, we leverage a robust and modern technology stack to build
              scalable, secure, and high-performance applications. Our agile
              development methodology ensures flexibility, speed, and continuous
              improvement across all phases of delivery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-md md:text-lg lg:text-xl font-semibold">
                  Programming Languages
                </h3>
                <ul className="ms-2">
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">JavaScript, TypeScript</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">Python, Java, C#</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">PHP, Go, SQL</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-md md:text-lg lg:text-xl font-semibold">
                  Frameworks & Libraries
                </h3>
                <ul className="ms-2">
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">Angular, React, Vue.js</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">Node.js, Express</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">.NET Core, Spring Boot</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">Django, Flask</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-md md:text-lg lg:text-xl font-semibold">
                  Cloud & DevOps Tools
                </h3>
                <ul className="ms-2">
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">
                      AWS, Microsoft Azure, Google Cloud Platform (GCP)
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">Docker, Kubernetes, Helm</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">
                      Jenkins, GitLab CI/CD, GitHub Actions
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-md md:text-lg lg:text-xl font-semibold">
                  Development Methodologies
                </h3>
                <ul className="ms-2">
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">Agile (Scrum & Kanban)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">DevOps Culture & Practices</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">
                      Test-Driven Development (TDD)
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck
                      size={18}
                      className="text-blue-700 mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-700">
                      Continuous Integration & Delivery (CI/CD)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <div className="w-full flex flex-col bg-gradient-to-r from-blue-700 to-blue-500 p-6 min-h-[12rem] shadow-sm">
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Why Choose Our IT Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {[
              {
                icon: <FaLaptopCode className="text-white text-3xl" />,
                title: "Tailored Software Solutions",
                description:
                  "We build modern, scalable software specifically designed to fit your business needs and workflow.",
              },
              {
                icon: <FaHandsHelping className="text-white text-3xl" />,
                title: "Reliable IT Support",
                description:
                  "Enjoy peace of mind with 24/7 system monitoring, maintenance, and responsive support from our dedicated team.",
              },
              {
                icon: <FaCloudUploadAlt className="text-white text-3xl" />,
                title: "Effortless Cloud Migration",
                description:
                  "Transition to the cloud confidently with secure, cost-effective, and performance-optimized solutions.",
              },
              {
                icon: <FaLightbulb className="text-white text-3xl" />,
                title: "Strategic IT Consulting",
                description:
                  "Get expert advice to align technology with your goals and drive smarter, faster decision-making.",
              },
            ].map((item, index) => (
              <div className="flex items-start gap-3" key={index}>
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our IT Projects</h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8"></p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-4 md:px-6 lg:px-10 xl:px-14 py-10">
            {itprojects.map((item, index) => (
              <div
                key={item.title + index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center flex flex-col max-w-sm mx-auto border border-gray-100 hover:-translate-y-0.5 transition-transform duration-200 min-h-[400px]"
              >
                <div className="flex flex-col justify-center items-center gap-3">
                  <div className="size-16 rounded-full 2xl:size-20 shadow-md bg-blue-50 flex justify-center items-center text-blue-800">
                    <i className={`fas ${item.iconClass} fa-2x text-primary`} />
                  </div>
                  <span className="py-1 px-3 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
                    {item.badgeText}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <hr className="border-gray-200 mb-3" />
                  <div className="flex items-end justify-center gap-2 text-gray-500 text-sm mx-4">
                    <span>
                      <strong className="text-gray-700">Client: </strong>
                      {item.client}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
          Trusted by leading companies around the world
        </p>
        <div>
          <div className="bg-white flex justify-center items-center h-full py-2 lg:py-5 xl:py-8 mx-2 md:mx-8 lg:mx-10 xl:mx-12 dark:bg-gray-800 gap-10">
            <Swiper
              className="mySwiper"
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={5000}
              spaceBetween={20}
            >
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/OPTCL.png"
                    alt="OPTCL"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/DST.png"
                    alt="DST"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/ORSAC.png"
                    alt="ORSAC"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/WB.png"
                    alt="WB"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/OPTCL.png"
                    alt="OPTCL"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/DST.png"
                    alt="DST"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/ORSAC.png"
                    alt="ORSAC"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src="/WB.png"
                    alt="WB"
                    className="h-15 w-auto md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ITPage;

const itprojects = [
  {
    title: "ORSAC Sampad",
    description:
      "Developed a Web-GIS system built on Geospatial technology with intuitive GUI for layer access, spatial queries, and map visualization. Includes Android app integration for real-time server communication.",
    client: "Odisha Space Applications Centre (ORSAC)",
    iconClass: "fa-map-marked-alt",
    badgeText: "WEB GIS",
  },
  {
    title: "School Infra",
    description:
      "A specialized module designed to map, monitor, and manage school infrastructure across Odisha using Geospatial Technology.",
    client: "Odisha Space Applications Centre (ORSAC)",
    iconClass: "fa-sitemap",
    badgeText: "WEB GIS",
  },
  {
    title: "SMS Monitoring",
    description:
      "Development and hosting of GPS based Mobile Tracking System with automatic SMS monitoring system for implementation of IFMS & GPMS Accounting Software at Panchayat & R.D. Department.",
    client: "West Bengal State Council of Science & Technology",
    iconClass: "fa-mobile-alt",
    badgeText: "HYBRID APPLICATION",
  },
  {
    title: "Software Development and Report Generation",
    description:
      "Development of a web-based software for the generation of reports and data analysis.",
    client: "Panchayats  & Rural Development Department, Govt. of WB",
    iconClass: "fa-chart-line",
    badgeText: "WEB APPlICATION",
  },
  {
    title: "Web GIS Portal",
    description:
      "Development and maintenance of Geospatial Web-GIS Solution for OPTCL Utility Asset Visualization, Network Mapping, and Spatial Analysis.",
    client: "Odisha Power Transmission Corporation Limited (OPTCL)",
    iconClass: "fa-bolt",
    badgeText: "WEB APPlICATION",
  },
];
