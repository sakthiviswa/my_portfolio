"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optional: Integrate with a service like EmailJS, Formspree, etc.
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center px-6">
       
      <div className="  max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Left Section */}
        <div>
          <h2 className="text-6xl font-bold mb-6 text-purple-400">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            I'd love to hear from you! Whether you have a project in mind or just want to say hi, feel free to drop a message.
          </p>
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold text-purple-300">Email:</span>{" "}
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:underline">
                sakthinathan3110@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-purple-300">Phone:</span>{" "}
              <a href="tel:+1234567890" className="text-gray-300 hover:underline">
                +91 7373567056
              </a>
            </li>
            <li>
              <span className="font-semibold text-purple-300">Location:</span>{" "}
              <span className="text-gray-300">Coimbatore, Tamilnadu</span>
            </li>
          </ul>
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
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg shadow-purple-500/10 border border-purple-500/30 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-black border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-black border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-black border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
