import React from "react";
import Section from "../Section";
import { FaCheck, FaGlobe, FaHeadset, FaMedal, FaUsers } from "react-icons/fa6";
import CountUp from "react-countup";
import { FaCheckCircle, FaProjectDiagram } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { LuHandshake } from "react-icons/lu";
import { MdAutoGraph, MdEmojiObjects } from "react-icons/md";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <Section
      id='about'
      className='bg-gray-100 py-12 lg:py-20 dark:bg-gray-900'
      as='main'
      aria-label='About GBS'>
      <article className='bg-white py-6 px-4 md:px-6 lg:px-10 xl:px-14 dark:bg-gray-800'>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          {/* Logo */}
          <figure className='flex justify-center'>
            <img
              src='/LOGO_NEW_01.webp'
              alt='GBS IT Consulting and Services Company Logo'
              className='max-h-[500px] size-auto object-contain'
              loading='lazy'
            />
          </figure>

          {/* Description */}
          <section className='flex flex-col gap-6 text-gray-700 dark:text-gray-200'>
            <header>
              <h1 className='text-3xl font-bold text-center lg:text-left'>
                Who We Are?
              </h1>
              <h2 className='text-blue-700 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left dark:text-blue-400'>
                Driving Innovation in IT, SAP & Geospatial Solutions for Over 15
                Years
              </h2>
            </header>
            <p className='text-base leading-relaxed text-justify'>
              GBS is a forward-thinking{" "}
              <strong>IT consulting and services company</strong> established in
              2010, focused on delivering tailored digital solutions that exceed
              client expectations. With a strong foundation in the{" "}
              <strong>global utility market</strong>, we empower enterprises
              through technology that drives operational excellence and business
              transformation.
            </p>
            <p className='text-base leading-relaxed text-justify'>
              As an <strong>ISO 27001:2022</strong> and{" "}
              <strong>ISO 9001:2015</strong> certified organization, GBS ensures
              compliance, quality, and security across every project. Our
              approach begins with understanding our client's business goals and
              delivering the right mix of <strong>SAP services</strong>,{" "}
              <strong>IT Solutions</strong>, and{" "}
              <strong>Technology based Geospatial services</strong> that
              generate measurable value.
            </p>
            <p className='text-base leading-relaxed text-justify'>
              Through proven expertise in <strong>SAP implementation</strong>,{" "}
              <strong>GIS</strong> & <strong>drone-based surveying</strong>, and
              enterprise IT development, we help clients streamline processes,
              improve data visibility, and achieve sustainable growth across
              industries.
            </p>
          </section>
        </div>
      </article>

      <section
        className='w-full flex flex-col bg-gradient-to-r from-blue-700 to-blue-500 p-6 min-h-[12rem] shadow-sm mt-12'
        aria-label='Why Choose GBS'>
        <header className='mb-6'>
          <h2 className='text-white text-3xl font-semibold'>Why Choose GBS?</h2>
        </header>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
          {[
            {
              icon: <FaCheckCircle size={30} />,
              title: "15+ Years of Proven Expertise",
              desc: "in digital transformation and consulting.",
            },
            {
              icon: <FaMedal size={30} />,
              title: "Certified Professionals",
              desc: "with deep domain and technical knowledge.",
            },
            {
              icon: <FaGlobe size={30} />,
              title: "Global Clientele",
              desc: "across utilities, infrastructure, government, and enterprise sectors",
            },
            {
              icon: <FaHeadset size={30} />,
              title: "24/7 Technical Support",
              desc: "ensuring business continuity and rapid response.",
            },
            {
              icon: <GrCertificate size={30} />,
              title: "ISO-Certified Excellence",
              desc: "with ISO 27001:2022 & ISO 9001:2015 certifications for security and quality",
            },
            {
              icon: <LuHandshake size={30} />,
              title: "Client-Centric Approach",
              desc: "focused on aligning solutions with business goals and ROI.",
            },
            {
              icon: <FaProjectDiagram size={30} />,
              title: "End-to-End Service Portfolio",
              desc: "covering SAP, IT development, GIS, and drone surveying.",
            },
            {
              icon: <MdAutoGraph size={30} />,
              title: "Agile & Scalable Solutions",
              desc: "tailored to meet evolving business needs.",
            },
            {
              icon: <MdEmojiObjects size={35} />,
              title: "Innovation-Driven Culture",
              desc: "leveraging emerging technologies like AI, IoT, and automation.",
            },
          ].map((item, i) => (
            <article className='flex gap-3' key={i}>
              <div
                className='mt-1 text-white text-xl 2xl:text-3xl'
                aria-hidden='true'>
                {item.icon}
              </div>
              <div>
                <h3 className='text-white text-xl 2xl:text-3xl font-semibold'>
                  {item.title}
                </h3>
                <p className='text-gray-200 mt-2 text-md 2xl:text-xl'>
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-10 px-4 md:px-6 lg:px-10 py-10 mx-auto'
        aria-label='GBS Achievements'>
        {[
          {
            count: "335",
            label: "Successful Projects",
            suffix: "+",
          },
          {
            count: "70",
            label: "Happy Clients",
            suffix: "+",
          },
          {
            count: "50",
            label: "IT Experts",
            suffix: "+",
          },
          {
            count: "15",
            label: "Years of Experience",
            suffix: "+",
          },
        ].map((item, i) => (
          <article
            key={i}
            className='w-full min-h-[100px] flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800'>
            <h4 className='text-blue-700 text-[2rem] md:text-[2.5rem] font-bold mb-4 text-center dark:text-blue-400'>
              <CountUp
                start={0}
                end={item.count}
                suffix={item.suffix || ""}
                enableScrollSpy
                scrollSpyDelay={50}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h4>
            <p className='text-gray-600 text-center text-sm md:text-base dark:text-gray-200'>
              {item.label}
            </p>
          </article>
        ))}
      </section>
    </Section>
  );
};

export default About;
