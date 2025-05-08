const skills=()=>{


    const frontendSkills = [
        {
            



        }
      ]
    
    return(

        <main>
            <div className="flex flex-col mt-10 mx-50 my-0 text-white min-h-screen">
                <h1 className="flex justify-center text-white text-5xl  font-semibold">Skills</h1>
                <p className="text-gray-600  text-md px-40 mt-3">Skilled in frontend and mobile development using React, React Native, Java, and Python.
                Proficient with tools like Git, Figma, Firebase, and Postman, with a strong focus on clean, efficient code.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 overflow-x-auto">
  {[
    {
      year: "Frontend",
      content: "Modern Web Interfaces",
      about:
        "Learned React, Next.js, Tailwind CSS, responsive design, animations, and UI/UX best practices.",
      languages: [
        "React", "Next.js", "JavaScript", "TypeScript", "JSX", "HTML", "CSS", "Tailwind",  "Redux"
      ],
    },
    {
      year: "Backend",
      content: "Robust API Development",
      about:
        "Built APIs using Node.js and Express. Integrated databases, handled authentication, and deployed services.",
      languages: [
        "Node.js", "Express", "MongoDB", "PostgreSQL", "SQL", "Prisma", "JWT", "REST", "GraphQL"
      ],
    },
    {
      year: "DevOps & Tools",
      content: "Automation & Workflow",
      about:
        "Managed workflows using GitHub Actions, Docker, and CI/CD pipelines. Automated deployments and containerized apps.",
      languages: [
        "Docker", "Git", "GitHub Actions", "Bash", "NGINX", "Linux", "CI/CD", "AWS", "Vercel", "Figma","Vite","Android Studio"
      ],
    },
    {
      year: "AI Models",
      content: "Applied Machine Learning",
      about:
        "Explored LLMs, transformers, Gemini 1.5, embeddings, and RAG systems for AI-driven applications.",
      languages: [
        "Python", "PyTorch", "TensorFlow", "LangChain", "Gemini API", "OpenAI API", "Pandas", "NumPy", "Hugging Face"
      ],
    },
    {
      year: "System Programming",
      content: "Low-Level Efficiency",
      about:
        "Practiced memory management, pointers, and compiled programs for performance optimization.",
      languages: [
        "C", "C++", "Java", "Python", "MySql"
      ],
    },
  
  ].map((card, index) => (
    <div
      key={index}
      className="group transform transition-all duration-300 hover:scale-105"
    >
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 border-2 border-purple-900 rounded-2xl z-10 pointer-events-none transition-all duration-300 group-hover:border-4 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <div
          className="relative w-full h-full bg-gray-900 p-8 z-0 transition-all duration-300"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Corner Borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500 transition-all duration-300"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500 transition-all duration-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-300 group-hover:w-6 group-hover:h-6 group-hover:border-purple-500 transition-all duration-300"></div>

          {/* Content */}
          <h2 className="text-xl font-semibold mb-2 text-gray-300">{card.year}</h2>
          <h3 className="text-2xl font-bold text-purple-300 mb-3">{card.content}</h3>
          <p className="text-gray-300 mb-4">{card.about}</p>
          
          {/* Language/Tool Buttons */}
          <div className="flex flex-wrap gap-3">
            {card.languages.map((lang, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full shadow-lg shadow-purple-500/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 hover:border hover:border-purple-500 transition-all duration-300 ease-in-out ring-1 ring-white/10 backdrop-blur-sm"

                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    
                  }}
                >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



              
            </div>
        </main>
    );

}
export default skills;