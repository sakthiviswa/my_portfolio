"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const main = () => {
  return (
    <div className="  mx-50  my-0  text-white ">
      <div className="flex flex-row  items-center justify-between h-[800px] mx-20">

        <div className="absolute inset-0  z-0" />
        <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-purple-500 blur-[120px] opacity-20 rounded-full -z-10" />

        <section className="z-10  px-6">
          <section className=" py-20">
            <h1 className="text-5xl md:text-4xl font-mediam text-transparent bg-clip-text">
              <span className="text-purple-700">SAKTHINATHAN V</span>
            </h1>
            <p className="mt-6 text-lg md:text-lg text-gray-600 max-w-2xl mx-auto">
              I'm a UI/UX designer and frontend developer focused on creating intuitive, responsive web experiences.
            </p>

            <div className="mt-6 text-lg md:text-6xl text-gray-250 max-w-2xl mx-auto">
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  2200,
                  'Frontend Developer',
                  2200,
                  'React Enthusiast',
                  2200,
                ]}
                wrapper="span"
                speed={15}
                repeat={Infinity}
              />
            </div>
          </section>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex  gap-4 flex-wrap">
            <a
              href="/about"
              className="px-6 py-2 rounded-full bg-purple-600 text-white hover:scale-105 hover:bg-purple-700 transition transform duration-300 shadow-md"
            >
              About Me
            </a>
            <a
              href="/projects"
              className="px-6 py-2 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-700 hover:text-white transition transform duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items:center gap-6 text-2xl text-gray-400">
            <a href="https://github.com/sakthiviswa" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sakthinathan-v-374a202a2/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="mailto:sakthinathan3110@email.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </section>

        <div className="flex flex-col  items-center ">


          <Image src="/main/sakthi.jpg" alt="sakthi" width={400} height={500} className="mt-30 rounded-xl shadow-lg" />
        </div>
      </div>





    </div>
  );
}
export default main;