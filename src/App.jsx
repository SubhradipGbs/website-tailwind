import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import About from "./components/About";
import Button from "./components/Button";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <About />
      <Services />
      <div className="w-vw flex flex-col md:flex-row px-1 lg:px-[8rem] justify-between items-center bg-blue-600 p-5 mb-4 min-h-[12rem]">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-[1rem] xl:text-[1.8rem] text-white font-bold">Ready to transform your business with our IT solutions?</h2>
          <p className="text-white text-sm">
            Let's discuss how our services can help you achieve your business
            goals.
          </p>
        </div>
        <div className="flex mt-auto md:mt-0">
          <Button className="bg-white text-blue-700 rounded-md hover:-translate-y-0.5 transition-transform duration-200">Get Started Today</Button>
        </div>
      </div>
      <Projects />
      <Testimonials />
      <Contact/>
    </>
  );
}

export default App;
