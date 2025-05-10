"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-purple-400 mb-4">About Me</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm an aspiring software engineer passionate about crafting clean, user-focused digital solutions. I specialize in frontend development and mobile apps, blending design and performance to create engaging experiences.
          </p>
        </section>

        {/* Profile and Info */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2 text-purple-300">Who I Am</h2>
            <p className="text-gray-400">
              I'm currently pursuing my B.E. in Computer Science Engineering at Sri Krishna College of Technology.I build web and mobile applications with a focus on clean design, user experience, and problem-solving through code.

            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">Timeline</h2>
          <ul className="space-y-6 border-l border-purple-500 pl-6">
            <li>
              <div className="text-purple-400 font-medium">2025</div>
              <p className="text-gray-300">Developed an OCR AI app using Python and Tesseract as part of an independent project.</p>
            </li>
            <li>
              <div className="text-purple-400 font-medium">2024–2025</div>
              <p className="text-gray-300">Worked on a frontend e-commerce web project using React.js and Tailwind CSS.</p>
            </li>
            <li>
              <div className="text-purple-400 font-medium">2024</div>
              <p className="text-gray-300">Participated in a college hackathon—built a mobile app with Java and Android Studio.</p>
            </li>
            <li>
              <div className="text-purple-400 font-medium">2023</div>
              <p className="text-gray-300">Completed Google Data Analytics Certificate; gained insights into structured problem solving.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
