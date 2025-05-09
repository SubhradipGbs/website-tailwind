import React, { useEffect, useState } from "react";
import Section from "../Section";
import Button from "../Button";
import { servceSlides } from "../../constants/constants";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { scroller } from "react-scroll";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = servceSlides.length;

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <Section id="home">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-12 lg:p-8 dark:from-blue-950 dark:to-blue-800 dark:text-gray-200">
        <div className="container px-4 md:px-6 flex flex-col gap-6 justify-center items-start max-w-2xl">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight">
              Innovative IT Solutions for the Modern Business Landscape
            </h1>
            <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem]">
              Empowering organizations with top-notch services in SAP
              consulting, IT, Geospatial technologies and services to drive
              digital transformation and sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => {
                scrollToSection("contact");
              }}
              className="bg-white text-blue-600 hover:bg-gray-200 hover:text-black rounded px-4 py-2"
            >
              Talk to an Expert
            </Button>
            <Button
              onClick={() => {
                scrollToSection("services");
              }}
              className="bg-yellow-400 text-black hover:bg-yellow-300 rounded px-4 py-2"
            >
              Explore our Services
            </Button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center mt-6 lg:mt-0">
          <img
            src="/celebration.png"
            alt="Logo"
            className="size-[30rem] sm:size-[40rem] lg:size-[30rem] object-cover"
          />
        </div>
      </div>

      {/* carousel */}
      <div className="relative w-full overflow-hidden bg-blue-700 text-white p-6 dark:bg-blue-900 dark:text-gray-200">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {servceSlides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col items-center justify-center h-full p-6">
                <h2 className="text-[1.2rem] md:text-[1.5rem] lg:text[1.8rem] font-bold mb-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-md lg:text-lg xl:text-xl mb-4 text-center">
                  {slide.description}
                </p>
                <Button
                  className="bg-blue-700 text-white hover:bg-blue-900 rounded px-4 py-2"
                  href={slide.href}
                >
                  {slide.btnText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <PiCaretLeftBold size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <PiCaretRightBold size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {servceSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
