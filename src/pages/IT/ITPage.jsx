import React, { useEffect } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import {
  FaCheck,
  FaCircleCheck,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa6";
import { Link } from "react-scroll";

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
        <h2 className="text-3xl font-bold text-center mb-8">IT Services</h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
          Empowering Enterprises with Innovative IT Solutions
        </p>
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
    </div>
  );
};

export default ITPage;
