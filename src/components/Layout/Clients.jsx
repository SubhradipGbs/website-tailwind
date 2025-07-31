import React from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clients, clients2 } from "../../constants/constants";

const Clients = () => {
  return (
    <Section customPaddings='py-5 lg:py-8 xl:py-10'>
      <section
        aria-labelledby='trusted-by-industry-leaders'
        className='flex flex-col justify-center text-center px-[2rem] md:px-[3rem] lg:px-[5rem]'>
        <h2
          id='trusted-by-industry-leaders'
          className='text-gray-500 font-semibold text-[1rem] leading-tight mb-4 dark:text-gray-400'>
          Trusted by Industry Leaders
        </h2>
        <div className='py-2 lg:py-5 xl:py-8 mx-2 md:mx-8 lg:mx-10 xl:mx-12 dark:bg-gray-800'>
          <Swiper
            className='mySwiper'
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            spaceBetween={20}
            aria-label='Client logos carousel'>
            <ul className='flex'>
              {clients.map((client, index) => (
                <SwiperSlide key={index} tag='li'>
                  <figure className='relative flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2'>
                    <img
                      src={`/sap/${client.logo}`}
                      alt={client.alt || `Logo of ${client.name || "client"}`}
                      className='h-15 md:h-20 w-auto bg-cover'
                      loading='lazy'
                    />
                    {client.name && (
                      <figcaption className='sr-only'>{client.name}</figcaption>
                    )}
                    <div className='absolute left-0 top-0 w-[100%] h-[100%]'></div>
                  </figure>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
        <div className='pb-2 mx-2 md:mx-8 lg:mx-10 xl:mx-12 dark:bg-gray-800'>
          <Swiper
            className='mySwiper'
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            spaceBetween={10}
            aria-label='Client logos carousel'>
            <ul className='flex'>
              {clients2.map((client, index) => (
                <SwiperSlide key={index} tag='li'>
                  <figure className='relative flex justify-center items-center h-full hover:scale-105 transition-transform duration-300 ease-in-out p-2'>
                    <img
                      src={client.logo}
                      alt={client.alt || `Logo of ${client.name || "client"}`}
                      className='h-15 md:h-20 w-auto bg-cover'
                      loading='lazy'
                    />
                    {client.name && (
                      <figcaption className='sr-only'>{client.name}</figcaption>
                    )}
                    <div className='absolute left-0 top-0 w-[100%] h-[100%]'></div>
                  </figure>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
      </section>
    </Section>
  );
};

export default Clients;
