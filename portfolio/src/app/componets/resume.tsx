const Resume = () => {
    const details = [
        {
          year: "2024 - 2025",
          content: "UI Designer",
          about: "Designed clean and user-friendly interfaces for web and mobile apps. Applied UX principles to enhance usability and accessibility. Collaborated with developers to bring high-fidelity mockups to life using Figma.",
        },
        {
          year: "2024 - 2025",
          content: "Frontend Developer",
          about: "Built dynamic and responsive web interfaces using React and Tailwind CSS. Focused on reusable components, accessibility, and mobile-first design. Ensured performance and cross-browser compatibility in all builds.",
        },
        {
          year: "2024 - 2025",
          content: "App Developer",
          about: "Created mobile applications with React Native and Java for Android. Implemented navigation, state management, and secure authentication flows. Delivered smooth user experience across multiple screen sizes.",
        },
        {
          year: "2025",
          content: "AI Integration",
          about: "Developed an OCR-based FineReader app using Python and Tesseract. Integrated AI to extract editable text from images and PDFs. Focused on simplicity, accuracy, and user-focused features.",
        },
        {
          year: "2024",
          content: "Portfolio Site",
          about: "Designed and built a personal portfolio using HTML, CSS, and JavaScript. Included sections for projects, resume, and contact with email integration. Deployed on GitHub Pages and optimized for SEO and performance.",
        },
        {
          year: "2023 - 2025",
          content: "Tech Stack",
          about: "Worked across multiple technologies including Python, Java, React.js, and Firebase. Gained hands-on experience with tools like Git, Android Studio, and Postman. Confident in adapting to new frameworks and environments quickly.",
        },
      ];
      
  
    return (
      <div className="min-h-screen  text-white py-12 px-6 mx-40">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Resume</h1>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-12"> 
          {details.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-10 hover:scale-105 transform transition duration-300 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2">{card.year}</h2>
              <h3 className="text-2xl font-bold text-purple-300 mb-3">{card.content}</h3>
              <p className="text-gray-300">{card.about}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Resume;
  