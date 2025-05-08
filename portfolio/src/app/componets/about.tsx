"use client";
import React from "react";

const about = () => {
  return (
    <div className="min-h-screen  text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-purple-400 mb-4">About Me</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I’m a passionate developer focused on creating clean, user-centered digital experiences.
            With experience in frontend, mobile apps, and AI integration, I love building projects that make an impact.
          </p>
        </section>

        {/* Profile and Info */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="/profile.jpg" // Update this path or use next/image
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2 text-purple-300">Who I Am</h2>
            <p className="text-gray-400">
              I'm a self-taught developer with a strong interest in building applications that combine utility with design.
              I focus on React, Tailwind CSS, Java, Python, and Firebase. My journey started with web basics and has grown into full-stack and app development.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">My Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center text-sm text-gray-400">
            <div className="hover:text-purple-400 transition">HTML</div>
            <div className="hover:text-purple-400 transition">CSS</div>
            <div className="hover:text-purple-400 transition">JavaScript</div>
            <div className="hover:text-purple-400 transition">React</div>
            <div className="hover:text-purple-400 transition">Tailwind</div>
            <div className="hover:text-purple-400 transition">Firebase</div>
            <div className="hover:text-purple-400 transition">Java</div>
            <div className="hover:text-purple-400 transition">Python</div>
            <div className="hover:text-purple-400 transition">Tesseract OCR</div>
            <div className="hover:text-purple-400 transition">Git & GitHub</div>
            <div className="hover:text-purple-400 transition">Postman</div>
            <div className="hover:text-purple-400 transition">Figma</div>
          </div>
        </section>

        {/* Timeline (optional) */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">Timeline</h2>
          <ul className="space-y-6 border-l border-purple-500 pl-6">
            <li>
              <div className="text-purple-400 font-medium">2025</div>
              <p className="text-gray-300">Built OCR AI app with Python & Tesseract</p>
            </li>
            <li>
              <div className="text-purple-400 font-medium">2024-2025</div>
              <p className="text-gray-300">Worked as UI/Frontend Developer using React + Tailwind</p>
            </li>
            <li>
              <div className="text-purple-400 font-medium">2023-2025</div>
              <p className="text-gray-300">Built mobile apps with React Native and Java (Android)</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default about;
