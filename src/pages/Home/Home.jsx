import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import Hero from "../../components/Layout/Hero";
import Clients from "../../components/Layout/Clients";
import About from "../../components/Layout/About";
import Services from "../../components/Layout/Services";
import Button from "../../components/Button";
import Projects from "../../components/Layout/Projects";
import Testimonials from "../../components/Layout/Testimonials";
import Contact from "../../components/Layout/Contact";
import Footer from "../../components/Layout/Footer";
import { FaArrowUp } from "react-icons/fa6";
import { animateScroll, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Clients />
      <About />
      <Services />
      <div className="w-full flex flex-col md:flex-row px-4 lg:px-32 justify-between items-center bg-blue-600 p-6 mb-6 min-h-[12rem]">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-lg xl:text-2xl text-white font-bold">
            Ready to transform your business with our IT solutions?
          </h2>
          <p className="text-white text-sm md:text-base">
            Let's discuss how our services can help you achieve your business
            goals.
          </p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <Button
            onClick={scrollToContact}
            className="bg-white text-blue-700 rounded-md px-4 py-2 hover:-translate-y-1 transition-transform duration-200"
          >
            Get Started Today
          </Button>
        </div>
      </div>
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <div
        className={`fixed bottom-6 right-6 z-50 ${
          isScrolled ? "block" : "hidden"
        }`}
      >
        <div
          onClick={scrollTop}
          className="w-0 h-0 md:w-[50px] md:h-[50px] rounded-full bg-blue-600 text-white cursor-pointer flex justify-center items-center shadow-2xl shadow-gray-800 hover:bg-blue-700 transition-colors duration-300"
        >
          <FaArrowUp size={20} />
        </div>
      </div>
    </div>
  );
};

export default Home;
