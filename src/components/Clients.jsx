import React from "react";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clients, clients2 } from "../constants/constants";

const Clients = () => {
  return (
    <Section customPaddings="py-5 lg:py-8 xl:py-10">
      <div className="flex flex-col justify-center text-center px-[2rem] md:px-[3rem] lg:px-[5rem] ">
        <h2 className="text-gray-500 font-semibold text-[1rem]  leading-tight">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="py-2 lg:py-5 xl:py-8 mx-2 md:mx-8 lg:mx-10 xl:mx-12">
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
            spaceBetween={20}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-10 w-auto md:h-15"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pb-2 mx-2 md:mx-8 lg:mx-10 xl:mx-12">
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
            // slidesPerView= {4}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            spaceBetween={10}
          >
            {clients2.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-10 w-auto md:h-15"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
