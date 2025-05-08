'use client';

import React, { useState } from "react";

const Resume = () => {
  // Sort details to show latest first (based on year)
  const [filter, setFilter] = useState("all");

  const details = [
    {
      year: "2025",
      content: "AI Integration",
      about: "Developed an OCR-based FineReader app using Python and Tesseract. Integrated AI to extract editable text from images and PDFs. Focused on simplicity, accuracy, and user-focused features.",
      category: "project"
    },
    {
      year: "2024 - 2025",
      content: "UI Designer",
      about: "Designed clean and user-friendly interfaces for web and mobile apps. Applied UX principles to enhance usability and accessibility. Collaborated with developers to bring high-fidelity mockups to life using Figma.",
      category: "role"
    },
    {
      year: "2024 - 2025",
      content: "Frontend Developer",
      about: "Built dynamic and responsive web interfaces using React and Tailwind CSS. Focused on reusable components, accessibility, and mobile-first design. Ensured performance and cross-browser compatibility in all builds.",
      category: "role"
    },
    {
      year: "2024 - 2025",
      content: "App Developer",
      about: "Created mobile applications with React Native and Java for Android. Implemented navigation, state management, and secure authentication flows. Delivered smooth user experience across multiple screen sizes.",
      category: "role"
    },
    {
      year: "2024",
      content: "Portfolio Site",
      about: "Designed and built a personal portfolio using HTML, CSS, and JavaScript. Included sections for projects, resume, and contact with email integration. Deployed on GitHub Pages and optimized for SEO and performance.",
      category: "project"
    },
    {
      year: "2023 - 2025",
      content: "Tech Stack",
      about: "Worked across multiple technologies including Python, Java, React.js, and Firebase. Gained hands-on experience with tools like Git, Android Studio, and Postman. Confident in adapting to new frameworks and environments quickly.",
      category: "skills"
    },
  ];

  const filteredDetails = filter === "all" 
    ? details 
    : details.filter(item => item.category === filter);

  return (
    <div className="min-h-screen text-white mx-50  flex justify-center items-center ">
      <div className="max-w-7xl   ">
        <div className="text-center mb-12 ">
          <h1 className="text-5xl font-bold">Resume</h1>
          <div className="mt-6 flex justify-center items-center space-x-4">
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'role' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setFilter('role')}
            >
              Roles
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'project' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setFilter('project')}
            >
              Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'skills' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              onClick={() => setFilter('skills')}
            >
              Skills
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {filteredDetails.map((card, index) => (
            <div
              key={index}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              {/* Image-like border styling */}
              <div className="relative rounded-xl overflow-hidden h-full">
                {/* Decorative border frame with hover effect */}
                <div className="absolute px-10 inset-0 border-2 border-purple-900 rounded-2xl z-10 pointer-events-none transition-all duration-300 group-hover:border-4 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                {/* Card content with image-like styling */}
                <div
                  className="relative w-full h-full bg-gray-900 p-8 z-0 transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    opacity: 1,
                    transform: 'none',
                  }}
                >
                  {/* Corner embellishments that animate on hover */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-300 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-purple-700 text-xs px-2 py-1 rounded-full text-white opacity-75">
                    {card.category}
                  </div>

                  {/* Card content */}
                  <h2 className="text-xl font-semibold mb-2 text-gray-300">{card.year}</h2>
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">{card.content}</h3>
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

export default Resume;
