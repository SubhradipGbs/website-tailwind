import React, { useEffect } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import { FaCircleCheck, FaDatabase } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const SAP = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Section className="bg-gray-100">
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-12 lg:p-8">
          <div className="container px-4 md:px-6 flex flex-col gap-6 justify-center items-start max-w-2xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold leading-tight">
                Transform Your Business with SAP Services
              </h1>
              <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                Leverage our expertise in SAP Consulting, Implementation and
                Services to optimize your enterprise processes. With over 15
                years of experience in the utility sector, we provide tailored
                solutions that drive efficiency and growth.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {/* <Button
                onClick={() => {
                  scrollToSection("contact");
                }}
                className="bg-white text-blue-600 hover:bg-gray-200 hover:text-black rounded px-4 py-2"
              >
                Talk to an Expert
              </Button> */}
              <Button
                onClick={() => {
                  scrollToSection("services");
                }}
                className="bg-yellow-400 text-black hover:bg-yellow-300 rounded px-4 py-2"
              >
                Explore SAP Services
              </Button>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center mt-6 lg:mt-0">
            <img
              src="/sap-hero.png"
              alt="Logo"
              className="h-[25rem] md:[20rem] lg:h-[30rem] w-auto"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">SAP Services</h2>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-8">
          Discover our comprehensive SAP services designed to streamline your
          business operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[7rem] py-3">
          <div className="text-blue-800 flex flex-col bg-gradient-to-r from-blue-100 to-indigo-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaDatabase size={30} />
              <h3 className="text-xl md:text-2xl font-bold">
                SAP Consulting, Implementation and Services
              </h3>
            </div>
            <p className="text-gray-700 mt-5">
              Optimize and transform your enterprise with scalable SAP
              solutions. Our full-cycle SAP consulting, implementation, and
              support services are designed to align with industry-specific
              challenges.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                "SAP Implementation & System Upgrades",
                "SAP S/4HANA Transition Services",
                "Post-Go-Live Support & Optimization",
                "Enterprise SAP Integration",
                "Energy Portfolio Management Expertise",
                "Core SAP Modules – FI/CO/MM/SD/PM",
                "Expertise in Utility Business Processes",
                "Data Migration from SAP to Non-SAP Systems",
                "Data Migration from Non-SAP to SAP Systems",
                "MDM to SAP Connections",
                "SAP & SCADA Integration",
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
              <FaTools size={30} />
              <h3 className="text-xl md:text-2xl font-bold">
                SAP Support & Optimization
              </h3>
            </div>
            <p className="text-gray-700 mt-5">
              Our dedicated support team ensures your SAP systems run smoothly
              post-implementation. We provide ongoing optimization services to
              enhance performance and adapt to changing business needs.
            </p>
            <div className="mt-10 mb-[3rem]">
              {[
                "Continuous System Monitoring",
                "Performance Tuning & Optimization",
                "User Training & Support",
                "Custom Development & Enhancements",
                "Regular System Audits & Updates",
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

export default SAP;
