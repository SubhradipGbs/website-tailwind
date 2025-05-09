import React from "react";
import Section from "../Section";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Button from "../Button";

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      className="bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <p className="text-md md:text-lg lg:text-xl text-center text-gray-600 max-w-[700px] mx-auto mb-10 dark:text-gray-400">
          Trusted by leading organizations across industries
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ahmed Hunaif",
              imageUrl: "/hunaif.jpeg",
              position: "GM ICT, MWSC",
              rating: 5,
              testimonial:
                "The Excellent Quality of service provided by GBS on SAP ECC6.0 and ISU-CCS for last two years has been commendable. The Consistent efforts put by them to uphold the SLA has been facilitating an effortless flow of our business. It's a pleasure to work with GBS people who identify the meaning of efficiency.",
            },
            {
              name: "Mr. Adam Azim",
              imageUrl: "/Adam Azim.png",
              position: "Finance Head, MWSC",
              rating: 5,
              testimonial:
                "We find GBS a very professional and trustworthy organization and they add real value to the project rather than just ‘box ticking’ through their way to the support.",
            },
            {
              name: "OPTCL",
              imageUrl: "/OPTCL.png",
              position: "Project Manager, OPTCL",
              rating: 4.5,
              testimonial:
                "The drone survey services provided by GBS ERP significantly reduced our project timeline and improved accuracy. Their professional team delivered high-quality data that exceeded our expectations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col space-y-5 dark:bg-gray-900"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400">
                    {item.position}
                  </p>
                </div>
              </div>

              <div className="relative bg-gray-100 p-4 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <FaQuoteLeft className="text-blue-400 text-2xl absolute -top-3 left-3 bg-white rounded-full p-1 shadow dark:bg-gray-700" />
                <p className="text-gray-700 text-sm leading-relaxed italic dark:text-gray-300">
                  {item.testimonial}
                </p>
                <FaQuoteRight className="text-blue-400 text-2xl absolute -bottom-3 right-3 bg-white rounded-full p-1 shadow dark:bg-gray-700" />
              </div>

              <div className="flex items-center space-x-1 mt-auto">
                {[...Array(Math.floor(item.rating))].map((_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
                {item.rating % 1 !== 0 && (
                  <span className="text-yellow-400 text-lg">☆</span>
                )}
                <span className="text-sm text-gray-500 ml-2 dark:text-gray-400">
                  ({item.rating.toFixed(1)})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-2">
        <Button className="bg-blue-700 text-white hover:bg-blue-800 rounded px-4 py-2 mt-6 mx-auto block hover:-translate-y-0.5 transition-transform duration-200">
          Read More Testimonials
        </Button>
      </div> */}
    </Section>
  );
};

export default Testimonials;
