"use client";
import React, { useState } from "react";

const Myproject = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      year: "2025",
      content: "AI Integration",
      about:
        "Developed an OCR-based FineReader app using Python and Tesseract. Integrated AI to extract editable text from images and PDFs. Focused on simplicity, accuracy, and user-focused features.",
      category: "AI",
    },
    {
      year: "2024",
      content: "Portfolio Site",
      about:
        "Designed and built a personal portfolio using HTML, CSS, and JavaScript. Included sections for projects, resume, and contact with email integration. Deployed on GitHub Pages and optimized for SEO and performance.",
      category: "Web",
    },
  ];

  const filtered = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen text-white mx-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Projects</h1>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all" ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "AI" ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("AI")}
            >
              AI
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "Web" ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setFilter("Web")}
            >
              Web
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((card, index) => (
            <div
              key={index}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative rounded-xl overflow-hidden h-full">
                <div className="absolute inset-0 border-2 border-purple-900 rounded-2xl z-10 pointer-events-none transition-all duration-300 group-hover:border-4 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                <div
                  className="relative w-full h-full bg-gray-900 p-8 z-0 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>

                  <div className="absolute top-2 right-2 bg-purple-700 text-xs px-2 py-1 rounded-full text-white opacity-75">
                    {card.category}
                  </div>

                  <h2 className="text-xl font-semibold mb-2 text-gray-300">
                    {card.year}
                  </h2>
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    {card.content}
                  </h3>
                  <p className="text-gray-300">{card.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myproject;
