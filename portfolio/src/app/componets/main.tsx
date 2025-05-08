import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const main = () => {
    return (
        <div className="  mx-50  my-0 text-white "> 
        <div className="flex flex-row  items-center justify-between h-[800px]">

        <div className="absolute inset-0  z-0" />
      <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-purple-500 blur-[120px] opacity-20 rounded-full -z-10" />

      <section className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Hello, I'm <span className="underline underline-offset-4 decoration-purple-500">Sakthinathan V</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I build clean, interactive apps with React, Tailwind, and Python. Passionate about design, development, and making tech feel human.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
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
        <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-400">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </section>

            <div className="flex flex-col  items-center ">

                
                <Image src="/main/sakthi.jpg" alt="sakthi" width={400} height={500}  className="mt-30 rounded-xl shadow-lg"/>
            </div>
        </div>
       


       
            
        </div>
    );
}   
export default main;